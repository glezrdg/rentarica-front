"use client";

// COMPONENTS
import { Services } from "@/components/home";
import AboutUs from "@/components/home/AboutUs";
import Clients from "@/components/home/Testimonials/Clients";
import ContactUs from "@/components/home/ContactUs";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Proyects/Projects";
import Layout from "@/components/layout/Layout";
import AnuncioPaneles from "@/shared/components/AnuncioPaneles";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import AirbnbTestimonials from "@/components/home/AirbnbTestimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <Services />

      <AboutUs />
      <AirbnbTestimonials />
      <AnuncioPaneles />
      {/* <Projects /> */}
      <Clients />
    </>
  );
}
