'use client';
import { useCallback, useEffect, useState } from "react";
import Image from "../../fragments/Image";
import ICarouselProps from "./Carousel.model";

const AUTO_PLAY = true;
const INTERVAL = 5000;

const Carousel = ({
  articles = []
}: ICarouselProps) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    if (!articles.length) return;
    setCurrent((prev) => (prev + 1) % articles.length);
  }, [articles.length]);

  const prevSlide = () => {
    if (!articles.length) return;
    setCurrent((prev) => (prev - 1 + articles.length) % articles.length);
  };

  useEffect(() => {
    if (!AUTO_PLAY || articles.length <= 1) return;

    const timer = setInterval(nextSlide, INTERVAL);
    return () => clearInterval(timer);
  }, [current, articles.length, nextSlide]);

  if (!articles.length) return null;

  return (
    <section className="relative w-full h-[60vh] overflow-hidden">
      <div className="relative w-full h-full">
        {articles.map((article, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="w-full h-full flex items-center justify-center">
              <Image
                id={article["heroImage"]}
                alt={article["heroTitle"]}
                styles="object-cover object-center w-full h-full"
              />
            </div>

            {article["heroTitle"] && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-black/50">
                <h2 className="text-white text-2xl md:text-4xl font-bold">
                  {article["subtitle"]}
                </h2>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <button
        onClick={prevSlide}
        className="absolute text-3xl font-bold left-4 md:left-6 top-1/2 -translate-y-1/2 text-white px-3 py-2 z-20"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute text-3xl font-bold right-4 md:right-6 top-1/2 -translate-y-1/2 text-white px-3 py-2 z-20"
      >
        ›
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {articles.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;