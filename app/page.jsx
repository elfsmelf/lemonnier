import TrustBar from "@/components/TrustBar";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Voices from "@/components/Voices";
import Process from "@/components/Process";
import Work from "@/components/Work";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

const headline = (
  <>
    Perth&apos;s high-end <em>landscape designers</em> &amp; builders.
  </>
);
const subhead =
  "Considered gardens from concept to handover. Free on-site consult. Fixed-price quotes. 15 years experience across Perth's western suburbs.";

export default function Page() {
  return (
    <>
      <TrustBar />
      <Nav />
      <main>
        <Hero headline={headline} subhead={subhead} />
        <LogoStrip />
        <Stats />
        <Work />
        <Voices />
        <Process />
        <Services />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
