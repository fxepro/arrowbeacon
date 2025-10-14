
import { z } from "zod";

const demoRequestSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  organization: z.string().optional(),
  requestText: z.string(),
});

export async function handleDemoRequest(
  data: z.infer<typeof demoRequestSchema>
): Promise<{ success: true; message: string }> {
  const validatedData = demoRequestSchema.parse(data);

  // Here you would typically save the request to your database
  console.log("New Demo Request Received:", validatedData);

  // Simulate a delay for network request
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return { 
    success: true, 
    message: "Demo request submitted successfully. We'll get back to you soon!" 
  };
}

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function handleContactSubmission(
  data: z.infer<typeof contactFormSchema>
): Promise<{ success: true }> {
    const validatedData = contactFormSchema.parse(data);

    // In a real application, you would use a service like Resend, SendGrid, or Nodemailer
    // to send an email notification.
    console.log("---- New Contact Form Submission ----");
    console.log("Name:", validatedData.name);
    console.log("Email:", validatedData.email);
    console.log("Message:", validatedData.message);
    console.log("------------------------------------");

    // Simulate a delay for network request
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return { success: true };
}
