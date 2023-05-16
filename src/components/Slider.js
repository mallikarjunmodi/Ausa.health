import React, { useState, useEffect } from 'react';
import {IoIosArrowDropleftCircle} from 'react-icons/io';
import {IoIosArrowDroprightCircle} from 'react-icons/io';


const Slider = ({ sentences }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === sentences.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(timer);
  }, [sentences.length]);

  const goToPrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? sentences.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === sentences.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex items-center justify-center h-full">
      
      <IoIosArrowDropleftCircle className="text-[#496cc9] mx-2 h-8 w-8 hover:cursor-pointer" onClick={goToPrev}/>

      {/* <p className="text-lg  font-medium">{sentences[activeIndex]}</p>
      <div className="bg-white opacity-25 p-4 rounded-[20px] shadow w-[28rem] h-[6rem]">
      </div> */}
        <div className="flex p-5 max-w-md  h-[6rem] bg-[#496cc9] rounded-[14px]  hover:cursor-default">
            <p className="flex justify-center items-center text-white text-lg font-semibold font-montserrat break-normal">{sentences[activeIndex]}</p>

        </div>
      
      <IoIosArrowDroprightCircle className="text-[#496cc9] mx-2 h-8 w-8 hover:cursor-pointer" onClick={goToNext}/>

    </div>
  );
};

export default Slider;
