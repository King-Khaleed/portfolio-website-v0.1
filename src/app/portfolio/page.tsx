"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "DeFi Yield Aggregator",
    category: "DeFi",
    description: "A platform that optimizes yield farming strategies across multiple protocols.",
    image: "https://placehold.co/600x400.png",
    hint: "decentralized finance dashboard",
    tags: ["Solidity", "React", "The Graph"],
    link: "#",
  },
  {
    title: "Generative Art NFT",
    category: "NFT",
    description: "An on-chain generative art collection with unique minting mechanics.",
    image: "https://placehold.co/600x400.png",
    hint: "abstract digital art",
    tags: ["ERC721", "Next.js", "IPFS"],
    link: "#",
  },
  {
    title: "DAO Voting Platform",
    category: "DAO",
    description: "A secure and transparent voting system for decentralized autonomous organizations.",
    image: "https://placehold.co/600x400.png",
    hint: "governance interface charts",
    tags: ["Solidity", "Ethers.js", "Snapshot"],
    link: "#",
  },
  {
    title: "Decentralized Identity",
    category: "Tooling",
    description: "A protocol for managing self-sovereign identities on the blockchain.",
    image: "https://placehold.co/600x400.png",
    hint: "identity verification user",
    tags: ["DID", "Verifiable Credentials", "Node.js"],
    link: "#",
  },
  {
    title: "NFT Marketplace",
    category: "NFT",
    description: "A feature-rich marketplace for trading digital assets and collectibles.",
    image: "https://placehold.co/600x400.png",
    hint: "nft gallery cards",
    tags: ["React", "Hardhat", "OpenSea SDK"],
    link: "#",
  },
  {
    title: "On-Chain Gaming",
    category: "Gaming",
    description: "A simple on-chain game demonstrating provably fair mechanics.",
    image: "https://placehold.co/600x400.png",
    hint: "pixel art game",
    tags: ["Solidity", "Foundry", "WebSockets"],
    link: "#",
  },
];

const categories = ["All", "DeFi", "NFT", "DAO", "Tooling", "Gaming"];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">My Work</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          A selection of projects that showcase my skills and passion for Web3.
        </p>
      </section>

      <section className="flex justify-center flex-wrap gap-2 mb-12">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={filter === cat ? "default" : "outline"}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </Button>
        ))}
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Card key={project.title} className="overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
            <Link href={project.link} aria-label={`View project: ${project.title}`}>
              <div className="aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={project.hint}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 h-20">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </section>
    </div>
  );
}
