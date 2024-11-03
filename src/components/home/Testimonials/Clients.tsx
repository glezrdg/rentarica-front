import React from "react";
import Testimonial from "./components/Testimonial";
import testimonialjson from "../../../../public/assets/testimonial.json";

const Clients = () => {
  return (
    <section id="clients" className="overflow-hidden  ">
      <div>
        <Testimonial />
      </div>
    </section>
  );
};

export default Clients;
