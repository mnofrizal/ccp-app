"use client";

import { motion } from "framer-motion";
import { Settings, Bell, Moon, Sun, User, Lock, HelpCircle, LogOut } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const itemVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
};

const settingsItems = [
  { icon: Bell, title: "Notifications", component: Switch },
  { icon: Moon, title: "Dark Mode", component: Switch },
  { icon: User, title: "Account", href: "/settings/account" },
  { icon: Lock, title: "Privacy", href: "/settings/privacy" },
  { icon: HelpCircle, title: "Help & Support", href: "/settings/help" },
  { icon: LogOut, title: "Log Out", onClick: () => console.log("Logging out...") },
];

export default function SettingsPage() {
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
          Settings
        </motion.h1>
        
        <motion.div
          className="space-y-4"
          variants={{
            animate: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {settingsItems.map((item, index) => (
            <motion.div key={item.title} variants={itemVariants}>
              <Card className="shadow-custom">
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center space-x-4">
                    <item.icon className="h-6 w-6 text-custom-blue" />
                    <span className="font-medium">{item.title}</span>
                  </div>
                  {item.component && <item.component />}
                  {item.href && (
                    <Settings className="h-5 w-5 text-gray-400" />
                  )}
                  {item.onClick && (
                    <button onClick={item.onClick} className="text-red-500 font-medium">
                      {item.title}
                    </button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </ScrollArea>
  );
}