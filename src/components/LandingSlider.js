import React, { useState, useEffect } from 'react';
import icon1 from '../assets/icon1.svg';
import icon2 from '../assets/icon2.svg';
import icon3 from '../assets/icon3.svg';
import icon4 from '../assets/icon4.svg';
import icon5 from '../assets/icon5.svg';


const LandingSlider = () => {
  const [activeIcon, setActiveIcon] = useState(1);

  const handleIconClick = (iconNumber) => {
    setActiveIcon(iconNumber);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const nextIcon = activeIcon === 5 ? 1 : activeIcon + 1;
      setActiveIcon(nextIcon);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [activeIcon]);

  return (
    <div className="flex flex-col items-center">
      <div className="mt-6">
        <div className="bg-[#154AD8] text-white px-10 py-3 font-primary text-sm font-medium rounded-xl drop-shadow-[0_31px_55px_rgba(22, 75, 217, 0.05)]">
          {activeIcon === 1 && <span>Check you body temperature</span>}
          {activeIcon === 2 && <span>Capture your body sounds</span>}
          {activeIcon === 3 && <span>Get your blood pressure</span>}
          {activeIcon === 4 && <span>Get your blood glucose levels</span>}
          {activeIcon === 5 && <span>Get a 12 lead ECG</span>}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-10 gap-8">
        <div className="flex gap-7 sm:gap-44">
        <div
          className={`flex flex-col items-center cursor-pointer ${
            activeIcon === 1 ? 'opacity-100 scale-105' : 'opacity-50'
          }`}
          onClick={() => handleIconClick(1)}
        >
          <img src={icon1} className="w-10 h-10 sm:w-14 sm:h-14" />
        </div>
        
        <div
          className={`flex flex-col items-center cursor-pointer ${
            activeIcon === 2 ? 'opacity-100 scale-105' : 'opacity-50'
          }`}
          onClick={() => handleIconClick(2)}
        >
          <img src={icon2} className="w-10 h-10 sm:w-14 sm:h-14" />
        </div>

        <div
          className={`flex flex-col items-center cursor-pointer ${
            activeIcon === 3 ? 'opacity-100 scale-105' : 'opacity-50'
          }`}
          onClick={() => handleIconClick(3)}
        >
          <img src={icon3} className="w-10 h-10 sm:w-14 sm:h-14" />
        </div>

        <div
          className={`flex flex-col items-center cursor-pointer ${
            activeIcon === 4 ? 'opacity-100 scale-105' : 'opacity-50'
          }`}
          onClick={() => handleIconClick(4)}
        >
          <img src={icon4} className="w-10 h-10 sm:w-14 sm:h-14" />
        </div>

        <div
          className={`flex flex-col items-center cursor-pointer ${
            activeIcon === 5 ? 'opacity-100 scale-105' : 'opacity-50'
          }`}
          onClick={() => handleIconClick(5)}
        >
          <img src={icon5} className="w-10 h-10 sm:w-14 sm:h-14" />
        </div>
        </div>
      
        <div className='flex items-center gap-4 mb-12'>
          <div onClick={() => handleIconClick(1)} className={`w-2 h-2 bg-blue-600 rounded-full mt-4 sm:mt-10 sm:mb-4 ${
            activeIcon === 1 ? 'opacity-100 scale-150' : 'opacity-40'
          }`}></div>
          <div onClick={() => handleIconClick(2)} className={`w-2 h-2 bg-blue-600 rounded-full mt-4 sm:mt-10 sm:mb-4 ${
            activeIcon === 2 ? 'opacity-100 scale-150' : 'opacity-40'
          }`}></div>
          <div onClick={() => handleIconClick(3)} className={`w-2 h-2 bg-blue-600 rounded-full mt-4 sm:mt-10 sm:mb-4 ${
            activeIcon === 3 ? 'opacity-100 scale-150' : 'opacity-40'
          }`}></div>
          <div onClick={() => handleIconClick(4)} className={`w-2 h-2 bg-blue-600 rounded-full mt-4 sm:mt-10 sm:mb-4 ${
            activeIcon === 4 ? 'opacity-100 scale-150' : 'opacity-40'
          }`}></div>
          <div onClick={() => handleIconClick(5)} className={`w-2 h-2 bg-blue-600 rounded-full mt-4 sm:mt-10 sm:mb-4 ${
            activeIcon === 5 ? 'opacity-100 scale-150' : 'opacity-40'
          }`}></div>

        </div>
      </div>

    </div>
  );
};

export default LandingSlider;
