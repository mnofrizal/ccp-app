"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, TrendingUp, DollarSign, Leaf, Battery, Droplet, Wind, Sun, Thermometer, Recycle, BarChart2, Activity } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const summaryCards = [
  { title: "Energy Consumption", icon: Zap, value: "1,234 kWh", change: "+5.3%", wide: true },
  { title: "Efficiency Rate", icon: TrendingUp, value: "92%", change: "+2.1%" },
  { title: "Cost Savings", icon: DollarSign, value: "$567.89", change: "+10.2%" },
  { title: "Carbon Footprint", icon: Leaf, value: "-230 kg", change: "-8.7%", wide: true },
  { title: "Battery Storage", icon: Battery, value: "85%", change: "+15%" },
  { title: "Water Usage", icon: Droplet, value: "3,456 L", change: "-3.2%" },
  { title: "Wind Power", icon: Wind, value: "456 kWh", change: "+7.8%", wide: true },
  { title: "Solar Energy", icon: Sun, value: "789 kWh", change: "+12.5%" },
  { title: "Temperature", icon: Thermometer, value: "22°C", change: "-1.5°C" },
  { title: "Recycling Rate", icon: Recycle, value: "78%", change: "+3.4%", wide: true },
  { title: "Energy Intensity", icon: BarChart2, value: "0.45 kWh/m²", change: "-2.1%" },
  { title: "Peak Demand", icon: Activity, value: "1,890 kW", change: "+1.7%" },
];

const ParallaxCard = ({ card, index }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`${card.wide ? 'w-full' : 'w-full sm:w-1/2'} mb-4`}
    >
      <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
          <card.icon className="h-4 w-4 text-custom-blue" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{card.value}</div>
          <p className={`text-xs ${card.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
            {card.change} from last month
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function EnergySummaryPage() {
  return (
    <ScrollArea className="h-screen">
      <div className="container mx-auto px-4 py-8 mb-20">
        <motion.h1 
          className="text-3xl font-bold text-custom-blue mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Energy Summary
        </motion.h1>
        
        <div className="flex flex-wrap -mx-2">
          {summaryCards.map((card, index) => (
            <div key={card.title} className={`px-2 ${card.wide ? 'w-full' : 'w-full sm:w-1/2'}`}>
              <ParallaxCard card={card} index={index} />
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}