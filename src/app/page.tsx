
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { MobileApp } from "@/components/sections/mobile-app";
import { Documentation } from "@/components/sections/documentation";
import { Partners } from "@/components/sections/partners";
import { ValueProposition } from "@/components/sections/value-proposition";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <Features />
      <MobileApp />
      <Documentation />
      <Partners />
    </>
  );
}
