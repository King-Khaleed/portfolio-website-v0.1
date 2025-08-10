"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Bella's Beauty Lounge",
    category: "Salon",
    description: "A stylish website for a beauty salon, built with the Starter Package, which led to a 40% increase in online bookings.",
    image: "https://placehold.co/600x400.png",
    hint: "beauty salon interior",
    tags: ["Bookings", "Gallery", "Mobile-Friendly"],
    link: "#",
  },
  {
    title: "Okoro Advisory",
    category: "Consultancy",
    description: "A professional corporate site for a business consultancy using the Pro Package, enhancing their credibility and lead generation.",
    image: "https://placehold.co/600x400.png",
    hint: "modern office interior",
    tags: ["Professional", "Services", "Contact Form"],
    link: "#",
  },
  {
    title: "Abuja Eats",
    category: "Restaurant",
    description: "A vibrant website for a local restaurant, featuring their menu and location, resulting in higher foot traffic.",
    image: "https://placehold.co/600x400.png",
    hint: "restaurant food dish",
    tags: ["Menu", "Location", "Contact"],
    link: "#",
  },
  {
    title: "Kemi's Fashion House",
    category: "E-commerce",
    description: "An elegant e-commerce store for a fashion designer, built with the Pro Package to showcase and sell designs online.",
    image: "https://placehold.co/600x400.png",
    hint: "fashion boutique clothing",
    tags: ["E-commerce", "Gallery", "Online-Payments"],
    link: "#",
  },
  {
    title: "Ikeja Auto Repairs",
    category: "Services",
    description: "A straightforward service website for an auto repair shop, helping them get found on Google and book more appointments.",
    image: "https://placehold.co/600x400.png",
    hint: "car mechanic workshop",
    tags: ["Services", "Contact", "Local SEO"],
    link: "#",
  },
  {
    title: "Naija Real Estate",
    category: "Real Estate",
    description: "A clean, professional website for a real estate agent to list properties and capture leads from serious buyers.",
    image: "https://placehold.co/600x400.png",
    hint: "modern house exterior",
    tags: ["Property Listings", "Lead Capture", "Gallery"],
    link: "#",
  },
];

const categories = ["All", "Salon", "Consultancy", "Restaurant", "E-commerce", "Services", "Real Estate"];

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
          A selection of professional websites built for Nigerian businesses.
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
              <Button asChild variant="link" className="px-0 mt-4">
                <Link href={project.link}>View Live Site</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
       <section className="text-center mt-20">
        <h2 className="text-3xl font-bold mb-4">Your Business Could Be Next</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          A professional online presence is closer than you think. Let's build it.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Get Your Website Quote</Link>
        </Button>
      </section>
    </div>
  );
}
