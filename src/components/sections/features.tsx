
import { features } from "@/lib/data";

export function Features() {
  return (
    <section id="features" className="py-16 lg:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            Advanced Technology, Simplified.
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            We focus on the complex so pilots can focus on the flight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-background rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
