
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Smartphone, MessageSquare, Book } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const capabilities = [
    {
        title: "Pilot Activation",
        icon: Smartphone,
        description: "Pilots can securely activate ArrowBeacon™ lighting within approved range and frequency limits using a simple, authenticated tap. The app integrates with Pilot-Controlled Lighting (PCL) and ADS-B data to confirm aircraft identity and location."
    },
    {
        title: "Airport Coordination",
        icon: MessageSquare,
        description: "Airport managers or ATC personnel can monitor aircraft in the vicinity (via ADS-B In/Out) and selectively aim directional beacons or authorize higher intensity signals after pilot acknowledgment."
    },
    {
        title: "Two-Way Safety Messaging",
        icon: MessageSquare,
        description: "The system supports short, pre-defined communications — such as beacon activation confirmation, visibility advisories, or “runway lights active” status — reducing radio congestion during high workload moments."
    },
    {
        title: "Operational Log",
        icon: Book,
        description: "Every beacon activation, visibility warning, or emergency use is securely logged for review and compliance reporting."
    }
]

const designPhilosophy = [
    {
        title: "Pilot-Friendly Interface",
        description: "Optimized for quick access and minimal interaction during flight."
    },
    {
        title: "Offline-Ready",
        description: "Local storage and queued commands ensure functionality even in low-signal areas."
    },
    {
        title: "Secure and Compliant",
        description: "Built with aviation-grade encryption and FAA data handling standards."
    },
    {
        title: "Cloud Sync",
        description: "Synchronizes activity data with airport servers or ArrowBeacon™ enterprise systems."
    }
]

const futureExtensions = [
    "Integration with Electronic Flight Bags (EFBs) and flight planning software",
    "Push notifications for real-time weather or visibility alerts",
    "Geo-fencing to prevent unauthorized activation outside airspace limits",
    "Optional ATC approval layer for towered airports"
]

export default function MobileAppPage() {
  const appImage1 = PlaceHolderImages.find((img) => img.id === "mobile-app-1");
  const appImage2 = PlaceHolderImages.find((img) => img.id === "mobile-app-2");

  return (
    <div className="py-12 lg:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            ArrowBeacon™ Mobile App
          </h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-muted-foreground">
            Smart Control. Clear Communication. Enhanced Safety.
          </p>
           <p className="max-w-4xl mx-auto mt-4 text-muted-foreground">
            The ArrowBeacon™ Mobile App bridges pilots, airport operators, and airfield systems — giving real-time control and situational awareness during visual operations in marginal conditions.
          </p>
        </div>

        <div className="flex justify-center gap-8 mb-16">
          {appImage1 && (
              <div className="relative w-48 h-96 rounded-2xl overflow-hidden shadow-2xl transform -rotate-3">
                  <Image
                  src={appImage1.imageUrl}
                  alt={appImage1.description}
                  fill
                  className="object-cover"
                  data-ai-hint={appImage1.imageHint}
                  />
              </div>
          )}
          {appImage2 && (
              <div className="relative w-48 h-96 rounded-2xl overflow-hidden shadow-2xl transform rotate-3">
                  <Image
                  src={appImage2.imageUrl}
                  alt={appImage2.description}
                  fill
                  className="object-cover"
                  data-ai-hint={appImage2.imageHint}
                  />
              </div>
          )}
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Core Capabilities</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="flex gap-4">
                  <cap.icon className="h-8 w-8 text-primary mt-1 shrink-0" />
                  <div>
                      <h3 className="text-xl font-semibold mb-1">{cap.title}</h3>
                      <p className="text-muted-foreground">{cap.description}</p>
                  </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="font-headline text-3xl">Design Philosophy</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {designPhilosophy.map((item) => (
                  <div key={item.title}>
                      <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                  </div>
              ))}
            </CardContent>
          </Card>
          <Card>
              <CardHeader>
                  <CardTitle className="font-headline text-3xl">Future Extensions</CardTitle>
              </CardHeader>
              <CardContent>
                  <ul className="space-y-3">
                      {futureExtensions.map((item) => (
                          <li key={item} className="flex items-start">
                              <CheckCircle className="h-5 w-5 mr-3 mt-1 text-primary shrink-0" />
                              <span className="text-muted-foreground">{item}</span>
                          </li>
                      ))}
                  </ul>
              </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
