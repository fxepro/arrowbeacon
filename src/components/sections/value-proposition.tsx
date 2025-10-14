import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const valueProps = [
    {
        icon: "✈️",
        header: "For Pilots",
        subtext: "Gain instant runway awareness up to 10 NM out — even in haze, dusk, or terrain-constrained environments."
    },
    {
        icon: "🏗️",
        header: "For Airports",
        subtext: "Modernize field lighting with intelligent, ADS-B aware beacon control and low-power operation."
    },
    {
        icon: "🛡️",
        header: "For Safety Authorities",
        subtext: "Reduce disorientation, missed approaches, and fuel-heavy diversions under marginal VFR conditions."
    }
]

export function ValueProposition() {
  return (
    <section id="value-proposition" className="py-16 lg:py-24 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((prop) => (
                 <Card key={prop.header} className="text-center border-0 shadow-none bg-transparent">
                    <CardHeader className="items-center">
                        <div className="text-5xl mb-4">{prop.icon}</div>
                        <CardTitle className="font-headline text-2xl">{prop.header}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{prop.subtext}</p>
                    </CardContent>
                 </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
