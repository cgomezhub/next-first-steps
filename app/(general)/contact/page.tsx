import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "SEO description for Contact Page",
  keywords: ["SEO", "Next.js", "contact"],
};

export default function Contactpage() {
  return (
    <>
      <span className="text-7xl"> Contact page</span>
    </>
  );
}
