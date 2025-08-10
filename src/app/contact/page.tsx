"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare, Clock, Smartphone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  businessName: z.string().min(2, "Business name is required."),
  email: z.string().email("A valid email address is required."),
  phone: z.string().optional(),
  businessType: z.string().min(2, "Please describe your industry."),
  package: z.enum(["Foundation", "Momentum", "Dominion", "Custom"]),
  contactMethod: z.enum(["Email", "WhatsApp", "Phone Call"]),
  budget: z.string().optional(),
  message: z.string().min(10, "Please provide a brief description of your needs.").max(500),
});

export default function ContactPage() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      businessName: "",
      email: "",
      phone: "",
      businessType: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Inquiry Sent",
      description: "Thank you for your message. I will respond within 24-48 hours.",
    });
    form.reset();
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Contact</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          For project inquiries or to schedule a free consultation, please use the channels below.
        </p>
      </section>

      <section className="mb-20">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Trusted Results</h2>
            <p className="text-muted-foreground mt-2">Delivering value for businesses across Nigeria.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground italic">"Our online bookings doubled within a month — seamless work and professional from start to finish."</p>
              <p className="font-bold mt-4">- Bella's Lounge</p>
            </CardContent>
          </Card>
           <Card>
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground italic">"The new website gives us the professional edge we needed to attract bigger clients. A fantastic investment."</p>
              <p className="font-bold mt-4">- Okoro Advisory</p>
            </CardContent>
          </Card>
           <Card>
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground italic">"Finally, a developer who understands the local market and delivers on time. Highly recommended."</p>
              <p className="font-bold mt-4">- Lagos Bites</p>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
          {[...Array(5)].map((_, i) => (
             <Image key={i} src={`https://placehold.co/120x60.png?text=BRAND${i+1}`} alt={`Placeholder Brand Logo ${i+1}`} width={120} height={60} className="grayscale opacity-50 hover:opacity-100 transition-opacity" data-ai-hint="brand logo" />
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-6 w-6" /> Project Inquiry Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="Your Name" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="businessName" render={({ field }) => (
                      <FormItem><FormLabel>Business Name</FormLabel><FormControl><Input placeholder="Your Business Name" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                  </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem><FormLabel>Email Address</FormLabel><FormControl><Input placeholder="name@business.com" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="phone" render={({ field }) => (
                        <FormItem><FormLabel>Phone Number (Optional)</FormLabel><FormControl><Input placeholder="Your Phone Number" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                  </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <FormField control={form.control} name="businessType" render={({ field }) => (
                        <FormItem><FormLabel>Business Type / Industry</FormLabel><FormControl><Input placeholder="e.g., Fashion, Real Estate" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="package" render={({ field }) => (
                      <FormItem><FormLabel>Package of Interest</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl><SelectTrigger><SelectValue placeholder="Select a package" /></SelectTrigger></FormControl>
                          <SelectContent>
                            <SelectItem value="Foundation">Foundation</SelectItem>
                            <SelectItem value="Momentum">Momentum</SelectItem>
                            <SelectItem value="Dominion">Dominion</SelectItem>
                            <SelectItem value="Custom">Custom Solution</SelectItem>
                          </SelectContent>
                        </Select><FormMessage />
                      </FormItem>
                    )} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <FormField control={form.control} name="contactMethod" render={({ field }) => (
                      <FormItem><FormLabel>Preferred Contact Method</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl><SelectTrigger><SelectValue placeholder="How should I reach you?" /></SelectTrigger></FormControl>
                          <SelectContent>
                            <SelectItem value="Email">Email</SelectItem>
                            <SelectItem value="WhatsApp">WhatsApp</SelectItem>
                            <SelectItem value="Phone Call">Phone Call</SelectItem>
                          </SelectContent>
                        </Select><FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="budget" render={({ field }) => (
                      <FormItem><FormLabel>Budget Range (Optional)</FormLabel><FormControl><Input placeholder="e.g., ₦400k - ₦750k" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                  </div>
                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem><FormLabel>Brief Project Description</FormLabel><FormControl><Textarea placeholder="Describe your business and what you want to achieve with a new website." className="min-h-[150px]" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <Button type="submit" size="lg" className="w-full md:w-auto">Send Your Request</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader><CardTitle>Direct Contact</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Smartphone className="h-5 w-5 text-muted-foreground mt-1" />
                <div>
                  <p className="font-semibold">Fastest response: WhatsApp</p>
                   <Link href="https://wa.me/2349115966703" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">+234 911 596 6703</Link>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-muted-foreground mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:thewebwizardinfo@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">thewebwizardinfo@gmail.com</a>
                </div>
              </div>
               <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground mt-1" />
                <div>
                  <p className="font-semibold">Location</p>
                   <p className="text-muted-foreground">Operating from Nigeria — available remotely.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-secondary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-6 w-6" /> What Happens Next
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• I review your request to ensure we are a good fit.</p>
                <p>• You receive a reply within 24-48 business hours.</p>
                <p>• If it’s a match, we book a short discovery call.</p>
                <p className="text-xs pt-2">Business Hours: Mon – Fri, 9am – 5pm WAT.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
