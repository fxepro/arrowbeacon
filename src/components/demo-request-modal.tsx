
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
// Removed server action import for static export

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  organization: z.string().optional(),
  requestText: z
    .string()
    .min(20, "Please provide at least 20 characters about your needs."),
});

type FormValues = z.infer<typeof formSchema>;

export function DemoRequestModal() {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState<{ success: true; message: string } | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      requestText: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    setResponse(null);
    try {
      // Simulate form submission for static export
      await new Promise(resolve => setTimeout(resolve, 1000));
      const result: { success: true; message: string } = { 
        success: true, 
        message: "Demo request submitted successfully. We'll get back to you soon!" 
      };
      setResponse(result);
      toast({
        title: "Success",
        description: result.message,
      });
    } catch (error) {
      console.error("Error submitting demo request:", error);
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: "There was a problem submitting your request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
        form.reset();
        setResponse(null);
        setIsSubmitting(false);
    }, 300);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Send className="mr-2" />
          Request a Demo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[480px]">
        {!response ? (
          <>
            <DialogHeader>
              <DialogTitle>Request a Product Demo</DialogTitle>
              <DialogDescription>
                Tell us about your needs, and our team will get back to you
                shortly.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                            <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input placeholder="you@company.com" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <FormField
                  control={form.control}
                  name="organization"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Organization (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Federal Aviation Administration" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="requestText"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Request</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your use case, the airport you represent, or any specific questions you have..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <Loader2 className="mr-2 animate-spin" />
                  ) : (
                    <Send className="mr-2" />
                  )}
                  Submit Request
                </Button>
              </form>
            </Form>
          </>
        ) : (
            <div className="flex flex-col items-center text-center space-y-4 py-8">
                <DialogTitle className="text-2xl">Thank You!</DialogTitle>
                <p className="text-muted-foreground">{response.message}</p>
                <p className="text-sm text-muted-foreground pt-4">Our team will review your request and contact you at the provided email address. You can now close this window.</p>
                <Button onClick={handleClose} className="w-full">Close</Button>
            </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
