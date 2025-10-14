
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Ship, Ambulance } from "lucide-react";

export default function ApplicationsPage() {
  return (
    <div className="py-12 lg:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Applications</h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-muted-foreground">
            ArrowBeacon's technology is versatile, providing precision guidance for a wide range of applications beyond commercial aviation.
          </p>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <Card>
              <CardHeader className="items-center text-center">
                  <div className="p-4 bg-primary/10 rounded-full w-fit">
                      <Plane className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>General Aviation</CardTitle>
              </CardHeader>
              <CardContent>
                  <p className="text-muted-foreground text-center">Enhance safety for private pilots and smaller airfields without expensive ILS equipment.</p>
              </CardContent>
           </Card>
           <Card>
              <CardHeader className="items-center text-center">
                   <div className="p-4 bg-primary/10 rounded-full w-fit">
                      <Ship className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Maritime Navigation</CardTitle>
              </CardHeader>
              <CardContent>
                  <p className="text-muted-foreground text-center">Guide vessels into ports and through challenging waterways with pin-point accuracy, day or night.</p>
              </CardContent>
           </Card>
           <Card>
              <CardHeader className="items-center text-center">
                   <div className="p-4 bg-primary/10 rounded-full w-fit">
                      <Ambulance className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Emergency Services</CardTitle>
              </CardHeader>
              <CardContent>
                  <p className="text-muted-foreground text-center">Establish temporary, reliable landing zones for medevac helicopters and disaster response aircraft.</p>
              </CardContent>
           </Card>
         </div>
      </div>
    </div>
  );
}
