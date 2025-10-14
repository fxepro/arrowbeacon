
"use client";

import { DemoRequestModal } from "../demo-request-modal";

export function Hero() {

  return (
    <section className="relative h-[80vh] min-h-[500px] max-h-[720px] w-full flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-800 to-green-800/70 -z-10" />
      <div className="absolute inset-0 bg-background/30 backdrop-blur-xl -z-10" />
      
      <div className="container text-center flex flex-col items-center">
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-4 animate-fade-in-up">
          Clarity on Approach
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-white/80 mb-8 animate-fade-in-up animation-delay-300">
          ArrowBeacon provides pilots with unambiguous visual guidance,
          enhancing safety and efficiency on any runway, in any condition.
        </p>
        <div className="animate-fade-in-up animation-delay-600">
            <DemoRequestModal />
        </div>
      </div>
       <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-600 {
            animation-delay: 0.6s;
        }
        .animate-fade-in-up {
            opacity: 0;
        }
      `}</style>
    </section>
  );
}
