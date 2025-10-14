import { PlaceHolderImages } from "@/lib/placeholder-images";
import { MessageCircle, Plane, RadioTower, Wifi } from "lucide-react";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/technology", label: "Technology" },
  { href: "/product-models", label: "Product Models" },
  { href: "/mobile-app", label: "Mobile App" },
  { href: "/funding-partners", label: "Funding & Partners" },
  { href: "/contact", label: "Contact" },
];

export const products = [
  {
    id: "pro",
    name: "ArrowBeacon™ Pro",
    description: "The professional-grade choice for major airports and high-traffic airfields. Unmatched reliability and range.",
    specs: [
      "10,000 ft effective range",
      "All-weather IP68 rating",
      "Dual-band encrypted frequency",
      "FAA & EASA certified",
    ],
    image: PlaceHolderImages.find((img) => img.id === "product-1"),
  },
  {
    id: "standard",
    name: "ArrowBeacon™ Standard",
    description: "Versatile and robust, ideal for regional airports and private strips. The perfect balance of performance and value.",
    specs: [
      "5,000 ft effective range",
      "All-weather IP65 rating",
      "Single-band encrypted frequency",
      "FAA certified",
    ],
    image: PlaceHolderImages.find((img) => img.id === "product-2"),
  },
  {
    id: "portable",
    name: "ArrowBeacon™ Portable",
    description: "Compact and battery-powered for temporary runways, emergency operations, and remote locations.",
    specs: [
      "2,500 ft effective range",
      "24-hour battery life",
      "Quick-deploy system",
      "Carry-case included",
    ],
    image: PlaceHolderImages.find((img) => img.id === "product-3"),
  },
];

export const features = [
  {
    icon: RadioTower,
    title: "Precision Guidance",
    description: "Our proprietary signal technology provides pilots with unparalleled positional accuracy, even in low-visibility conditions.",
  },
  {
    icon: Wifi,
    title: "Seamless Integration",
    description: "ArrowBeacon systems integrate with existing airport infrastructure and avionics, ensuring a smooth and cost-effective rollout.",
  },
  {
    icon: Plane,
    title: "Pilot-Centric Design",
    description: "Developed with input from active pilots, our interfaces are intuitive, reducing cognitive load during critical flight phases.",
  },
  {
    icon: MessageCircle,
    title: "24/7 Support",
    description: "Our dedicated support team is always on standby to assist with any technical inquiries or operational needs.",
  },
];

export const documentation = [
  {
    id: "q1",
    question: "What is the typical installation time for an ArrowBeacon™ Pro system?",
    answer: "A standard ArrowBeacon™ Pro installation for a single runway can typically be completed within 48-72 hours by a certified team, minimizing operational downtime.",
  },
  {
    id: "q2",
    question: "Are the systems compatible with older aircraft?",
    answer: "Yes, our systems are designed for broad compatibility. The ArrowBeacon™ mobile app provides a universal interface for any aircraft, while direct integration is available for most modern glass cockpits.",
  },
  {
    id: "q3",
    question: "How does the system perform in extreme weather?",
    answer: "Our Pro and Standard models are IP-rated for all-weather performance, tested in conditions ranging from heavy snow to torrential rain and desert heat.",
  },
  {
    id: "q4",
    question: "What are the maintenance requirements?",
    answer: "ArrowBeacon systems are designed for minimal maintenance. We recommend an annual diagnostic check, which can be performed remotely by our technical team in most cases.",
  },
];

export const mobileApp = {
    title: "Your Cockpit, Extended.",
    description: "The ArrowBeacon™ companion app brings our powerful guidance system to any pilot with a smartphone or tablet. Get real-time data, manage your approach, and receive critical alerts, all from the palm of your hand.",
    features: [
        "Real-time runway visualization",
        "Configurable approach paths",
        "Weather and traffic alerts",
        "Pilot logbook integration"
    ],
    images: [
        PlaceHolderImages.find((img) => img.id === "mobile-app-1"),
        PlaceHolderImages.find((img) => img.id === "mobile-app-2"),
    ]
}
