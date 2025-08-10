import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Smartphone, Rocket, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative py-20 md:py-32 bg-secondary">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            I Help Nigerian Businesses Get More Customers Online
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Professional websites that work 24/7 to grow your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">Get Your Website Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services">See My Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">A Website Is Your 24/7 Salesperson</h2>
            <p className="text-muted-foreground mt-2">I build websites that attract customers and make you look professional.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:border-primary transition-colors duration-300 transform hover:-translate-y-2">
              <CardHeader className="flex flex-row items-center gap-4">
                <Smartphone className="h-10 w-10 text-primary" />
                <CardTitle>Modern, Mobile-Friendly Designs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Your website will look great and work perfectly on phones, tablets, and computers.</p>
              </CardContent>
            </Card>
            <Card className="hover:border-primary transition-colors duration-300 transform hover:-translate-y-2">
              <CardHeader className="flex flex-row items-center gap-4">
                <Rocket className="h-10 w-10 text-primary" />
                <CardTitle>Fast, Reliable Hosting Included</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Your site will load quickly and always be online for your customers, all included in the package.</p>
              </CardContent>
            </Card>
            <Card className="hover:border-primary transition-colors duration-300 transform hover:-translate-y-2">
              <CardHeader className="flex flex-row items-center gap-4">
                <Wrench className="h-10 w-10 text-primary" />
                <CardTitle>Ongoing Support & Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">I'm here to help with updates and support long after your website is launched.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">See My Work</h2>
            <p className="text-muted-foreground mt-2">Simple, effective websites for businesses like yours.</p>
          </div>
          <Card className="overflow-hidden md:grid md:grid-cols-2 md:items-center">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">Lagos Bites Restaurant</h3>
              <p className="text-muted-foreground mb-4">
                A beautiful, mobile-friendly website to showcase their menu and attract more diners. The online gallery increased bookings by 25%.
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
                data-ai-hint="restaurant interior"
              />
            </div>
          </Card>
        </div>
      </section>

       <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Trusted by Nigerian Business Owners</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground italic mb-4">"Our new website brought in so many new customers. He understood exactly what our restaurant needed. A professional and reliable service."</p>
                <p className="font-bold">- Mrs. Adebayo, Lagos Bites</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground italic mb-4">"I can finally take bookings online! My clients love how easy it is to use the new website. The process was fast and very professional."</p>
                <p className="font-bold">- Chioma, Bella's Beauty Lounge</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground italic mb-4">"The website gives my consultancy a professional look that attracts the right clients. He delivered exactly what he promised, on time."</p>
                <p className="font-bold">- Mr. Okoro, Okoro Advisory</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
