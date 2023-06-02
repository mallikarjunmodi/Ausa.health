import React, { useState, useEffect } from 'react';

const TextSlider = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const handleSlideChange = (slideNumber) => {
    setActiveSlide(slideNumber);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const nextSlide = activeSlide === 5 ? 1 : activeSlide + 1;
      setActiveSlide(nextSlide);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [activeSlide]);


  return (
    <div className="flex flex-col items-center font-primary">
      <div className="relative flex gap-5">
      <div className="absolute w-full h-0.5 bg-black top-1/2"></div>
        <div
          className={`w-6 h-6 flex items-center justify-center rounded-full border-2 border-[#1D2121] cursor-pointer z-10 ${
            activeSlide === 1 ? 'bg-[#1D2121] text-white scale-125' : 'bg-white text-black'
          }`}
          onClick={() => handleSlideChange(1)}
        >
          1
        </div>
        <div
          className={`w-6 h-6 flex items-center justify-center rounded-full border-2 border-[#1D2121] cursor-pointer z-10 ${
            activeSlide === 2 ? 'bg-[#1D2121] text-white scale-125' : 'bg-white text-black'
          }`}
          onClick={() => handleSlideChange(2)}
        >
          2
        </div>
        <div
          className={`w-6 h-6 flex items-center justify-center rounded-full border-2 border-[#1D2121] cursor-pointer z-10 ${
            activeSlide === 3 ? 'bg-[#1D2121] text-white scale-125' : 'bg-white text-black'
          }`}
          onClick={() => handleSlideChange(3)}
        >
          3
        </div>
        <div
          className={`w-6 h-6 flex items-center justify-center rounded-full border-2 border-[#1D2121] cursor-pointer z-10 ${
            activeSlide === 4 ? 'bg-[#1D2121] text-white scale-125' : 'bg-white text-black'
          }`}
          onClick={() => handleSlideChange(4)}
        >
          4
        </div>
        <div
          className={`w-6 h-6 flex items-center justify-center rounded-full border-2 border-[#1D2121] cursor-pointer z-10 ${
            activeSlide === 5 ? 'bg-[#1D2121] text-white scale-125' : 'bg-white text-black'
          }`}
          onClick={() => handleSlideChange(5)}
        >
          5
        </div>
      </div>
      
      <div className="m-8 mt-4">
        <div
          className={`bg-white p-8 font-bold rounded-2xl drop-shadow-[0_31px_55px_rgba(22, 75, 217, 0.05)] ${
            activeSlide === 1 ? 'block' : 'hidden'
          }`}
        >
          Take your vitals using default test combination
        </div>
        <div
          className={`bg-white p-8 font-bold rounded-2xl drop-shadow-[0_31px_55px_rgba(22, 75, 217, 0.05)] ${
            activeSlide === 2 ? 'block' : 'hidden'
          }`}
        >
          Book an appointment with a doctor through the device.
        </div>
        <div
          className={`bg-white p-8 font-bold rounded-2xl drop-shadow-[0_31px_55px_rgba(22, 75, 217, 0.05)] ${
            activeSlide === 3 ? 'block' : 'hidden'
          }`}
        >
          Share your vitals taken previously or take a test during consultation.
        </div>
        <div
          className={`bg-white p-8 font-bold rounded-2xl drop-shadow-[0_31px_55px_rgba(22, 75, 217, 0.05)] ${
            activeSlide === 4 ? 'block' : 'hidden'
          }`}
        >
          Get an accurate diagnosis from the doctor.
        </div>
        <div
          className={`bg-white p-8 font-bold rounded-2xl drop-shadow-[0_31px_55px_rgba(22, 75, 217, 0.05)] ${
            activeSlide === 5 ? 'block' : 'hidden'
          }`}
        >
          All at the convenience of your home :)
        </div>
      </div>
    </div>
  );
};

export default TextSlider;
