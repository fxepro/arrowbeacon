
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Plane, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowBeaconLogo } from "@/components/icons";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { DemoRequestModal } from "../demo-request-modal";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "../ui/sheet";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <ArrowBeaconLogo className="h-6 w-6 text-primary" />
          <span className="hidden font-bold sm:inline-block font-headline">
            ArrowBeacon
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <Button asChild variant="ghost">
            <Link href="/login">Partner Login</Link>
          </Button>
          <DemoRequestModal />
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col h-full">
                <div className="flex items-center border-b pb-4">
                    <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                        <ArrowBeaconLogo className="h-6 w-6 text-primary" />
                        <span className="font-bold font-headline">ArrowBeacon</span>
                    </Link>
                </div>
                <nav className="flex flex-col gap-4 mt-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
