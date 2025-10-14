
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TechnologyPage() {
  return (
    <div className="py-12 lg:py-24 bg-secondary">
      <div className="container">
          <div className="text-center mb-12">
              <h1 className="font-headline text-4xl md:text-5xl font-bold border-b pb-4">
                  ArrowBeacon™ Technology
              </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="lg:col-span-3">
                  <CardHeader>
                      <CardTitle className="font-headline text-3xl font-bold">1️⃣ Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-lg dark:prose-invert max-w-none">
                      <p>
                          ArrowBeacon™ is a directional visual guidance augmentation
                          system designed to assist pilots in visually locating and
                          orienting toward an airport runway under marginal visibility or
                          off-axis approach conditions.
                      </p>
                      <p>
                          It integrates directional optics, ADS-B awareness, and
                          pilot-activated control to provide intelligent runway
                          referencing — extending the visual acquisition envelope far
                          beyond standard lighting systems.
                      </p>
                  </CardContent>
              </Card>

              <Card className="lg:col-span-3">
                  <CardHeader>
                      <CardTitle className="font-headline text-3xl font-bold">2️⃣ System Architecture</CardTitle>
                  </CardHeader>
                   <CardContent>
                      <p className="mb-4 text-muted-foreground">The ArrowBeacon system consists of three core subsystems:</p>
                      <div className="overflow-hidden rounded-lg border">
                          <Table>
                          <TableHeader>
                              <TableRow>
                              <TableHead>Subsystem</TableHead>
                              <TableHead>Description</TableHead>
                              </TableRow>
                          </TableHeader>
                          <TableBody>
                              <TableRow>
                              <TableCell className="font-medium">
                                  Dual-Beacon Unit (DBU)
                              </TableCell>
                              <TableCell>
                                  Two fixed-endpoint light units — Green at the landing
                                  threshold and Red at the far end. Their relative
                                  position provides intuitive orientation to the pilot.
                              </TableCell>
                              </TableRow>
                              <TableRow>
                              <TableCell className="font-medium">
                                  Directional Beacon Assembly (DBA)
                              </TableCell>
                              <TableCell>
                                  High-intensity steerable beam, capable of targeting and
                                  pulsing toward a requesting aircraft using ADS-B
                                  position data.
                              </TableCell>
                              </TableRow>
                              <TableRow>
                              <TableCell className="font-medium">
                                  Control & Integration Module (CIM)
                              </TableCell>
                              <TableCell>
                                  Central control logic integrated with airport systems,
                                  ADS-B transceiver, and pilot activation channel
                                  (PAL-compatible).
                              </TableCell>
                              </TableRow>
                          </TableBody>
                          </Table>
                      </div>
                  </CardContent>
              </Card>
              
              <Card className="lg:col-span-3">
                  <CardHeader>
                      <CardTitle className="font-headline text-3xl font-bold">3️⃣ Key Technologies</CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="prose dark:prose-invert">
                          <h3 className="font-headline text-2xl font-semibold">3.1 Directional LED Optics</h3>
                          <ul className="list-disc pl-5 mt-2 space-y-1">
                              <li>Custom optical array providing ±60° azimuthal spread with controlled vertical cone (~8°).</li>
                              <li>Dynamic servo alignment using low-latency stepper mechanisms.</li>
                              <li>Beam pulse rate configurable for daylight vs. night operations.</li>
                              <li>Fail-safe retraction and automatic dimming when inactive.</li>
                          </ul>
                      </div>
                      <div className="prose dark:prose-invert">
                           <h3 className="font-headline text-2xl font-semibold">3.2 Dual-Beacon Orientation</h3>
                          <ul className="list-disc pl-5 mt-2 space-y-1">
                              <li>Runway ends equipped with Green (threshold) and Red (departure end) LED units.</li>
                              <li>Mimics aircraft navigation lighting convention: green = approach side, red = away.</li>
                              <li>Allows pilots to immediately discern runway heading and alignment from up to 10 nautical miles (NM) out.</li>
                              <li>Provides passive alignment even if the main directional unit is inactive.</li>
                          </ul>
                      </div>
                       <div className="prose dark:prose-invert">
                          <h3 className="font-headline text-2xl font-semibold">3.3 ADS-B Integration</h3>
                          <ul className="list-disc pl-5 mt-2 space-y-1">
                              <li>Receives ADS-B Out data from aircraft to establish bearing and distance.</li>
                              <li>Processes position updates via airport’s ADS-B ground receiver or remote gateway.</li>
                              <li>Once verified and consented, system activates directional illumination along the pilot’s bearing.</li>
                          </ul>
                      </div>
                       <div className="prose dark:prose-invert">
                          <h3 className="font-headline text-2xl font-semibold">3.4 Pilot Activation & ATC Interface</h3>
                          <ul className="list-disc pl-5 mt-2 space-y-1">
                              <li>Compatible with Pilot-Activated Lighting (PAL) via VHF radio input (5- or 7-click sequence).</li>
                              <li>Secondary activation possible from Airport Management Console for assistance or recovery operations.</li>
                              <li>Built-in consent logic ensures activation only after positive identification and pilot acknowledgement.</li>
                          </ul>
                      </div>
                       <div className="prose dark:prose-invert md:col-span-2">
                           <h3 className="font-headline text-2xl font-semibold">3.5 Power & Redundancy</h3>
                          <ul className="list-disc pl-5 mt-2 space-y-1">
                              <li>Modular low-voltage power design (12–24V DC).</li>
                              <li>Solar + battery optional for remote strips.</li>
                              <li>Integrated temperature monitoring and self-diagnostics for continuous operation.</li>
                          </ul>
                      </div>
                  </CardContent>
              </Card>

              <Card className="lg:col-span-3">
                   <CardHeader>
                      <CardTitle className="font-headline text-3xl font-bold">4️⃣ Implementation Concept</CardTitle>
                  </CardHeader>
                   <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 prose dark:prose-invert max-w-none">
                      <div>
                          <h3 className="font-headline text-2xl font-semibold">4.1 Hardware Deployment</h3>
                          <ul className="list-disc pl-5 mt-2 space-y-1">
                              <li>Each runway end: one red, one green fixed beacon.</li>
                              <li>Midfield or threshold: one steerable directional beam unit (elevated mast or roof-mounted).</li>
                              <li>Networked via short-range RF or wired Ethernet to Control Module.</li>
                          </ul>
                      </div>
                      <div>
                          <h3 className="font-headline text-2xl font-semibold">4.2 Control Flow</h3>
                          <ul className="list-disc pl-5 mt-2 space-y-1">
                              <li>Aircraft broadcasts ADS-B Out.</li>
                              <li>Ground receiver identifies aircraft within predefined radius (10–15 NM).</li>
                              <li>Pilot initiates request (radio key sequence).</li>
                              <li>System authenticates aircraft and activates the directional beam.</li>
                              <li>Optional ATC override or shared visual assist mode.</li>
                              <li>System logs event to airport management dashboard for traceability.</li>
                          </ul>
                      </div>
                      <div>
                          <h3 className="font-headline text-2xl font-semibold">4.3 Environmental and Operational Tuning</h3>
                          <ul className="list-disc pl-5 mt-2 space-y-1">
                              <li>Beam pulse and color temperature dynamically adjust for weather and ambient light.</li>
                              <li>Local METAR feed integration (visibility, daylight, wind) to optimize illumination strategy.</li>
                          </ul>
                      </div>
                  </CardContent>
              </Card>

              <Card className="lg:col-span-3">
                  <CardHeader>
                      <CardTitle className="font-headline text-3xl font-bold">5️⃣ Why It’s Important</CardTitle>
                  </CardHeader>
                   <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6 prose dark:prose-invert max-w-none">
                      <div>
                          <h3 className="font-headline text-2xl font-semibold">5.1 Problem Addressed</h3>
                          <ul className="list-disc pl-5 mt-2 space-y-1">
                              <li>Traditional airport lighting assumes line-of-sight to the runway. In complex terrain, haze, or low sun glare, even modern lighting systems can be invisible until the final mile.</li>
                              <li>Pilots approaching from unfamiliar or oblique angles often lose orientation with respect to runway alignment.</li>
                          </ul>
                      </div>
                      <div>
                          <h3 className="font-headline text-2xl font-semibold">5.2 ArrowBeacon Advantage</h3>
                          <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Provides early, unambiguous runway heading reference.</li>
                          <li>Offers visual homing without reliance on instruments.</li>
                          <li>Functions even during partial power or communications loss.</li>
                          <li>Minimal interference with existing infrastructure.</li>
                          </ul>
                      </div>
                      <div>
                          <h3 className="font-headline text-2xl font-semibold">5.3 Safety Enhancement</h3>
                          <ul className="list-disc pl-5 mt-2 space-y-1">
                              <li>Reduces risk of disorientation and CFIT (Controlled Flight Into Terrain).</li>
                              <li>Enhances pilot situational awareness during off-axis approaches.</li>
                              <li>Acts as a non-instrument backup aid in VFR and marginal conditions.</li>
                              <li>Complements—not replaces—PAPI/VASI and ILS systems.</li>
                          </ul>
                      </div>
                  </CardContent>
              </Card>

              <Card className="lg:col-span-3">
                  <CardHeader>
                      <CardTitle className="font-headline text-3xl font-bold">6️⃣ Integration with Airport Systems</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <div className="overflow-hidden rounded-lg border">
                          <Table>
                          <TableHeader>
                              <TableRow>
                              <TableHead>Module</TableHead>
                              <TableHead>Function</TableHead>
                              </TableRow>
                          </TableHeader>
                          <TableBody>
                              <TableRow>
                              <TableCell className="font-medium">
                                  Airport Management App
                              </TableCell>
                              <TableCell>
                                  Dashboard to view all aircraft in range (via ADS-B). Enables activation of directional beacons for assistance or emergencies.
                              </TableCell>
                              </TableRow>
                              <TableRow>
                              <TableCell className="font-medium">
                                  Beacon Control Network
                              </TableCell>
                              <TableCell>
                                  Connects beacons to central management unit over secure local link.
                              </TableCell>
                              </TableRow>
                              <TableRow>
                              <TableCell className="font-medium">
                                  Logging & Analytics
                              </TableCell>
                              <TableCell>
                              Records activation times, range, visibility, and pilot acknowledgments for safety analytics.
                              </TableCell>
                              </TableRow>
                              <TableRow>
                                  <TableCell className="font-medium">API Layer (Future)</TableCell>
                                  <TableCell>Will enable FAA integration, data export, and third-party airfield control systems interoperability.</TableCell>
                              </TableRow>
                          </TableBody>
                          </Table>
                      </div>
                  </CardContent>
              </Card>

              <Card className="lg:col-span-1">
                  <CardHeader>
                      <CardTitle className="font-headline text-3xl font-bold">7️⃣ Research & Validation</CardTitle>
                  </CardHeader>
                  <CardContent className="prose dark:prose-invert">
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Concept tested through simulation using ADS-B datasets and ray-traced light propagation models.</li>
                          <li>Hardware prototype in development for low-altitude field trials.</li>
                          <li>Intended future collaboration with FAA research divisions and university flight programs for validation.</li>
                      </ul>
                  </CardContent>
              </Card>

              <Card className="lg:col-span-1">
                  <CardHeader>
                      <CardTitle className="font-headline text-3xl font-bold">8️⃣ Regulatory Pathway</CardTitle>
                  </CardHeader>
                  <CardContent className="prose dark:prose-invert">
                      <p>ArrowBeacon™ is designed to augment existing FAA-approved lighting systems, not replace them. Certification pathway likely through:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>FAA AC 150/5345-series compliance testing</li>
                          <li>Non-precision visual aid (NVG-compatible) approval</li>
                          <li>Part 77 obstruction clearance analysis</li>
                      </ul>
                  </CardContent>
              </Card>

              <Card className="lg:col-span-1">
                  <CardHeader>
                      <CardTitle className="font-headline text-3xl font-bold">9️⃣ Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="prose dark:prose-invert">
                       <p>ArrowBeacon™ represents an evolution in visual navigation — merging directional photonics, ADS-B awareness, and pilot-human interface design into a compact, airport-ready system.</p>
                       <p>It offers airports and pilots a low-cost, high-impact enhancement to runway visibility and situational awareness, with the potential to significantly reduce visual disorientation incidents.</p>
                  </CardContent>
              </Card>
          </div>
      </div>
    </div>
  );
}
