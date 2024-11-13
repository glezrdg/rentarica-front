import React, { useEffect } from "react";

const AirbnbTestimonials = () => {
  useEffect(() => {
    // Load Elfsight script
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="elfsight-app-64485587-8b92-4056-b97d-ef1938dbae53" data-elfsight-app-lazy></div>
  );
};

export default AirbnbTestimonials;
