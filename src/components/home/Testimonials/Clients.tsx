"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "./components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { TbBrandAirbnb } from "react-icons/tb";

// Sample testimonial data - replace with your actual data
const testimonials = [
  {
    id: 1,
    name: "Nathan",
    date: "January 27",
    rating: 5,
    text: "Nicely located within a mile walk to the beach and back patio was right on",
    image: "/placeholder.svg?height=60&width=60",
    airbnbLink: "https://es.airbnb.com/rooms/816826257066245108",
  },
  {
    id: 2,
    name: "Nadav",
    date: "January 20",
    rating: 5,
    text: "Everything was amazing. Very communicative and helpful. Thank you for",
    image: "/placeholder.svg?height=60&width=60",
    airbnbLink: "https://es.airbnb.com/rooms/816826257066245108",
  },
  {
    id: 3,
    name: "Cheree",
    date: "December 25, 2024",
    rating: 5,
    text: "We loved the location and everything about the place. It was a very",
    image: "/placeholder.svg?height=60&width=60",
    airbnbLink: "https://es.airbnb.com/rooms/816826257066245108",
  },
  {
    id: 4,
    name: "Juliet",
    date: "December 10, 2024",
    rating: 5,
    text: "Loved the kayaking! Thank you",
    image: "/placeholder.svg?height=60&width=60",
    airbnbLink: "https://es.airbnb.com/rooms/816826257066245108",
  },
  {
    id: 5,
    name: "Monica",
    date: "December 4, 2024",
    rating: 5,
    text: "Muchas gracias tofo muy bueno",
    image: "/placeholder.svg?height=60&width=60",
    airbnbLink: "https://es.airbnb.com/rooms/816826257066245108",
  },
];

interface TestimonialsProps {
  airbnbReviewLink?: string;
  overallRating?: number;
  totalReviews?: number;
}

export default function AirbnbTestimonials({
  airbnbReviewLink = "https://es.airbnb.com/users/show/486228112",
  overallRating = 4.8,
  totalReviews = 795,
}: TestimonialsProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update visible items based on container width
  useEffect(() => {
    const updateVisibleItems = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.offsetWidth;

      if (width < 640) {
        setVisibleItems(1);
      } else if (width < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  const totalPages = Math.ceil(testimonials.length / visibleItems);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  const visibleTestimonials = testimonials.slice(
    currentPage * visibleItems,
    currentPage * visibleItems + visibleItems
  );

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">
        What our customers say
      </h2>

      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <div className="flex items-center mb-4 sm:mb-0">
            <div className="mr-2">
              <div className="text-[#FF5A5F]">
                <TbBrandAirbnb className=" text-3xl mr-2" />{" "}
              </div>
            </div>
            <div>
              <div className="font-semibold text-lg text-[#FF5A5F]">
                Airbnb Reviews
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-bold mr-2">{overallRating}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(overallRating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-500 ml-2">({totalReviews})</span>
              </div>
            </div>
          </div>

          <Button className="bg-[#0078FF] hover:bg-blue-600 text-white" asChild>
            <Link
              href={airbnbReviewLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Review us on Airbnb
            </Link>
          </Button>
        </div>
      </div>

      <div className="relative" ref={containerRef}>
        <div className="flex space-x-4 overflow-hidden">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-lg p-6 flex-shrink-0"
              style={{
                width: `calc(${100 / visibleItems}% - ${
                  ((visibleItems - 1) * 16) / visibleItems
                }px)`,
              }}
            >
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12 mr-3 border">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="mb-2">{testimonial.text}</p>
              <button className="text-gray-500 text-sm">Read more</button>

              <div className="mt-4 flex items-center">
                <Link
                  href={testimonial.airbnbLink}
                  className="flex items-center text-sm text-gray-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mr-1">Posted on</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    className="text-[#FF5A5F] fill-current mr-1"
                  >
                    <path d="M22.5 10.8H15.2c-.2-1.4.9-2.7 2.3-3.8l1-.8c.4-.3.6-.7.6-1.3 0-1.8-1.6-2.7-3.2-2-.8.4-1.3 1.3-1.3 2.3 0 .5-.5.8-1 .7l-.6-.2c-.5-.2-.8-.7-.7-1.2.4-2.1 2.2-3.6 4.3-3.6 2.5 0 4.6 2 4.6 4.5 0 .9-.3 1.7-.8 2.4-.3.3-.6.7-1 1 .7.5 1.9 1.2 2.1 1.8.1.4-.2.8-.6.8zm-10.5 0H4.8c-.2-1.4.9-2.7 2.3-3.8l1-.8c.4-.3.6-.7.6-1.3 0-1.8-1.6-2.7-3.2-2-.8.4-1.3 1.3-1.3 2.3 0 .5-.5.8-1 .7l-.6-.2c-.5-.2-.8-.7-.7-1.2.4-2.1 2.2-3.6 4.3-3.6 2.5 0 4.6 2 4.6 4.5 0 .9-.3 1.7-.8 2.4-.3.3-.6.7-1 1 .7.5 1.9 1.2 2.1 1.8.1.4-.2.8-.6.8z" />
                  </svg>
                  <span className="text-[#FF5A5F]">Airbnb</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevPage}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
          aria-label="Previous testimonials"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={nextPage}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
          aria-label="Next testimonials"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i)}
            className={`h-2 rounded-full transition-all ${
              i === currentPage ? "w-4 bg-gray-800" : "w-2 bg-gray-300"
            }`}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
