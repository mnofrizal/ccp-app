"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, CheckSquare, Settings, Bell } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import LightningLogo from './LightningLogo';

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: CheckSquare, label: "Checklist", href: "/checklist" },
  { icon: LightningLogo, label: "Energy", href: "/energy" },
  { icon: Bell, label: "Notifications", href: "/notifications", badge: 3 },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export default function BottomNavbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      className="fixed bottom-0 left-0 right-0 bg-white shadow-lg"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-around items-center h-16 shadow-[0_-4px_10px_-1px_rgba(61,143,239,0.1)]">
        {navItems.map(({ icon: Icon, label, href, badge }) => {
          const isActive = pathname === href;
          return (
            <Link href={href} key={label}>
              <motion.div
                className={`relative flex flex-col items-center justify-center w-full h-full ${
                  isActive ? 'text-custom-blue' : 'text-custom-dark'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1.2 : 1,
                    y: isActive ? -4 : 0
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {Icon === LightningLogo ? (
                    <Icon 
                      className={`h-8 w-8 ${isActive ? 'text-custom-blue' : 'text-custom-dark'}`}
                    />
                  ) : (
                    <Icon 
                      className={`h-6 w-6 ${isActive ? 'fill-current' : ''}`} 
                      strokeWidth={isActive ? 2.5 : 2}
                    />
                  )}
                  {badge && (
                    <Badge 
                      className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px] bg-red-500 text-white"
                    >
                      {badge}
                    </Badge>
                  )}
                </motion.div>
                {isActive && (
                  <motion.div
                    className="w-1 h-1 bg-custom-blue rounded-full mt-1"
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