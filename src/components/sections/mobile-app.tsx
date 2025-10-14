
import Image from "next/image";
import { mobileApp } from "@/lib/data";
import { Button } from "../ui/button";
import { Smartphone, Check } from "lucide-react";

const AppStoreIcon = () => (
    <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24">
        <path d="M18.665 15.352c-1.325.215-2.025.832-3.134.832-1.128 0-1.81-.617-3.115-.617-1.324 0-2.112.6-3.32.617-.005 0-2.144-.06-3.26-.957-.96-.78-1.33-2.03-1.33-3.368 0-2.13 1.09-3.766 2.766-3.766.957 0 1.643.636 2.747.636 1.085 0 1.77-.636 2.89-.636 1.109 0 1.662.617 2.728.617 1.068 0 1.948-.85 2.57-2.031-.103-.018-2.222-1.042-4.2-1.023-1.84.017-3.6.85-4.66 2.221a.75.75 0 01-1.284-.673c1.324-1.71 3.447-2.673 5.378-2.673 1.01 0 2.51.343 3.82.992.17.086.29.25.3.44.04.53-.39 2.3-1.28 3.593-1.03 1.48-2.66 2.35-4.14 2.35-.97 0-1.68-.53-2.73-.53-.99 0-1.78.53-2.81.53-1.01 0-1.62-.48-2.45-.48-.92 0-2.15.53-2.85 1.76.68.55 1.66.88 2.68.88 1.28 0 1.92-.61 3.22-.61s1.88.61 3.2.61c1.3 0 2.05-.55 3.07-.76zM15.42 5.25c.02-.02.48-1.55 1.07-2.4.4-.59.78-1.19 1.1-1.79a.75.75 0 011.3.65c-.46.85-.97 1.63-1.5 2.33-.49.65-1.08 1.3-1.73 1.77a.75.75 0 01-1.02-.68c.1-.42.42-1.07.78-1.88z"></path>
    </svg>
)

const PlayStoreIcon = () => (
    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.5,11.1l-10.2-5.9C11,5,10.7,5,10.3,5.2L2.7,9.6C2.3,9.8,2,10.2,2,10.6v2.8c0,0.4,0.3,0.8,0.7,1l7.6,4.4c0.4,0.2,0.8,0.2,1.2,0l10.2-5.9c0.4-0.2,0.7-0.6,0.7-1v-1.6C22.2,11.7,21.9,11.3,21.5,11.1z M8.8,17.4L4.2,14.8V12l4.6,2.6V17.4z M10,10.8L5.4,8.2l4.6-2.6l4.6,2.6L10,10.8z M15.2,14.8L10.6,17.4v-4.8L15.2,12V14.8z"></path>
    </svg>
)

export function MobileApp() {
  return (
    <section id="mobile-app" className="py-16 lg:py-24 bg-background">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 flex justify-center gap-4">
          {mobileApp.images.map((img, index) => 
            img && (
              <div key={img.id} className={`relative w-40 h-80 md:w-48 md:h-96 rounded-2xl overflow-hidden shadow-2xl ${index === 0 ? 'mt-8' : 'mb-8'}`}>
                <Image
                  src={img.imageUrl}
                  alt={img.description}
                  fill
                  className="object-cover"
                  data-ai-hint={img.imageHint}
                />
              </div>
            )
          )}
        </div>
        <div className="order-1 md:order-2">
            <div className="flex items-center gap-2 text-primary mb-2">
                <Smartphone/>
                <h3 className="font-semibold tracking-wider uppercase">Companion App</h3>
            </div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
            {mobileApp.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            {mobileApp.description}
          </p>
          <ul className="space-y-3 mb-8">
            {mobileApp.features.map((feature, index) => (
              <li key={index} className="flex items-center text-lg">
                <Check className="h-6 w-6 mr-3 p-1 bg-primary text-primary-foreground rounded-full" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
                <AppStoreIcon />
                Download on the App Store
            </Button>
             <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
                <PlayStoreIcon />
                Get it on Google Play
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
