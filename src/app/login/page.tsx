
"use client";

import Link from "next/link";
import { Lock } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div className="flex-1 py-12 lg:py-24 bg-secondary">
        <div className="container flex items-center justify-center">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                <CardTitle className="font-headline text-3xl">Partner Portal Access</CardTitle>
                <CardDescription>
                    Enter your credentials to access restricted documents and tools.
                </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" id="email" placeholder="partner@faa.gov" />
                        </div>
                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" placeholder="••••••••" />
                        </div>
                         <Link href="/portal" className="w-full">
                            <Button type="submit" className="w-full">
                                <Lock className="mr-2" />
                                Sign In
                            </Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
