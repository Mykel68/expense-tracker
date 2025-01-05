import CTA from "@/components/CTA";
import Features from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col  bg-card   mx-auto  min-h-screen">
      {/* <main className="flex flex-col items-center justify-center gap-8 px-6 py-24 text-center"> */}
      <Navbar />
      <Hero />
      <main className="gap-8 flex md:px-8 mx-auto py-6 container flex-col">
        <Features />
        <HowItWorks />
        <Testimonials />
      </main>
      <CTA />
      <Footer />
      {/* </main> */}
    </div>
  );
}
