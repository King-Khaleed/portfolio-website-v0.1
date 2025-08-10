import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Dot } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    name: "Foundation",
    intro: "Establish your digital presence. A clean, professional website built to convert visitors into customers.",
    price: "₦80,000 - ₦120,000",
    idealFor: "New businesses and professionals requiring a powerful online start.",
    timeline: "2-3 Weeks",
    features: [
      { category: "Design", items: ["Up to 3 custom-designed pages", "Mobile-first responsive design", "Brand alignment"] },
      { category: "Functionality", items: ["Contact & inquiry forms", "Google Maps integration", "Basic on-page SEO"] },
      { category: "Hosting & Support", items: ["1 year free domain & hosting", "30 days post-launch support"] },
    ],
    notIncluded: ["Advanced features (e-commerce, bookings)", "Content writing"],
    popular: false,
  },
  {
    name: "Momentum",
    intro: "Expand your reach and capabilities. A multi-page site designed for growth and deeper customer engagement.",
    price: "₦180,000 - ₦280,000",
    idealFor: "Growing businesses ready to showcase a wider range of services or products.",
    timeline: "3-5 Weeks",
    features: [
      { category: "Design", items: ["Up to 8 custom-designed pages", "Advanced layouts & animations", "Portfolio or gallery section"] },
      { category: "Functionality", items: ["All Foundation features", "WhatsApp chat integration", "Social media feed embeds"] },
      { category: "Hosting & Support", items: ["1 year free domain & hosting", "60 days post-launch support"] },
    ],
    notIncluded: ["Full e-commerce functionality", "Logo design"],
    popular: true,
  },
  {
    name: "Dominion",
    intro: "Build your digital flagship. A comprehensive solution for businesses aiming to lead their market online.",
    price: "₦400,000 - ₦750,000+",
    idealFor: "Market leaders and businesses requiring robust e-commerce or custom functionality.",
    timeline: "5-8+ Weeks",
    features: [
      { category: "Design", items: ["Unlimited pages, bespoke design", "Premium UI/UX and interactions", "Full brand integration"] },
      { category: "Functionality", items: ["All Momentum features", "Full e-commerce with payments", "Customer account systems", "Custom feature development"] },
      { category: "Hosting & Support", items: ["1 year premium hosting", "90 days priority support & training"] },
    ],
    notIncluded: ["Ongoing marketing campaigns", "Third-party service fees"],
    popular: false,
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Website Packages</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Solutions engineered for results. Each level is an investment in your digital future.
        </p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {packages.map((pkg) => (
          <Card key={pkg.name} className={`flex flex-col h-full bg-card/80 backdrop-blur-sm ${pkg.popular ? "border-primary shadow-lg shadow-primary/20" : ""}`}>
            <CardHeader className="pb-4">
              {pkg.popular && <div className="text-sm font-bold text-primary text-center mb-2">MOST POPULAR</div>}
              <CardTitle className="text-2xl">{pkg.name}</CardTitle>
              <p className="text-muted-foreground pt-2 h-20">{pkg.intro}</p>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <div className="mb-6">
                <p className="text-3xl font-bold tracking-tight">{pkg.price}</p>
                <p className="text-sm text-muted-foreground mt-1">Timeline: {pkg.timeline}</p>
              </div>

              <div className="space-y-6">
                <div>
                    <h4 className="font-semibold mb-2 text-primary">Ideal For</h4>
                    <p className="text-sm text-muted-foreground">{pkg.idealFor}</p>
                </div>
                
                <div>
                    <h4 className="font-semibold mb-3 text-primary">Includes</h4>
                    <div className="space-y-4">
                        {pkg.features.map(featureGroup => (
                            <div key={featureGroup.category}>
                                <p className="font-medium text-sm text-foreground/90 mb-2">{featureGroup.category}</p>
                                <ul className="space-y-2">
                                    {featureGroup.items.map(item => (
                                        <li key={item} className="flex items-start gap-3">
                                            <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                            <span className="text-sm text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="font-semibold mb-2 text-primary">Not Included</h4>
                     <ul className="space-y-1.5">
                        {pkg.notIncluded.map(item => (
                            <li key={item} className="flex items-center gap-2">
                                <Dot className="h-4 w-4 text-muted-foreground/50 shrink-0" />
                                <span className="text-sm text-muted-foreground">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
              </div>

            </CardContent>
            <CardFooter className="mt-4">
              <Button asChild className="w-full" variant={pkg.popular ? "default" : "outline"}>
                <Link href="/contact">Start With {pkg.name}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>

      <section className="mt-24 text-center bg-secondary py-16 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Bespoke Solutions</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          For projects requiring unique functionality or design, I offer custom development retainers. <br/> Let's discuss your specific objectives.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Request a Custom Quote</Link>
        </Button>
      </section>
    </div>
  );
}
