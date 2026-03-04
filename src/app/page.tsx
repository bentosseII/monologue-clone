import Hero from "@/components/Hero";
import ValueProp from "@/components/ValueProp";
import Features from "@/components/Features";
import Testimonial from "@/components/Testimonial";
import Languages from "@/components/Languages";
import UseCases from "@/components/UseCases";
import FeatureGrid from "@/components/FeatureGrid";
import Privacy from "@/components/Privacy";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white overflow-x-hidden">
      <Hero />
      <ValueProp />
      <Features />
      <Testimonial
        quote="Monologue is a true productivity game changer, and I love that it's built on top of open models."
        name="Julien Chaumond"
        title="Cofounder and CTO of Hugging Face"
      />
      <Languages />
      <UseCases />
      <FeatureGrid />
      <Testimonial
        quote="It's the simplest voice to text app I've used! Instantly became a part of my personal productivity stack and has stuck."
        name="Wade Foster"
        title="Cofounder and CEO of Zapier"
      />
      <Privacy />
      <Pricing />
      <Footer />
    </main>
  );
}
