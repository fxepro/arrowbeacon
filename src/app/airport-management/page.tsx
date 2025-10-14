
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AirportManagementPage() {
  return (
    <div className="py-12 lg:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Airport Management</h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Tools and solutions for airport operators to enhance safety and efficiency.
          </p>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <Card>
              <CardHeader>
                  <CardTitle>Runway Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                  <p className="text-muted-foreground">Real-time status of all ArrowBeacon units on your airfields.</p>
              </CardContent>
           </Card>
           <Card>
              <CardHeader>
                  <CardTitle>Traffic Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                  <p className="text-muted-foreground">Gain insights into runway usage patterns and peak times.</p>
              </CardContent>
           </Card>
           <Card>
              <CardHeader>
                  <CardTitle>Maintenance Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                  <p className="text-muted-foreground">Proactive notifications for system health and maintenance needs.</p>
              </CardContent>
           </Card>
         </div>
      </div>
    </div>
  );
}
