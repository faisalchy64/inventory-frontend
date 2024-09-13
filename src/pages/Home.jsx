import Hero from "../components/Hero";
import Features from "../components/Features";
import Container from "../components/Container";
import Pricing from "../components/Pricing";
import Testimonial from "../components/Testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Container />
      <Pricing />
      <Testimonial />
    </main>
  );
}
