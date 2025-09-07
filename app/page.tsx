// app/page.tsx
import Hero from "@/components/Hero";
import ApartmentList from "@/components/ApartmentList";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import AboutUs from "@/components/AboutUs";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <ApartmentList />
      <Services />
      <ContactForm />
    </main>
  );
}
