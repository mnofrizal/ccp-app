"use client";

import { motion } from "framer-motion";
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  Users,
  Lightbulb,
  TrendingUp,
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

const safetyMetrics = [
  { title: "Safety Score", icon: Shield, value: 92, color: "text-green-600" },
  {
    title: "Incident Reports",
    icon: AlertTriangle,
    value: 3,
    color: "text-yellow-600",
  },
  {
    title: "Safety Compliance",
    icon: CheckCircle,
    value: 98,
    color: "text-blue-600",
  },
  {
    title: "Employee Training",
    icon: Users,
    value: 87,
    color: "text-purple-600",
  },
];

const safetyTips = [
  { icon: Shield, title: "Always Wear PPE" },
  { icon: AlertTriangle, title: "Report Hazards" },
  { icon: CheckCircle, title: "Follow Procedures" },
  { icon: Users, title: "Team Communication" },
  { icon: Lightbulb, title: "Suggest Improvements" },
  { icon: TrendingUp, title: "Continuous Learning" },
];

export default function BudayaSafetyPage() {
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
        Budaya Safety Dashboard
      </motion.h1>

      <Tabs defaultValue="metrics" className="w-full">
        <TabsList className="mb-6 grid w-full grid-cols-2">
          <TabsTrigger value="metrics">Safety Metrics</TabsTrigger>
          <TabsTrigger value="tips">Safety Tips</TabsTrigger>
        </TabsList>
        <TabsContent value="metrics">
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {safetyMetrics.map((metric, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card className="shadow-custom">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {metric.title}
                    </CardTitle>
                    <metric.icon className={`h-4 w-4 ${metric.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{metric.value}%</div>
                    <SimpleProgress value={metric.value} />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
        <TabsContent value="tips">
          <motion.div
            className="grid grid-cols-2 gap-6 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {safetyTips.map((tip, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card className="shadow-custom transition-all duration-300 hover:shadow-lg">
                  <CardContent className="flex flex-col items-center justify-center py-6">
                    <tip.icon className="mb-3 h-12 w-12 text-custom-blue" />
                    <CardTitle className="text-center text-sm font-medium">
                      {tip.title}
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
