import { Search, PenTool, Code, Rocket, Wrench } from "lucide-react";

const processSteps = [
  {
    icon: Search,
    title: "1. Discovery & Strategy",
    description: "We start by diving deep into your project goals, target audience, and technical requirements. This phase is all about aligning our visions and creating a solid roadmap for success.",
  },
  {
    icon: PenTool,
    title: "2. Design & Prototyping",
    description: "I translate our strategy into tangible designs, focusing on user experience (UX) and user interface (UI). We'll create wireframes and prototypes to visualize the dApp's flow and feel.",
  },
  {
    icon: Code,
    title: "3. Development & Testing",
    description: "This is where the magic happens. I write clean, secure, and efficient code for both smart contracts and the frontend, following best practices and conducting rigorous testing throughout.",
  },
  {
    icon: Rocket,
    title: "4. Deployment & Launch",
    description: "After thorough audits and your final approval, we deploy the smart contracts to the mainnet and launch the dApp. I'll handle the entire deployment process to ensure a smooth release.",
  },
  {
    icon: Wrench,
    title: "5. Maintenance & Support",
    description: "The journey doesn't end at launch. I offer ongoing support and maintenance packages to ensure your application remains secure, updated, and performs optimally as the ecosystem evolves.",
  },
];

export default function ProcessPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">My Process</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          A structured and collaborative approach to bring your Web3 vision to life, from idea to launch.
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
    </div>
  );
}
