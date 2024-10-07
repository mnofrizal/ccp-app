"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Activity,
  Brain,
  Sun,
  Coffee,
  Zap,
  Smile,
  Moon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const tipCardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  show: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.2,
    },
  },
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
      duration: 0.3,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
};

const wellbeingTips = [
  { icon: Sun, title: "Sunlight" },
  { icon: Brain, title: "Mindfulness" },
  { icon: Coffee, title: "Hydration" },
  { icon: Zap, title: "Exercise" },
  { icon: Smile, title: "Positivity" },
  { icon: Moon, title: "Sleep" },
];

export default function WellbeingPage() {
  return (
    <motion.div
      className="container mx-auto mb-20 px-4 py-8"
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      <motion.h1
        className="mb-6 text-3xl font-bold text-custom-blue"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        Wellbeing Dashboard
      </motion.h1>

      <Tabs defaultValue="metrics" className="w-full">
        <TabsList className="mb-6 grid w-full grid-cols-2">
          <TabsTrigger value="metrics">Metrics</TabsTrigger>
          <TabsTrigger value="tips">Wellbeing Tips</TabsTrigger>
        </TabsList>
        <TabsContent value="metrics">
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
            variants={{
              animate: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {/* Metrics cards remain unchanged */}
            {/* ... */}
          </motion.div>
        </TabsContent>
        <TabsContent value="tips">
          <motion.div
            className="grid grid-cols-2 gap-6 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {wellbeingTips.map((tip, index) => (
              <motion.div
                key={index}
                variants={tipCardVariants}
                whileHover="hover"
              >
                <Card className="shadow-custom flex flex-col items-center justify-center overflow-hidden py-6 transition-all duration-300">
                  <motion.div variants={iconVariants} className="mb-3">
                    <tip.icon className="h-12 w-12 text-custom-blue" />
                  </motion.div>
                  <motion.div variants={titleVariants}>
                    <CardTitle className="text-center text-sm font-medium">
                      {tip.title}
                    </CardTitle>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
