import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Experience | Anita Pal HR Portfolio",
  description: "Professional HR experience of Anita Pal.",
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Experience />
      </main>
      <Footer />
    </>
  );
}