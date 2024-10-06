"use client";

import { motion } from "framer-motion";
import { CheckSquare, Square, Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const itemVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
};

interface ChecklistItem {
  id: number;
  text: string;
  completed: boolean;
}

export default function ChecklistPage() {
  const [items, setItems] = useState<ChecklistItem[]>([
    { id: 1, text: "Complete project proposal", completed: false },
    { id: 2, text: "Schedule team meeting", completed: true },
    { id: 3, text: "Review client feedback", completed: false },
  ]);
  const [newItemText, setNewItemText] = useState("");

  const toggleItem = (id: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const addItem = () => {
    if (newItemText.trim()) {
      setItems([...items, { id: Date.now(), text: newItemText.trim(), completed: false }]);
      setNewItemText("");
    }
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

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
          Checklist
        </motion.h1>
        
        <motion.div className="mb-4" variants={itemVariants}>
          <div className="flex space-x-2">
            <Input
              type="text"
              placeholder="Add new item"
              value={newItemText}
              onChange={(e) => setNewItemText(e.target.value)}
              className="flex-grow"
            />
            <Button onClick={addItem}>Add</Button>
          </div>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={{
            animate: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {items.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <Card className="shadow-custom">
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center space-x-4">
                    <button onClick={() => toggleItem(item.id)}>
                      {item.completed ? (
                        <CheckSquare className="h-6 w-6 text-custom-blue" />
                      ) : (
                        <Square className="h-6 w-6 text-gray-400" />
                      )}
                    </button>
                    <span className={`font-medium ${item.completed ? 'line-through text-gray-400' : ''}`}>
                      {item.text}
                    </span>
                  </div>
                  <button onClick={() => removeItem(item.id)}>
                    <Trash2 className="h-5 w-5 text-red-500" />
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </ScrollArea>
  );
}