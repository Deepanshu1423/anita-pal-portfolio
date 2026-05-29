import "./globals.css";

export const metadata = {
  title: {
    default: "Anita Pal | Human Resource Professional",
    template: "%s | Anita Pal Portfolio",
  },
  description:
    "Professional portfolio of Anita Pal, Human Resource Professional with experience in HR operations, payroll, compliance, recruitment, HRIS and employee lifecycle management.",
  keywords: [
    "Anita Pal",
    "Human Resource Professional",
    "HR Portfolio",
    "HR Operations",
    "Payroll",
    "Compliance",
    "Talent Acquisition",
    "Employee Lifecycle",
  ],
  authors: [{ name: "Anita Pal" }],
  creator: "Anita Pal",
  openGraph: {
    title: "Anita Pal | Human Resource Professional",
    description:
      "Portfolio of Anita Pal, Human Resource Professional specializing in HR operations, payroll, compliance, recruitment and employee lifecycle management.",
    type: "website",
    locale: "en_IN",
    siteName: "Anita Pal Portfolio",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}