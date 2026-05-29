import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About | Anita Pal HR Portfolio",
  description: "About Anita Pal, Assistant Manager – Human Resources.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <About />
        <Education />
      </main>
      <Footer />
    </>
  );
}