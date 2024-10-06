"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Leaf, Zap, DollarSign, Shield, Recycle, Settings, Search, User, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

const menuItems = [
  { title: "Wellbeing", icon: Leaf, color: "bg-green-50 text-green-600", href: "/wellbeing" },
  { title: "Emission Reduction", icon: Zap, color: "bg-yellow-50 text-yellow-600", href: "/emission-reduction" },
  { title: "Beyond kWh Revenue", icon: DollarSign, color: "bg-blue-50 text-blue-600", href: "/beyond-kwh" },
  { title: "Budaya Safety", icon: Shield, color: "bg-red-50 text-red-600", href: "/budaya-safety" },
  { title: "Penghapusan Kemubadziran", icon: Recycle, color: "bg-purple-50 text-purple-600", href: "/penghapusan-kemubadziran" },
  { title: "Settings", icon: Settings, color: "bg-gray-50 text-gray-600", href: "/settings" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  }
};

export default function Home() {
  return (
    <ScrollArea className="h-screen">
      <motion.div
        className="container mx-auto px-4 py-8 mb-20 bg-custom-light"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Top section with greeting and search bar */}
        <motion.div className="flex flex-col space-y-6 mb-8" variants={itemVariants}>
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl font-bold text-custom-dark">Hello, User</h1>
              <p className="text-custom-blue">What service do you need?</p>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <Avatar className="h-12 w-12">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback><User className="h-6 w-6" /></AvatarFallback>
              </Avatar>
            </motion.div>
          </div>
          <motion.div
            className="relative"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="relative flex items-center">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search anything, etc"
                className="w-full pl-12 pr-12 py-3 h-14 rounded-full bg-white shadow-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-custom-blue text-white p-2 rounded-full">
                <SlidersHorizontal className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </motion.div>

        <motion.h2
          className="text-xl font-semibold mb-6 text-custom-dark"
          variants={itemVariants}
        >
          Category
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 gap-4"
          variants={containerVariants}
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={item.href}>
                <Card className={`p-4 flex flex-col items-center justify-center h-32 text-center ${item.color} rounded-xl shadow-custom hover:shadow-custom-hover transition-all duration-300 border-none`}>
                  <item.icon className="h-10 w-10 mb-2" />
                  <h2 className="text-sm font-semibold">{item.title}</h2>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </ScrollArea>
  );
}