
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, LifeBuoy, LogOut } from "lucide-react";
import Link from "next/link";

export default function PortalPage() {
    return (
        <div className="flex-1 py-12 bg-secondary">
            <div className="container">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="font-headline text-4xl font-bold">Partner Portal</h1>
                        <p className="text-muted-foreground">Welcome, authorized partner. Access your exclusive resources below.</p>
                    </div>
                    <Button variant="outline" asChild>
                        <Link href="/">
                            <LogOut className="mr-2 h-4 w-4" />
                            Log Out
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle>Technical Documents</CardTitle>
                            <FileText className="h-6 w-6 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <CardDescription>Access detailed installation guides, API documentation, and maintenance schedules.</CardDescription>
                        </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle>Support Tickets</CardTitle>
                            <LifeBuoy className="h-6 w-6 text-muted-foreground" />
                        </CardHeader>
                         <CardContent>
                            <CardDescription>Submit and track support requests with our dedicated engineering team.</CardDescription>
                        </CardContent>
                    </Card>
                     <Card className="hover:shadow-lg transition-shadow bg-primary/10 border-primary">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle>Beta Program</CardTitle>
                            <FileText className="h-6 w-6 text-primary" />
                        </CardHeader>
                        <CardContent>
                            <CardDescription>Get early access to upcoming features and provide feedback directly to our developers.</CardDescription>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
