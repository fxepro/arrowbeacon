
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";
import Link from "next/link";

export function Partners() {
  const featureImage = PlaceHolderImages.find((img) => img.id === "feature-1");

  return (
    <section id="partners" className="py-16 lg:py-24 bg-background">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
            For Our Partners
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Authorized partners can access detailed technical specifications,
            integration guides, and direct support channels through our secure
            portal.
          </p>
          <div className="flex flex-wrap gap-4">
             <Button asChild>
                <Link href="/login">Partner Login</Link>
            </Button>
             <Button variant="outline" asChild>
                <Link href="/funding-partners">Become a Partner</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
          {featureImage && (
            <Image
              src={featureImage.imageUrl}
              alt={featureImage.description}
              fill
              className="object-cover"
              data-ai-hint={featureImage.imageHint}
            />
          )}
        </div>
      </div>
    </section>
  );
}
