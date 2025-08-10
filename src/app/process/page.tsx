import { Search, PenTool, Code, Rocket, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const processSteps = [
  {
    icon: Search,
    title: "1. Discovery Call (1-2 Days)",
    description: "We'll have a quick chat to understand your business and what you need from a website. I'll provide a clear quote and timeline.",
  },
  {
    icon: PenTool,
    title: "2. Planning & Design (3-5 Days)",
    description: "I create a simple, professional design that reflects your brand and is easy for your customers to use. You'll approve it before we build.",
  },
  {
    icon: Code,
    title: "3. Development (5-10 Days)",
    description: "I build your fast, mobile-friendly website. I handle all the technical details so you don't have to worry about a thing.",
  },
  {
    icon: Rocket,
    title: "4. Launch (1 Day)",
    description: "After your final review and approval, I take your website live on the internet for the world to see.",
  },
  {
    icon: Wrench,
    title: "5. Support & Handover",
    description: "I'll show you how to manage your site and remain available for any questions or future updates you might need.",
  },
];

export default function ProcessPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">My Process</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          A clear and efficient process to get your business online, fast.
        </p>
      </section>

      <section className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-0.5 bg-border hidden md:block" aria-hidden="true"></div>
        
        <div className="space-y-12">
          {processSteps.map((step, index) => (
            <div key={step.title} className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:order-2 md:text-left'}`}>
                <div className="inline-block p-4 bg-secondary rounded-lg mb-4 md:hidden">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-2">{step.title}</h2>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              <div className="md:w-auto md:order-1 relative hidden md:block">
                <div className="h-16 w-16 bg-secondary rounded-full flex items-center justify-center border-4 border-background">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

       <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Let's take the first step to growing your business online.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Begin Your Project</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Schedule Your Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
