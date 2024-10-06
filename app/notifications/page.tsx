"use client";

import { motion } from "framer-motion";
import { Bell, MessageCircle, Heart, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const itemVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
};

const notifications = [
  { icon: MessageCircle, title: "New message from John Doe", time: "2 minutes ago" },
  { icon: Heart, title: "Sarah liked your post", time: "1 hour ago" },
  { icon: Star, title: "You've earned a new badge!", time: "3 hours ago" },
  { icon: Bell, title: "Reminder: Team meeting at 3 PM", time: "5 hours ago" },
];

export default function NotificationsPage() {
  return (
    <ScrollArea className="h-screen">
      <motion.div
        className="container mx-auto px-4 py-8 mb-20"
        initial="initial"
        animate="animate"
        variants={pageVariants}
      >
        <motion.h1 
          className="text-3xl font-bold text-custom-blue mb-6"
          variants={itemVariants}
        >
          Notifications
        </motion.h1>
        
        <motion.div
          className="space-y-4"
          variants={{
            animate: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {notifications.map((notification, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="shadow-custom">
                <CardContent className="flex items-center space-x-4 p-4">
                  <div className="bg-custom-blue bg-opacity-10 p-2 rounded-full">
                    <notification.icon className="h-6 w-6 text-custom-blue" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{notification.title}</p>
                    <p className="text-sm text-gray-500">{notification.time}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </ScrollArea>
  );
}