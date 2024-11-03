import { useState } from "react";
import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaCircle,
} from "react-icons/fa";
import { TbCircleDot } from "react-icons/tb";
import testimonials from "../../../../../public/assets/testimonial.json";

type Item = {
  bgSrc: string;
  name: string;
  description: string;
};

type TestimonialProps = {
  items: Item[];
};
const Testimonial: React.FC = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [direction, setDirection] = useState<boolean>(false);

  const showNext = () => {
    setDirection(true);
    setImageIndex((index) =>
      index === testimonials.length - 1 ? 0 : index + 1
    );
  };

  const showPrev = () => {
    setDirection(false);
    setImageIndex((index) =>
      index === 0 ? testimonials.length - 1 : index - 1
    );
  };

  return (
    <div className="w-full h-[50vh] lg:h-[35vh]  flex items-center justify-center p-0 m-0 relative overflow-hidden">
      <div className="flex w-full h-full ">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className={`flex-shrink-0 flex-grow-0  flex ${
              direction ? "flex-row-reverse" : "flex-row"
            } items-center justify-center w-full h-full transition-transform duration-500`}
            style={{ transform: `translateX(${-100 * imageIndex}%)` }}
          >
            <img
              src={item.bgSrc}
              alt={item.name}
              className="h-[50vh] lg:h-[35vh] rounded-md absolute inset-0 w-full "
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 "></div>
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center  z-50 text-white text-center">
              <h2 className="text-xl lg:text-3xl font-semibold text-start">
                -{item.name}
              </h2>
              <p className="mt-5 text-sm lg:text-lg w-[80%]">
                "{item.description}"
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Navigation Buttons */}
      <button
        aria-label="showPrevService"
        className="absolute top-[50%] left-0 lg:left-10  text-4xl hover:scale-105 transition-all"
        onClick={showPrev}
      >
        <FaArrowCircleLeft />
      </button>
      <button
        aria-label="showNextService"
        className="absolute top-[50%] right-0 lg:right-10  text-4xl hover:scale-105 transition-all"
        onClick={showNext}
      >
        <FaArrowCircleRight />
      </button>
      {/* Dots Navigation */}
      <div className="absolute flex bottom-5">
        {testimonials.map((_, index) => (
          <button
            aria-label="selectService"
            key={index}
            className="mx-2 rounded-full text-2xl"
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? <TbCircleDot /> : <FaCircle />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
