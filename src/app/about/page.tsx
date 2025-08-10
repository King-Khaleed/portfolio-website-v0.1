import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const skills = [
  { name: "Solidity", level: 95 },
  { name: "React / Next.js", level: 90 },
  { name: "Ethers.js / Web3.js", level: 92 },
  { name: "Node.js", level: 85 },
  { name: "The Graph", level: 80 },
  { name: "IPFS", level: 75 },
];

const techStack = ["TypeScript", "Hardhat", "Foundry", "OpenZeppelin", "Tailwind CSS", "GraphQL"];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">About Me</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          A passionate developer bridging the gap between innovative ideas and the decentralized world.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-20">
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
          <h2 className="text-3xl font-bold mb-4">My Journey into Web3</h2>
          <p className="text-muted-foreground mb-4">
            My fascination with blockchain began with a simple question: "How can we build a more transparent and equitable digital future?" This curiosity led me down the rabbit hole of decentralized technologies, and I've been passionately building in the space ever since.
          </p>
          <p className="text-muted-foreground">
            With a strong foundation in traditional web development, I bring a unique perspective to Web3, focusing not just on the underlying technology but also on creating seamless and intuitive user experiences. I believe the true potential of Web3 will be unlocked when it's accessible and useful for everyone.
          </p>
        </div>
      </section>

      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">My Expertise</h2>
          <p className="text-muted-foreground mt-2">The tools and technologies I use to bring projects to life.</p>
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
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 [&>div]:bg-primary" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Full Stack</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map(tech => (
                  <Badge key={tech} variant="secondary" className="text-base px-4 py-2">{tech}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
