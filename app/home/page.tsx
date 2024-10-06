"use client";

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Zap, DollarSign, Shield, Recycle, Settings } from "lucide-react";
import Link from "next/link";
import LightningLogo from "@/components/LightningLogo";

const categories = [
  {
    icon: Leaf,
    label: "Wellbeing",
    color: "bg-green-100 text-green-600",
    href: "/wellbeing",
  },
  {
    icon: Zap,
    label: "EMISSION REDUCTION",
    color: "bg-yellow-100 text-yellow-600",
    href: "/emission-reduction",
  },
  {
    icon: DollarSign,
    label: "BEYOND KWH REVENUE",
    color: "bg-blue-100 text-blue-600",
    href: "/beyond-kwh",
  },
  {
    icon: Shield,
    label: "BUDAYA SAFETY",
    color: "bg-red-100 text-red-600",
    href: "/budaya-safety",
  },
  {
    icon: Recycle,
    label: "PENGHAPUSAN KEMUBADZIRAN",
    color: "bg-purple-100 text-purple-600",
    href: "/penghapusan-kemubadziran",
  },
  {
    icon: Settings,
    label: "Settings",
    color: "bg-gray-100 text-gray-600",
    href: "/settings",
  },
];

export default function HomePage() {
  return (
    <ScrollArea className="h-screen">
      <div className="container flex flex-col items-center justify-center px-4 py-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="mb-8"
        >
          <LightningLogo className="h-32 w-32 text-custom-blue" />
        </motion.div>

        <h1 className="mb-8 text-center text-3xl font-bold">
          Energy Dashboard
        </h1>

        <div className="grid w-full max-w-md grid-cols-2 gap-4">
          {categories.map((category, index) => (
            <Link href={category.href} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card
                  className={`${category.color} shadow-md hover:shadow-lg transition-shadow duration-300`}
                >
                  <CardContent className="flex h-32 flex-col items-center justify-center p-4">
                    <category.icon className="mb-2 h-10 w-10" />
                    <span className="text-center text-sm font-medium">
                      {category.label}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}
