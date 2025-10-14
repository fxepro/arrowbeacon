
"use client";

import Link from "next/link";
import { ArrowBeaconLogo } from "../icons";
import { navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4 md:col-span-2">
            <div className="flex items-center gap-2">
                <ArrowBeaconLogo className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold font-headline">ArrowBeacon</span>
            </div>
            <p className="text-muted-foreground max-w-md">
            Leading the way in visual guidance systems for the next generation of aviation.
            </p>
        </div>

        <div className="md:col-span-1">
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={`footer-${link.href}`}>
                <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
             <li>
                <Link href="/portal" className="text-muted-foreground hover:text-primary transition-colors">
                  Partner Portal
                </Link>
              </li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} ArrowBeacon. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
