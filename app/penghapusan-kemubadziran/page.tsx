"use client";

import { motion } from "framer-motion";
import {
  Recycle,
  TrendingDown,
  BarChart2,
  Droplet,
  Clock,
  Battery,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const SimpleProgress = ({ value }: { value: number }) => (
  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
    <div
      className="h-full bg-custom-blue"
      style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
    />
  </div>
);
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

const wasteMetrics = [
  {
    title: "Waste Reduction",
    icon: Recycle,
    value: 30,
    unit: "%",
    color: "text-green-600",
  },
  {
    title: "Energy Efficiency",
    icon: Battery,
    value: 85,
    unit: "%",
    color: "text-yellow-600",
  },
  {
    title: "Water Conservation",
    icon: Droplet,
    value: 20,
    unit: "kL",
    color: "text-blue-600",
  },
  {
    title: "Time Saved",
    icon: Clock,
    value: 120,
    unit: "hrs",
    color: "text-purple-600",
  },
];

const wasteInitiatives = [
  { icon: Recycle, title: "Recycling Program" },
  { icon: Battery, title: "Energy Management" },
  { icon: Droplet, title: "Water Saving" },
  { icon: Clock, title: "Process Optimization" },
  { icon: BarChart2, title: "Waste Tracking" },
  { icon: TrendingDown, title: "Resource Efficiency" },
];

export default function PenghapusanKemubadziran() {
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
        Penghapusan Kemubadziran Dashboard
      </motion.h1>

      <Tabs defaultValue="metrics" className="w-full">
        <TabsList className="mb-6 grid w-full grid-cols-2">
          <TabsTrigger value="metrics">Waste Metrics</TabsTrigger>
          <TabsTrigger value="initiatives">Initiatives</TabsTrigger>
        </TabsList>
        <TabsContent value="metrics">
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {wasteMetrics.map((metric, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card className="shadow-custom">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {metric.title}
                    </CardTitle>
                    <metric.icon className={`h-4 w-4 ${metric.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {metric.value}
                      {metric.unit}
                    </div>
                    <SimpleProgress value={metric.value} />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
        <TabsContent value="initiatives">
          <motion.div
            className="grid grid-cols-2 gap-6 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {wasteInitiatives.map((initiative, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card className="shadow-custom transition-all duration-300 hover:shadow-lg">
                  <CardContent className="flex flex-col items-center justify-center py-6">
                    <initiative.icon className="mb-3 h-12 w-12 text-custom-blue" />
                    <CardTitle className="text-center text-sm font-medium">
                      {initiative.title}
                    </CardTitle>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
