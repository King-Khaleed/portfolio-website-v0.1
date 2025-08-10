import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    title: "dApp Starter",
    description: "Perfect for new projects and MVPs.",
    price: "$5,000+",
    features: [
      "Custom Smart Contract (ERC721/ERC20)",
      "Frontend Integration",
      "Wallet Connectivity",
      "Unit & Integration Testing",
      "Deployment to Testnet",
    ],
  },
  {
    title: "Pro dApp",
    description: "For complex applications requiring scalability and advanced features.",
    price: "$15,000+",
    features: [
      "Everything in Starter, plus:",
      "Complex Multi-Contract Architecture",
      "Off-chain data integration (The Graph)",
      "Advanced Security Audit",
      "Gas Optimization",
      "Mainnet Deployment Strategy",
    ],
    popular: true,
  },
  {
    title: "Enterprise Custom",
    description: "A complete, tailor-made solution for your business.",
    price: "Let's Talk",
    features: [
      "Everything in Pro, plus:",
      "Dedicated Project Management",
      "Scalable Infrastructure Design",
      "Ongoing Maintenance & Support",
      "Team Training & Documentation",
      "Full IP Ownership",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Services & Packages</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Transparent pricing and flexible packages to fit your project's needs.
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
                <Link href="/contact">{pkg.price === "Let's Talk" ? "Contact Me" : "Get Started"}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>

      <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Need Something Else?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          I also offer consultations, smart contract audits, and custom feature development. Let's discuss your unique requirements.
        </p>
        <Button asChild>
          <Link href="/contact">Book a Consultation</Link>
        </Button>
      </section>
    </div>
  );
}
