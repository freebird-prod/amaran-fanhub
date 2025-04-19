import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { CONTACT_SUBJECTS, subscriberFormSchema, contactFormSchema } from "@shared/schema";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const { toast } = useToast();

  // Newsletter form
  const newsletterForm = useForm<z.infer<typeof subscriberFormSchema>>({
    resolver: zodResolver(subscriberFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const newsletterMutation = useMutation({
    mutationFn: async (data: z.infer<typeof subscriberFormSchema>) => {
      const response = await apiRequest("POST", "/api/newsletter/subscribe", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      newsletterForm.reset();
    },
    onError: (error) => {
      toast({
        title: "Subscription failed",
        description: error.message || "There was a problem subscribing you to the newsletter.",
        variant: "destructive",
      });
    },
  });

  const onNewsletterSubmit = (data: z.infer<typeof subscriberFormSchema>) => {
    newsletterMutation.mutate(data);
  };

  // Contact form
  const contactForm = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: z.infer<typeof contactFormSchema>) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      contactForm.reset();
    },
    onError: (error) => {
      toast({
        title: "Message failed",
        description: error.message || "There was a problem sending your message.",
        variant: "destructive",
      });
    },
  });

  const onContactSubmit = (data: z.infer<typeof contactFormSchema>) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-accent">Stay Updated</h2>
            <p className="text-lg mb-8">Subscribe to our newsletter for exclusive content, behind-the-scenes footage, and updates about Ämaran.</p>
            
            <Form {...newsletterForm}>
              <form onSubmit={newsletterForm.handleSubmit(onNewsletterSubmit)} className="space-y-4">
                <FormField
                  control={newsletterForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="your@email.com" 
                          className="w-full px-4 py-3 bg-muted border border-secondary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex items-start">
                  <Checkbox id="consent" className="mt-1 mr-3" />
                  <label htmlFor="consent" className="text-foreground/80 text-sm">
                    I agree to receive emails about Ämaran and related content. You can unsubscribe at any time.
                  </label>
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-accent hover:bg-accent/80 text-background px-6 py-3"
                  disabled={newsletterMutation.isPending}
                >
                  {newsletterMutation.isPending ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
            </Form>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-accent">Get in Touch</h2>
            <p className="text-lg mb-8">Have questions or feedback? Fill out the form below and our team will get back to you.</p>
            
            <Form {...contactForm}>
              <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={contactForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input 
                            className="w-full px-4 py-3 bg-muted border border-secondary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={contactForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            className="w-full px-4 py-3 bg-muted border border-secondary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={contactForm.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full px-4 py-3 bg-muted border border-secondary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="screenings">Screening Information</SelectItem>
                          <SelectItem value="press">Press/Media</SelectItem>
                          <SelectItem value="merchandise">Merchandise</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={contactForm.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={5} 
                          className="w-full px-4 py-3 bg-muted border border-secondary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  variant="destructive"
                  className="bg-secondary hover:bg-secondary/80 text-foreground px-6 py-3"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
