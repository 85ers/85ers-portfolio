// Cloudflare Workers：動画（mp4）だけ、範囲リクエスト（Range）に応える。
// 静的アセット配信は Range に応えず全体（200）を返すため、Safari・iPhone で mp4 が再生できない。
// wrangler.jsonc の run_worker_first で、/works/ 配下の mp4 のときだけ、この Worker を通す。
export default {
  async fetch(request, env) {
    const range = request.headers.get("Range");
    // 元のアセットは、Range を外して全体を取得する
    const assetReq = new Request(request.url, { method: "GET" });
    const res = await env.ASSETS.fetch(assetReq);
    if (!res.ok) return res;

    const base = new Headers(res.headers);
    base.set("Accept-Ranges", "bytes");
    base.delete("Content-Length");

    if (request.method === "HEAD") {
      const buf = await res.arrayBuffer();
      base.set("Content-Length", String(buf.byteLength));
      return new Response(null, { status: 200, headers: base });
    }

    const buf = await res.arrayBuffer();
    const size = buf.byteLength;
    const m = range && /^bytes=(\d*)-(\d*)$/.exec(range.trim());
    if (!m || (m[1] === "" && m[2] === "")) {
      base.set("Content-Length", String(size));
      return new Response(buf, { status: 200, headers: base });
    }
    let start, end;
    if (m[1] === "") {
      // 末尾からの指定（bytes=-N）
      const n = parseInt(m[2], 10);
      start = Math.max(0, size - n);
      end = size - 1;
    } else {
      start = parseInt(m[1], 10);
      end = m[2] === "" ? size - 1 : Math.min(parseInt(m[2], 10), size - 1);
    }
    if (start >= size || start > end) {
      return new Response(null, { status: 416, headers: { "Content-Range": `bytes */${size}`, "Accept-Ranges": "bytes" } });
    }
    base.set("Content-Range", `bytes ${start}-${end}/${size}`);
    base.set("Content-Length", String(end - start + 1));
    return new Response(buf.slice(start, end + 1), { status: 206, headers: base });
  },
};
