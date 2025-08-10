import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Zap, Code, Gem } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative py-20 md:py-32 bg-secondary">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Crafting the Future of Web3
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            I'm a full-stack Web3 developer specializing in secure, scalable, and user-friendly decentralized applications. Let's build the next generation of the internet, together.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/portfolio">View My Work <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">What I Do</h2>
            <p className="text-muted-foreground mt-2">From concept to deployment, I offer end-to-end Web3 solutions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:border-primary transition-colors duration-300 transform hover:-translate-y-2">
              <CardHeader className="flex flex-row items-center gap-4">
                <Zap className="h-10 w-10 text-primary" />
                <CardTitle>dApp Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Building robust and interactive decentralized applications on various blockchain platforms.</p>
              </CardContent>
            </Card>
            <Card className="hover:border-primary transition-colors duration-300 transform hover:-translate-y-2">
              <CardHeader className="flex flex-row items-center gap-4">
                <Code className="h-10 w-10 text-primary" />
                <CardTitle>Smart Contracts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Secure and optimized smart contract creation, auditing, and deployment for your project needs.</p>
              </CardContent>
            </Card>
            <Card className="hover:border-primary transition-colors duration-300 transform hover:-translate-y-2">
              <CardHeader className="flex flex-row items-center gap-4">
                <Gem className="h-10 w-10 text-primary" />
                <CardTitle>NFT Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">From generative art collections to utility NFTs, I provide complete solutions for your digital assets.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Project</h2>
            <p className="text-muted-foreground mt-2">A glimpse into what's possible.</p>
          </div>
          <Card className="overflow-hidden md:grid md:grid-cols-2 md:items-center">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">DeFi Yield Aggregator</h3>
              <p className="text-muted-foreground mb-4">
                A platform that automatically moves user funds between different DeFi lending protocols to find the best interest rates. Built with security and efficiency as top priorities.
              </p>
              <Button asChild variant="outline">
                <Link href="/portfolio">Explore More Projects</Link>
              </Button>
            </div>
            <div className="aspect-video">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Featured Project"
                width={600}
                height={400}
                className="object-cover w-full h-full"
                data-ai-hint="decentralized finance dashboard"
              />
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
