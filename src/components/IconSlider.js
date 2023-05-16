import React, { useState } from 'react';
import icon6 from '../assets/icon6.svg';
import icon7 from '../assets/icon7.svg';
import icon8 from '../assets/icon8.svg';
import icon9 from '../assets/icon9.svg';


const IconTextSlider = () => {
  const [activeIcon, setActiveIcon] = useState(1);

  const handleIconClick = (iconNumber) => {
    setActiveIcon(iconNumber);
  };

  return (
    <div className="flex flex-col items-start m-6">
      <div className="flex gap-10">
        <div
          className={`flex flex-col items-center cursor-pointer ${
            activeIcon === 1 ? 'opacity-100 scale-125' : 'opacity-50'
          }`}
          onClick={() => handleIconClick(1)}
        >
          <img src={icon6} className="w-10 h-10" />
          <div className="w-2 h-2 bg-white rounded-full mt-4"></div>
        </div>
        
        <div
          className={`flex flex-col items-center cursor-pointer ${
            activeIcon === 2 ? 'opacity-100 scale-125' : 'opacity-50'
          }`}
          onClick={() => handleIconClick(2)}
        >
          <img src={icon7} className="w-10 h-10" />
          <div className="w-2 h-2 bg-white rounded-full mt-4"></div>
        </div>
        <div
          className={`flex flex-col items-center cursor-pointer ${
            activeIcon === 3 ? 'opacity-100 scale-125' : 'opacity-50'
          }`}
          onClick={() => handleIconClick(3)}
        >
          <img src={icon8} className="w-10 h-10" />
          <div className="w-2 h-2 bg-white rounded-full mt-4"></div>
        </div>
        <div
          className={`flex flex-col items-center mt-2 cursor-pointer ${
            activeIcon === 4 ? 'opacity-100 scale-125' : 'opacity-50'
          }`}
          onClick={() => handleIconClick(4)}
        >
          <img src={icon9} className="w-7 h-7" />
          <div className="w-2 h-2 bg-white rounded-full mt-5"></div>
        </div>
      </div>



      <div className="mt-8 font-montserrat">
        <div
          className={`bg-[#3d62c5] text-white p-8 font-bold rounded-2xl drop-shadow-[0_31px_55px_rgba(22, 75, 217, 0.05)] ${
            activeIcon === 1 ? 'block' : 'hidden'
          }`}
        >
          Get preliminary diagnisis and contact a medical professional.
        </div>

        <div
          className={`bg-[#3d62c5] text-white p-8 font-bold rounded-2xl drop-shadow-[0_31px_55px_rgba(22, 75, 217, 0.05)] ${
            activeIcon === 2 ? 'block' : 'hidden'
          }`}
        >
          See vital history, and track differences
        </div>
        <div
          className={`bg-[#3d62c5] text-white p-8 font-bold rounded-2xl drop-shadow-[0_31px_55px_rgba(22, 75, 217, 0.05)] ${
            activeIcon === 3 ? 'block' : 'hidden'
          }`}
        >
          A GSM module to solve connectivity issue
        </div>
        <div
          className={`bg-[#3d62c5] text-white p-8 px-[3rem] font-bold rounded-2xl drop-shadow-[0_31px_55px_rgba(22, 75, 217, 0.05)] ${
            activeIcon === 4 ? 'block' : 'hidden'
          }`}
        >
          Save money while doing tests
        </div>
      </div>
    </div>
  );
};

export default IconTextSlider;
