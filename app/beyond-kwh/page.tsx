"use client";

import { motion } from "framer-motion";
import { DollarSign, TrendingUp, Zap, BarChart, Map } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const mapCardVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  },
  hover: { 
    scale: 1.02,
    boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

export default function BeyondKwhPage() {
  return (
    <motion.div
      className="container mx-auto px-4 py-8 mb-20"
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      <h1 className="text-3xl font-bold text-custom-blue mb-6">Beyond kWh Revenue</h1>
      
      <Tabs defaultValue="statistik" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="statistik">Statistik</TabsTrigger>
          <TabsTrigger value="peta">Peta</TabsTrigger>
        </TabsList>
        <TabsContent value="statistik">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={{
              animate: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <motion.div variants={cardVariants}>
              <Card className="shadow-custom">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-custom-blue" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                  <Progress value={75} className="mt-2" />
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants}>
              <Card className="shadow-custom">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Energy Savings</CardTitle>
                  <Zap className="h-4 w-4 text-custom-blue" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,234 kWh</div>
                  <p className="text-xs text-muted-foreground">-5% from last week</p>
                  <Progress value={65} className="mt-2" />
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants}>
              <Card className="shadow-custom">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
                  <TrendingUp className="h-4 w-4 text-custom-blue" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+12.5%</div>
                  <p className="text-xs text-muted-foreground">Increased by 2.3% this quarter</p>
                  <Progress value={85} className="mt-2" />
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants}>
              <Card className="shadow-custom">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Customer Satisfaction</CardTitle>
                  <BarChart className="h-4 w-4 text-custom-blue" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">92%</div>
                  <p className="text-xs text-muted-foreground">Based on recent surveys</p>
                  <Progress value={92} className="mt-2" />
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>
        <TabsContent value="peta">
          <motion.div
            variants={mapCardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <Card className="shadow-custom transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Revenue Map</CardTitle>
                <Map className="h-4 w-4 text-custom-blue" />
              </CardHeader>
              <CardContent>
                <motion.div 
                  className="h-[400px] bg-gray-100 flex items-center justify-center rounded-md overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.p 
                    className="text-gray-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Map placeholder (Mapbox integration required)
                  </motion.p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}