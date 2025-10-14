
import { documentation } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookMarked } from "lucide-react";

export function Documentation() {
  return (
    <section id="docs" className="py-16 lg:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-primary mb-2">
            <BookMarked />
            <h3 className="font-semibold tracking-wider uppercase">
              Technical Docs
            </h3>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Quick answers to common inquiries about our systems.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {documentation.map((doc) => (
              <AccordionItem key={doc.id} value={doc.id}>
                <AccordionTrigger className="text-lg text-left hover:no-underline">
                  {doc.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {doc.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
