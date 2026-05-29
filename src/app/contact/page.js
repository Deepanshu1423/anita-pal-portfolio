import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact | Anita Pal HR Portfolio",
  description: "Contact Anita Pal for HR opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
    </>
  );
}