import Navbar from "@/components/Navbar";
import Expertise from "@/components/Expertise";
import Tools from "@/components/Tools";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Expertise | Anita Pal HR Portfolio",
  description:
    "HR expertise of Anita Pal including recruitment, payroll, compliance, HRIS and employee lifecycle management.",
};

export default function ExpertisePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Expertise />
        <Tools />
      </main>
      <Footer />
    </>
  );
}