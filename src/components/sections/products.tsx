
import Image from "next/image";
import { products } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { CheckCircle } from "lucide-react";
import { Badge } from "../ui/badge";

export function Products() {
  return (
    <section id="products" className="py-16 lg:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-2">Our Products</Badge>
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            The ArrowBeacon™ Lineup
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Engineered for reliability, from international hubs to remote airfields.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl">
              {product.image && (
                <div className="relative h-60 w-full">
                    <Image
                    src={product.image.imageUrl}
                    alt={product.image.description}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    data-ai-hint={product.image.imageHint}
                    />
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
