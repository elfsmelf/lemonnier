import TrustBar from "@/components/TrustBar";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Voices from "@/components/Voices";
import Services from "@/components/Services";
import WhyRisk from "@/components/WhyRisk";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

const headline = (
  <>
    Transform Your <em>Outdoor Space</em> Today!
  </>
);
const subhead = "Free Design Consultation & Fast Service Available!";

export default function Page() {
  return (
    <>
      <TrustBar />
      <Nav />
      <main>
        <Hero headline={headline} subhead={subhead} />
        <About />
        <Voices />
        <Services />
        <WhyRisk />
        <Process />
        <FAQ />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
