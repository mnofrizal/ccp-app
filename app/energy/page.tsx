"use client";

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Leaf,
  Zap,
  DollarSign,
  Shield,
  Recycle,
  Search,
  ChevronRight,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import Link from "next/link";

const categories = [
  {
    icon: Leaf,
    label: "Wellbeing",
    color: "bg-green-100 text-green-600",
    initial: "W",
    href: "/wellbeing",
  },
  {
    icon: Zap,
    label: "EMISSION REDUCTION",
    color: "bg-yellow-100 text-yellow-600",
    initial: "ER",
    href: "/emission-reduction",
  },
  {
    icon: DollarSign,
    label: "BEYOND KWH REVENUE",
    color: "bg-blue-100 text-blue-600",
    initial: "BR",
    href: "/beyond-kwh",
  },
  {
    icon: Shield,
    label: "BUDAYA SAFETY",
    color: "bg-red-100 text-red-600",
    initial: "BS",
    href: "/budaya-safety",
  },
  {
    icon: Recycle,
    label: "PENGHAPUSAN KEMUBADZIRAN",
    color: "bg-purple-100 text-purple-600",
    initial: "PK",
    href: "/penghapusan-kemubadziran",
  },
];

const targetList = [
  {
    title: "Wellbeing Program",
    progress: 75,
    color: "bg-green-500",
    initial: "W",
  },
  {
    title: "Emission Reduction Plan",
    progress: 60,
    color: "bg-yellow-500",
    initial: "ER",
  },
  {
    title: "Revenue Growth",
    progress: 80,
    color: "bg-blue-500",
    initial: "BR",
  },
  {
    title: "Safety Compliance",
    progress: 90,
    color: "bg-red-500",
    initial: "BS",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function EnergySummaryPage() {
  const [showAllCategories, setShowAllCategories] = useState(false);

  const displayedCategories = showAllCategories
    ? categories
    : categories.slice(0, 4);

  return (
    <ScrollArea className="h-screen">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-b-[2rem] bg-custom-blue pb-3 shadow-lg"
      >
        <div className="container mx-auto px-4 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-9 flex items-center justify-between"
          >
            <div>
              <h1 className="text-2xl font-bold text-white">Hi, Amrizal 👋</h1>
              <p className="text-blue-100">Aya siap bantu cek progressmu!</p>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-xl font-bold text-custom-blue"
            >
              AM
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative mb-4 flex items-center"
          >
            <Search className="absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 transform text-gray-400" />
            <Input
              type="text"
              placeholder="Cari target..."
              className="w-full rounded-full bg-white py-7 pl-12 pr-4 text-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </motion.div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Categories</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center text-sm text-custom-blue"
              onClick={() => setShowAllCategories(!showAllCategories)}
            >
              {showAllCategories ? "See less" : "See all"}
              <ChevronRight className="ml-1 h-4 w-4" />
            </motion.button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {displayedCategories.map((category, index) => (
              <Link href={category.href} key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex flex-col items-center ${category.color} p-4 rounded-lg cursor-pointer`}
                >
                  <category.icon className="mb-2 h-8 w-8" />
                  <span className="text-center text-xs">{category.label}</span>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Target List</h2>
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex cursor-pointer items-center text-sm text-custom-blue"
            >
              See all
              <ChevronRight className="ml-1 h-4 w-4" />
            </motion.span>
          </div>
          <div className="space-y-4">
            {targetList.map((target, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-center">
                      <div
                        className={`w-10 h-10 rounded-lg ${target.color} bg-opacity-20 flex items-center justify-center mr-3`}
                      >
                        <span
                          className={`text-sm font-semibold ${target.color.replace(
                            "bg-",
                            "text-"
                          )}`}
                        >
                          {target.initial}
                        </span>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-sm font-semibold">
                          {target.title}
                        </h3>
                        <div className="flex items-center justify-between">
                          <Progress
                            value={target.progress}
                            className={`h-2 ${target.color} mt-1 flex-grow mr-2`}
                          />
                          <span className="text-sm font-medium">
                            {target.progress}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </ScrollArea>
  );
}
