import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const skills = [
  { name: "Web Development", level: 95 },
  { name: "AI-Assisted Builds", level: 90 },
  { name: "Mobile Optimisation", level: 92 },
  { name: "Local Hosting & Domains", level: 85 },
];

const techStack = ["Local Insight", "Quality Focused", "Fast Turnaround", "Ongoing Support"];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <section className="text-center mb-16 md:mb-20">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-4">Your Partner in Digital Growth</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          I build professional, affordable websites that help Nigerian businesses succeed online.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-16 md:mb-20">
        <div className="md:col-span-1">
          <Image
            src="https://placehold.co/400x400.png"
            alt="Developer portrait"
            width={400}
            height={400}
            className="rounded-lg shadow-lg mx-auto"
            data-ai-hint="developer portrait"
          />
        </div>
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-4">Local Expertise, Global Standards</h2>
          <p className="text-muted-foreground mb-4">
            I started this service to solve a simple problem: too many Nigerian small businesses are invisible online. I combine my web development skills with a deep understanding of the local market to create websites that are not just beautiful, but are powerful tools for growth.
          </p>
          <p className="text-muted-foreground">
            Using modern tools, including AI, allows me to work efficiently, keeping your costs down and delivering your project faster without ever compromising on quality. My focus is on getting your business the online presence it deserves.
          </p>
        </div>
      </section>

      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Me?</h2>
          <p className="text-muted-foreground mt-2">The right partner for your business.</p>
        </div>
        <Card>
          <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Core Skills</h3>
              <div className="space-y-4">
                {skills.map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <Progress value={skill.level} className="h-2 [&>div]:bg-primary" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">My Promise</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map(tech => (
                  <Badge key={tech} variant="secondary" className="text-base px-4 py-2">{tech}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="text-center mt-16 md:mt-20">
        <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          A professional website is the first step. Let's build it together.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Let’s Build Your Online Presence</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Book a Free Call</Link>
            </Button>
          </div>
      </section>
    </div>
  );
}
