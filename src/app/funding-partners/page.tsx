
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Users, Building, Beaker } from "lucide-react";

const whoWeAreLookingFor = [
    {
        icon: Building,
        title: "Airports & Airfield Operators",
        description: "Collaborate on field testing, evaluation, and deployment of ArrowBeacon™ systems in real-world conditions. Early partners gain preferential access to the technology and influence on design adaptations for specific operational needs."
    },
    {
        icon: Users,
        title: "Aviation Authorities & Regulators",
        description: "Partner with FAA, EASA, or local aviation bodies to validate safety standards and align with operational compliance requirements. Opportunities include pilot studies, instrument correlation, and integration with existing runway lighting systems."
    },
    {
        icon: Beaker,
        title: "Investors & Research Institutions",
        description: "ArrowBeacon™ is seeking funding support and collaborative research for scaling hardware production, developing software enhancements, and performing safety studies. Academic and industrial collaborations can benefit from joint publications, testing datasets, and pilot program participation."
    }
]

const partnershipBenefits = [
    "Early access to prototype and beta systems",
    "Priority support for customized airport integration",
    "Participation in operational and safety validation programs",
    "Recognition in research publications and safety reports",
    "Opportunity to influence future feature development"
]

export default function FundingPartnersPage() {
  return (
    <div className="py-12 lg:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Funding & Partners
          </h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-muted-foreground">
            Join Us in Advancing Visual Navigation Safety
          </p>
          <p className="max-w-4xl mx-auto mt-4 text-muted-foreground">
            ArrowBeacon™ is an innovative visual guidance system for pilots and airports. We are seeking partners, collaborators, and funding organizations to help bring this technology from prototype to operational deployment.
          </p>
        </div>

        <Card className="mb-16">
            <CardHeader className="text-center">
                <CardTitle className="font-headline text-3xl">Who We’re Looking For</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-8">
                {whoWeAreLookingFor.map((partner) => (
                    <div key={partner.title} className="text-center">
                        <div className="flex justify-center mb-4">
                            <div className="p-4 bg-primary/10 rounded-full">
                                <partner.icon className="h-8 w-8 text-primary" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{partner.title}</h3>
                        <p className="text-muted-foreground">{partner.description}</p>
                    </div>
                ))}
            </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
                <h2 className="font-headline text-3xl font-bold mb-4">Partnership Benefits</h2>
                 <ul className="space-y-3">
                    {partnershipBenefits.map((benefit) => (
                        <li key={benefit} className="flex items-start">
                            <CheckCircle className="h-5 w-5 mr-3 mt-1 text-primary shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                        </li>
                    ))}
                </ul>
            </div>
             <div>
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-3xl">How to Engage</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-muted-foreground">Submit a Partnership Inquiry through our secure contact form.</p>
                        <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                          <li>Outline your interest: funding, deployment, research, or pilot program participation.</li>
                          <li>Our team will review and respond with a tailored collaboration plan, including next steps for field testing, technology demonstration, or funding application support.</li>
                        </ol>
                        <Button asChild className="w-full">
                           <Link href="/contact">Submit a Partnership Inquiry</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>

      </div>
    </div>
  );
}
