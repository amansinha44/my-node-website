"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { ImageWithFallback } from "../global/ImageWithFallback";
import { useTranslations } from "next-intl";

export default function NewsSlider() {
  const t = useTranslations("homepage.NewsSlider");

  const newsData = [
    { image: "/news1.webp", title: t("newsItems.0") },
    { image: "/news2.webp", title: t("newsItems.1") },
    { image: "/news3.webp", title: t("newsItems.2") },
    { image: "/news4.webp", title: t("newsItems.3") },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.offsetWidth;
      const scrollAmount = containerWidth / 3;
      const newScrollLeft =
        direction === "left"
          ? carouselRef.current.scrollLeft - scrollAmount
          : carouselRef.current.scrollLeft + scrollAmount;

      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const scrollToItem = (index: number) => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.offsetWidth;
      const itemWidth = containerWidth / 3;
      carouselRef.current.scrollTo({
        left: index * itemWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        if (!isHovered && carouselRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
          const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;

          if (isAtEnd) {
            carouselRef.current.scrollTo({ left: 0, behavior: "auto" });
            setTimeout(() => scrollToItem(1), 50);
          } else {
            scroll("right");
          }
        }
      }, 5000);
    };

    startAutoScroll();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered]);

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        carouselRef.current.scrollTo({ left: 0, behavior: "auto" });
      }
    }
  };

  return (
    <motion.div
      className="relative w-full px-6 hide-scrollbar"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex items-center justify-between flex-col sm:flex-row"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl lg:text-3xl font-semibold text-primary text-pretty lg:mb-6 md:mb-5 sm:mb-3 mb-1 font-display">
          {t("heading")}
        </h2>
        <Button
          variant="default"
          className="bg-indigo-800 text-fuchsia-50 px-6 py-2 rounded-full font-semibold"
        >
          {t("exploreMore")}
        </Button>
      </motion.div>

      <div
        className="relative flex justify-center flex-col items-end"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={carouselRef}
          className="flex overflow-x-auto w-full py-3 space-x-4 scrollbar-hide snap-x snap-mandatory scroll-smooth hide-scrollbar max-h-max overflow-y-hidden"
          onScroll={handleScroll}
        >
          {[...newsData, newsData[0]].map((news, index) => (
            <motion.div
              key={`${index}-${news.title}`}
              className="min-w-full sm:min-w-[45%] lg:min-w-[30%] min-h-72 rounded-xl overflow-hidden relative snap-start hide-scrollbar aspect-3/4"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                fallbackSrc="/fallback-image.webp"
                src={news.image}
                alt={news.title}
                fill
                className="w-full h-60 object-cover object-center hover:scale-110 transition-all duration-400 ease-in-out"
              />
              <div className="absolute flex items-center justify-end flex-col inset-0 bg-linear-to-t from-black/60 to-transparent p-4 pointer-events-none z-10">
                <h3 className="text-base text-stone-50 font-medium text-center">
                  {news.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex gap-6">
          <Button
            onClick={() => scroll("left")}
            variant="outline"
            size="xl"
            title="Slide left by one card."
            className="size-12 p-5 z-10 hidden md:flex rounded-full bg-primary shadow-md hover:bg-indigo-100 hover:text-primary text-indigo-100"
          >
            <ChevronLeft className="size-6" />
          </Button>
          <Button
            onClick={() => scroll("right")}
            variant="outline"
            size="xl"
            title="Slide right by one card."
            className="size-12 p-5 z-10 hidden md:flex rounded-full bg-primary shadow-md hover:bg-indigo-100 hover:text-primary text-indigo-100"
          >
            <ChevronRight className="size-6" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
