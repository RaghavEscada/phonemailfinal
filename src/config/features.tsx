import { Smartphone, ShieldCheck, Cloud, Users } from "lucide-react";

export const features = [
  {
    title: "Phone Number as Email ID",
    description: "Your phone number becomes your email address. No complex usernames or passwords to remember.",
    icon: <Smartphone className="w-6 h-6" />,
    image: "/src/assets/identity-linked-email.jpg"
  },
  {
    title: "Aadhaar-Linked Identity",
    description: "Built on your existing Aadhaar-linked phone number for verified, secure communication.",
    icon: <ShieldCheck className="w-6 h-6" />,
    image: "/src/assets/rural-access.jpg"
  },
  {
    title: "Universal Document Delivery",
    description: "Receive all official documents - court orders, tax notices, transfer letters - in one secure inbox.",
    icon: <Cloud className="w-6 h-6" />,
    image: "/src/assets/document-management.jpg"
  },
  {
    title: "Built for Everyone",
    description: "WhatsApp-like simplicity designed specifically for rural users and the non-tech-savvy.",
    icon: <Users className="w-6 h-6" />,
    image: "/src/assets/phonemail-hero.jpg"
  }
];