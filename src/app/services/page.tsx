import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    title: "Starter Website",
    description: "Best for new businesses needing a professional online presence.",
    price: "₦150,000",
    features: [
      "3-Page Custom Website",
      "Mobile-Friendly Design",
      "Contact Form & Map",
      "1 Year Free Hosting & Domain",
      "Basic SEO Setup",
    ],
  },
  {
    title: "Business Website",
    description: "For growing businesses wanting more features and pages.",
    price: "₦300,000",
    features: [
      "Everything in Starter, plus:",
      "Up to 8 Pages",
      "Photo Gallery / Portfolio",
      "WhatsApp Integration",
      "Social Media Links",
      "Advanced SEO Setup",
    ],
    popular: true,
  },
  {
    title: "E-commerce Store",
    description: "A complete solution to sell your products online.",
    price: "₦500,000+",
    features: [
      "Everything in Business, plus:",
      "Full Online Store Setup",
      "Online Payment Integration",
      "Product Upload & Management",
      "Customer Account System",
      "Basic Store Training",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Simple, Transparent Pricing</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Choose a package that fits your needs and budget. No hidden fees.
        </p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {packages.map((pkg) => (
          <Card key={pkg.title} className={`flex flex-col h-full ${pkg.popular ? "border-primary shadow-lg shadow-primary/20" : ""}`}>
            <CardHeader>
              {pkg.popular && <div className="text-sm font-bold text-primary text-center mb-2">MOST POPULAR</div>}
              <CardTitle className="text-2xl">{pkg.title}</CardTitle>
              <CardDescription>{pkg.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-4xl font-bold mb-6">{pkg.price}</div>
              <ul className="space-y-4">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" variant={pkg.popular ? "default" : "outline"}>
                <Link href="/contact">{pkg.price === "Let's Talk" ? "Contact Me" : "Start With This Package"}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>

      <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Need Something Different?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          I also offer services like logo design, ongoing maintenance, and advanced SEO. Let's discuss your specific business needs.
        </p>
        <Button asChild>
          <Link href="/contact">Need Something Custom? Let’s Talk</Link>
        </Button>
      </section>
    </div>
  );
}
