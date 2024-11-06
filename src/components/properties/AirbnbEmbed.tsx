// components/AirbnbEmbed.tsx
import { useEffect } from "react";

type AirbnbEmbedProps = {
  listingId: string;
};

const AirbnbEmbed = ({ listingId }: AirbnbEmbedProps) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.airbnb.com/embeddable/airbnb_jssdk";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="airbnb-embed-frame  w-[450px] h-[300px] mx-10"
      data-id={listingId}
      data-view="home"
      data-hide-price="true"
    >
      <a
        href={`https://www.airbnb.com/rooms/${listingId}?guests=1&adults=1&s=66&source=embed_widget`}
      >
        View On Airbnb
      </a>
    </div>
  );
};

export default AirbnbEmbed;
