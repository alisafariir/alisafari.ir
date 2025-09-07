import AboutSection from "@/components/home/about-section/AboutSection";
import ContactSection from "@/components/home/contact-section/ContactSection";

export default function Home() {
  return (
    <div className="container px-6 md:px-0 mx-auto md:max-w-5xl py-16 h-screen flex flex-col justify-center">
      <AboutSection />
      <hr className="my-8"></hr>

      <ContactSection />
    </div>
  );
}
