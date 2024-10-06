"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, CheckSquare, Settings, Bell } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import LightningLogo from "./LightningLogo";

const navItems = [
  { icon: CheckSquare, label: "Checklist", href: "/checklist" },
  { icon: Home, label: "Home", href: "/home" },
  { icon: LightningLogo, label: "Energy", href: "/" },
  { icon: Bell, label: "Notifications", href: "/notifications", badge: 3 },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export default function BottomNavbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      className="fixed bottom-0 left-0 right-0 bg-background shadow-lg"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex h-16 items-center justify-around shadow-[0_-4px_10px_-1px_rgba(61,143,239,0.1)] dark:shadow-[0_-4px_10px_-1px_rgba(61,143,239,0.05)]">
        {navItems.map(({ icon: Icon, label, href, badge }, index) => {
          const isActive = pathname === href;
          const isCenter = index === 2; // Check if it's the center icon
          return (
            <Link href={href} key={label}>
              <motion.div
                className={`relative flex flex-col items-center justify-center w-full h-full ${
                  isActive ? "text-custom-blue" : "text-muted-foreground"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1.2 : 1,
                    y: isActive ? -4 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {isCenter ? (
                    <Icon
                      className={`h-10 w-10 ${
                        isActive ? "text-custom-blue" : "text-muted-foreground"
                      }`}
                    />
                  ) : (
                    <Icon
                      className={`h-6 w-6 ${isActive ? "fill-current" : ""}`}
                      strokeWidth={isActive ? 2.5 : 2}
                    />
                  )}
                  {badge && (
                    <Badge className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center bg-red-500 p-0 text-[10px] text-white">
                      {badge}
                    </Badge>
                  )}
                </motion.div>
                {isActive && (
                  <motion.div
                    className="mt-1 h-1 w-1 rounded-full bg-custom-blue"
                    layoutId="activeIndicator"
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
