"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const featuredItems = [
  { title: "Featured Item 1", description: "Description 1" },
  { title: "Featured Item 2", description: "Description 2" },
  { title: "Featured Item 3", description: "Description 3" },
];

export function FeaturedCarousel() {
  return (
    <Carousel className="w-full max-w-xs mx-auto">
      <CarouselContent>
        {featuredItems.map((item, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}