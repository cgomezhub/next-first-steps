import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "SEO description for Pricing Page",
  keywords: ["SEO", "Next.js", "pricing"],
};

export default function Pricingpage() {
  return (
    <>
      <span className="text-7xl">Pricing page</span>
    </>
  );
}
