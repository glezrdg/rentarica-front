import Image from "next/image";

const AnuncioFeria = () => {
  return (
    <div className="w-full flex justify-center my-8">
      <a
        href="https://rentarica.trafico.do/"
        target="_blank"
        className="relative overflow-hidden rounded-lg  transition-shadow duration-300 block"
        style={{ maxWidth: "1000px", width: "100%" }}
        rel="noreferrer"
      >
        <div className="relative" style={{ height: "350px", width: "100%" }}>
          <Image
            className="rounded-lg shadow-md"
            src="/assets/home_images/Banner.png"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 800px, 800px"
            style={{ objectFit: "contain", objectPosition: "center" }}
            alt="Rentarica Real Estate Summit - New York & New Jersey"
            priority
          />
        </div>
      </a>
    </div>
  );
};

export default AnuncioFeria;
