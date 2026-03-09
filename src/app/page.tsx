import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Works from "@/components/Works";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MouseStalker from "@/components/MouseStalker";

export default function Home() {
  return (
    <main className="bg-[#060606] min-h-screen cursor-none md:cursor-none">
      <MouseStalker />
      <Hero />
      <Profile />
      <Works />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
