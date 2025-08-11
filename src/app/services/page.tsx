import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Dot } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    name: "PACKAGE 1: DIGITAL PRESENCE",
    price: "₦60,000 - ₦85,000",
    idealFor: "New businesses, sole proprietors, personal brands",
    included: {
      pages: {
        title: "Pages (3-5 pages):",
        items: [
          "Home page with business overview",
          "About us/About me page",
          "Services or Products page",
          "Contact page with form",
          "Optional: Testimonials or Gallery page",
        ],
      },
      design: {
        title: "Design & Technical:",
        items: [
          "Mobile-responsive design",
          "Professional template customization",
          "Basic color scheme matching business",
          "Up to 10 business photos included",
          "Fast loading optimization",
        ],
      },
      functionality: {
        title: "Functionality:",
        items: [
          "Contact form with email notifications",
          "WhatsApp click-to-chat button",
          "Google Maps integration",
          "Social media links",
          "Basic SEO setup (title tags, meta descriptions)",
        ],
      },
      hosting: {
        title: "Hosting & Domain:",
        items: [
          ".com.ng domain included (₦6,100 value)",
          "Shared hosting for 1 year (₦18,000 value)",
          "Free SSL certificate",
          "Daily backups",
        ],
      },
    },
    notIncluded: [
      "E-commerce functionality",
      "User accounts/login systems",
      "Booking/appointment systems",
      "Blog or news sections",
      "Advanced animations",
      "Custom programming",
    ],
    timeline: "14 - 25 days",
    support: "30 days free support for basic issues",
    popular: false,
  },
  {
    name: "PACKAGE 2: BUSINESS GROWTH",
    price: "₦140,000 - ₦220,000",
    idealFor: "Established businesses, service providers, small retailers",
    included: {
      pages: {
        title: "Pages (5-10 pages):",
        items: [
          "All pages from Digital Presence package",
          "Detailed services/products pages",
          "Blog/news section (up to 10 posts)",
          "Portfolio/gallery section",
          "FAQ page",
          "Privacy policy and terms pages",
        ],
      },
      design: {
        title: "Design & Technical:",
        items: [
          "Custom design matching brand identity",
          "Advanced responsive design (mobile, tablet, desktop)",
          "Custom color scheme and typography",
          "Professional photography integration (up to 30 photos)",
          "Speed optimization and compression",
        ],
      },
      functionality: {
        title: "Functionality:",
        items: [
          "Advanced contact forms (multi-step, file uploads)",
          "Service booking forms (basic, no real-time calendar)",
          "Newsletter signup integration",
          "Social media feed integration",
          "Blog management system (easy content updates)",
          "Photo galleries with lightbox",
          "Customer testimonials section",
          "Google Analytics setup",
        ],
      },
      marketing: {
          title: "Marketing Features:",
          items: [
            "Basic SEO optimization",
            "Google My Business integration",
            "Social media sharing buttons",
            "Open Graph tags for social sharing",
            "XML sitemap generation",
          ]
      },
      hosting: {
        title: "Hosting & Domain:",
        items: [
            "Premium .com domain OR custom .com.ng",
            "Enhanced shared hosting (₦94,500/year value)",
            "Priority support access",
            "Enhanced security features",
        ],
      },
    },
    notIncluded: [
        "Online payment processing",
        "User registration/login",
        "Real-time booking calendar",
        "Inventory management",
        "Multi-user dashboards",
        "Custom web applications",
    ],
    timeline: "30 - 45 days",
    support: "90 days free support + 3 free content updates",
    popular: true,
  },
  {
    name: "PACKAGE 3: DIGITAL BUSINESS HUB",
    price: "₦300,000 - ₦500,000",
    idealFor: "E-commerce, service businesses, professional firms",
    included: {
      pages: {
        title: "Unlimited Pages & Features:",
        items: [
            "All features from previous packages",
            "Unlimited content pages",
            "Resource/download sections",
            "Multiple contact forms for different purposes",
            "Advanced portfolio/case study sections",
        ],
      },
      ecommerce: {
          title: "E-commerce Capabilities:",
          items: [
            "Product catalog with categories",
            "Shopping cart functionality",
            "Payment integration (Paystack/Flutterwave)",
            "Order management system",
            "Digital product delivery",
            "Discount codes and promotions",
            "Basic inventory tracking",
          ]
      },
      functionality: {
        title: "Advanced Functionality:",
        items: [
            "User account registration and login",
            "Customer dashboard for order history",
            "Appointment/booking system with calendar",
            "Advanced contact forms with conditional logic",
            "Email automation setup",
            "Advanced SEO with schema markup",
            "Multi-language support (if needed)",
        ],
      },
       business: {
          title: "Business Management:",
          items: [
            "Basic CRM integration",
            "Email marketing setup (Mailchimp/similar)",
            "Advanced analytics and tracking",
            "Performance monitoring",
            "Security enhancements",
          ]
      },
      design: {
          title: "Design & Experience:",
          items: [
            "Completely custom design",
            "Advanced animations and interactions",
            "Professional photography/graphics",
            "Brand identity integration",
            "User experience optimization",
          ]
      },
      hosting: {
        title: "Hosting & Infrastructure:",
        items: [
            "Premium .com domain with privacy protection",
            "VPS hosting OR unlimited shared hosting",
            "Enhanced security and monitoring",
            "Priority technical support",
            "Advanced backup solutions",
        ],
      },
    },
    notIncluded: [
        "Complex web applications (like Uber/social networks)",
        "Real-time chat systems",
        "Advanced AI features",
        "Mobile app development",
        "Custom software development beyond website scope",
    ],
    timeline: "3 - 6 months",
    support: "6 months priority support + monthly maintenance calls",
    popular: false,
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <section className="text-center mb-16 md:mb-20">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Structured Website Packages</h1>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {packages.map((pkg) => (
          <Card key={pkg.name} className={`flex flex-col h-full bg-card/80 backdrop-blur-sm ${pkg.popular ? "border-primary shadow-lg shadow-primary/20" : ""}`}>
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold">{pkg.name}</CardTitle>
              <CardDescription className="pt-2 !text-muted-foreground">
                <span className="font-bold text-foreground">{pkg.price}</span>
                <br />
                <span className="font-semibold">Perfect for:</span> {pkg.idealFor}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col space-y-6">
              <div>
                <h4 className="font-semibold mb-3 text-primary">What's Included:</h4>
                <div className="space-y-4">
                  {Object.values(pkg.included).map(group => (
                    <div key={group.title}>
                      <p className="font-medium text-sm text-foreground/90 mb-2">{group.title}</p>
                      <ul className="space-y-2">
                        {group.items.map(item => (
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
                <h4 className="font-semibold mb-2 text-primary">What's NOT Included:</h4>
                 <ul className="space-y-1.5">
                    {pkg.notIncluded.map(item => (
                        <li key={item} className="flex items-center gap-2">
                            <Dot className="h-4 w-4 text-muted-foreground/50 shrink-0" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                    ))}
                </ul>
              </div>

              <div>
                  <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">Timeline:</span> {pkg.timeline}</p>
                  <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">Support:</span> {pkg.support}</p>
              </div>

            </CardContent>
            <CardFooter className="mt-4">
              <Button asChild className="w-full" variant={pkg.popular ? "default" : "outline"}>
                <Link href="/contact">Select Package</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>

      <section className="mt-24 text-center bg-secondary py-16 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          For unique projects requiring features beyond these packages, I offer bespoke development. <br/>Let's build to your exact specifications.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Request a Custom Quote</Link>
        </Button>
      </section>
    </div>
  );
}
