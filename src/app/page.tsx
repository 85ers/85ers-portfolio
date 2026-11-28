import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Works from "@/components/Works";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MouseStalker from "@/components/MouseStalker";
import MotionPreference from "@/components/MotionPreference";

export default function Home() {
  return (
    <MotionPreference>
      <main className="bg-[#060606] min-h-screen">
        <MouseStalker />
        <Hero />
        <Profile />
        <Works />
        <Process />
        <Contact />
        <Footer />
      </main>
    </MotionPreference>
  );
}
