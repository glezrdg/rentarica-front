import React from "react";
import Testimonial from "./components/Testimonial";
import testimonialjson from "../../../../public/assets/testimonial.json";
import AirbnbTestimonials from "../AirbnbTestimonial";

const Clients = () => {
  return (
    <section id="clients" className="border-t border-zinc-200 mt-20 pt-10 ">
      <div>
        {/* <Testimonial /> */}
        <AirbnbTestimonials />
      </div>
    </section>
  );
};

export default Clients;
