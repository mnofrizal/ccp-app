"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Leaf,
  Recycle,
  TrendingDown,
  BarChart2,
  Wind,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// Komponen Progress sederhana
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

const emissionMetrics = [
  {
    title: "CO2 Reduction",
    icon: Leaf,
    value: 25,
    unit: "tons",
    color: "text-green-600",
  },
  {
    title: "Energy Saved",
    icon: Zap,
    value: 1500,
    unit: "kWh",
    color: "text-yellow-600",
  },
  {
    title: "Recycling Rate",
    icon: Recycle,
    value: 78,
    unit: "%",
    color: "text-blue-600",
  },
  {
    title: "Emission Trend",
    icon: TrendingDown,
    value: -15,
    unit: "%",
    color: "text-purple-600",
  },
];

const emissionInitiatives = [
  { icon: Leaf, title: "Green Energy Adoption" },
  { icon: Zap, title: "Energy Efficiency" },
  { icon: Recycle, title: "Waste Management" },
  { icon: TrendingDown, title: "Carbon Offsetting" },
  { icon: BarChart2, title: "Emissions Tracking" },
  { icon: Wind, title: "Clean Air Initiatives" },
];

export default function EmissionReductionPage() {
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
        Emission Reduction Dashboard
      </motion.h1>

      <Tabs defaultValue="metrics" className="w-full">
        <TabsList className="mb-6 grid w-full grid-cols-2">
          <TabsTrigger value="metrics">Emission Metrics</TabsTrigger>
          <TabsTrigger value="initiatives">Initiatives</TabsTrigger>
        </TabsList>
        <TabsContent value="metrics">
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {emissionMetrics.map((metric, index) => (
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
                    <SimpleProgress value={Math.abs(metric.value)} />
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
            {emissionInitiatives.map((initiative, index) => (
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
