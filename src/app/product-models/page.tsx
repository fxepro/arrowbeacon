import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

const products = [
  {
    name: "ArrowBeacon™ Lite",
    audience: "(For rural, private, or un-towered airstrips)",
    purpose: "Entry-level model focused on VFR and marginal-VFR operations. Provides fundamental runway orientation and visual reference aid.",
    features: [
      "Dual fixed beacons (Red + Green)",
      "Fixed wide-angle optics (no steerable beam)",
      "Manual or Pilot-Activated Lighting (PAL) control",
      "Solar-battery power option",
      "Range: 5–7 NM visual detectability in clear weather",
      "Rugged enclosure for remote field installation",
    ],
    bestFor: [
        "Private strips",
        "Mountain or rural airports without ATC",
        "Backup orientation lighting during night ops"
    ],
  },
  {
    name: "ArrowBeacon™ Standard",
    audience: "(For regional and municipal airports)",
    purpose: "Balanced model integrating ADS-B-based aircraft awareness and automated beam alignment, suitable for small towered airports or busy uncontrolled fields.",
    features: [
      "Dual-beacon setup + central directional beacon",
      "3-axis servo-driven beam steering",
      "ADS-B integration for aircraft detection and targeting",
      "Pilot activation (PAL + radio acknowledgment)",
      "Airport management app dashboard connection",
      "Range: 10 NM operational envelope (±60° azimuth, ±12° elevation)",
      "Optional Laser-Strobe emergency assist mode",
    ],
    upgrades: [
        "Adds weather-adaptive brightness control (METAR feed)",
        "Supports redundant power and data link"
    ],
    bestFor: [
        "Regional GA airports",
        "Flight training schools",
        "Low-instrument environments"
    ],
  },
  {
    name: "ArrowBeacon™ Advanced (Pro)",
    audience: "(For towered and instrument-equipped airports)",
    purpose: "Professional-grade version for airports seeking high-precision beam control, ATC-assisted activation, and ADS-B/A-B data fusion.",
    features: [
        "Separated dual beacons (Green threshold / Red departure end)",
        "Central directional beam with dynamic pulse pattern",
        "Fully networked to ATC console and airport lighting system",
        "High-intensity LED optics, NVG-compatible",
        "Optional CAT I visual-assist integration",
        "Range: 12–15 NM visual acquisition",
        "Built-in data logging and FAA-reportable analytics",
    ],
    safetyFunctions: [
        "Controlled consent activation to prevent glare conflicts",
        "Adaptive frequency modulation in high-density airspace",
        "Laser-strobe emergency recovery channel"
    ],
    bestFor: [
        "Regional hubs",
        "Commercial training centers",
        "ATC-supervised recovery operations"
    ],
  },
];

export default function ProductModelsPage() {
  return (
    <div className="py-12 lg:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            ArrowBeacon™ Product Models
          </h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-muted-foreground">
            ArrowBeacon™ is offered in a modular family of products designed to fit a range of airport environments — from small general aviation (GA) airfields to regional and commercial airports. All models share a common control architecture, ADS-B integration, and dual-beacon orientation logic, with differing levels of beam control, networking, and automation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {products.map((product) => (
            <Card key={product.name} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{product.name}</CardTitle>
                <CardDescription>{product.audience}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="mb-4">{product.purpose}</p>
                
                <h4 className="font-semibold mb-2 text-sm">Core Features:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="h-4 w-4 mr-2 mt-0.5 text-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {product.upgrades && (
                  <>
                      <h4 className="font-semibold mb-2 text-sm">Upgrades:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                      {product.upgrades.map((upgrade) => (
                          <li key={upgrade} className="flex">
                          <Check className="h-4 w-4 mr-2 mt-0.5 text-primary shrink-0" />
                          <span>{upgrade}</span>
                          </li>
                      ))}
                      </ul>
                  </>
                )}

                 {product.safetyFunctions && (
                  <>
                      <h4 className="font-semibold mb-2 text-sm">Advanced Safety Functions:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                      {product.safetyFunctions.map((sf) => (
                          <li key={sf} className="flex">
                          <Check className="h-4 w-4 mr-2 mt-0.5 text-primary shrink-0" />
                          <span>{sf}</span>
                          </li>
                      ))}
                      </ul>
                  </>
                )}
                
                <div className="mt-auto pt-4">
                  <h4 className="font-semibold mb-2 text-sm">Best For:</h4>
                  <div className="flex flex-wrap gap-2">
                      {product.bestFor.map((useCase) => (
                           <div key={useCase} className="text-xs bg-primary/10 text-primary-foreground rounded-full px-3 py-1 text-primary">{useCase}</div>
                      ))}
                  </div>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
