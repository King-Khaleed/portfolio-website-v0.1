import { Search, Edit3, Code, Rocket, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const processSteps = [
  {
    icon: Search,
    title: "1. Discovery",
    description: "We begin with a conversation to define your objectives and understand your vision. This ensures the project is aligned with your business goals from the start.",
    timeline: "1-2 Business Days"
  },
  {
    icon: Edit3,
    title: "2. Blueprint",
    description: "A strategic plan and design wireframe are drafted. We map out the site architecture and user flow before any code is written, ensuring a solid foundation.",
    timeline: "3-5 Business Days"
  },
  {
    icon: Code,
    title: "3. Execution",
    description: "The build commences. Clean, efficient code brings the blueprint to life, with a focus on performance, security, and mobile-first optimisation.",
    timeline: "5-10 Business Days"
  },
  {
    icon: Rocket,
    title: "4. Launch",
    description: "After a final review and your approval, the website is deployed. Your new digital asset goes live, ready to perform for your audience.",
    timeline: "1 Business Day"
  },
  {
    icon: ShieldCheck,
    title: "5. Support",
    description: "My support continues post-launch. I provide the necessary handover materials and remain available to ensure seamless operation and address future needs.",
    timeline: "Ongoing"
  },
];

export default function ProcessPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <section className="text-center mb-16 md:mb-20">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-4">The Process</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          A deliberate sequence designed for precision and results.
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
                <p className="text-muted-foreground mb-3">{step.description}</p>
                <p className="text-sm font-medium text-primary">{step.timeline}</p>
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

       <section className="mt-16 md:mt-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Begin?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Take the first step towards establishing your definitive online presence.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
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
