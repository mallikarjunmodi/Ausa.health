import React, { useState } from 'react';


export default function About() {
  const [isChecked0, setIsChecked0] = useState(false);

    return ( <div className="w-full h-auto flex flex-col relative items-start ">
        <div className="flex flex-col items-start w-[90%] h-auto mx-auto bg-[#FAFAFA] rounded-[10px] p-2 mb-4">
      {/* <div  className="flex flex-col w-full pl-4 pr-4 pt-2 pb-2"> */}
      <input id='click' type="checkbox"  class="absolute opacity-0 peer" onChange={(e) => setIsChecked0(e.target.checked)}/>
        <label for='click' className="cursor-pointer w-full flex tracking-[1px] flex-col justify-start peer-checked:mb-2 ">
          <span for="click" className="text-[#3F4856]  text-[20px] font-manrope  ml-4 mt-2 ">
            Aleena Sony
          </span>
        
        <div className={`absolute top-6 right-12 transform transition-transform duration-300 ease-in-out ${isChecked0 ? 'rotate-180' : 'rotate-0'}`}>
  <svg width="15" height="10" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.293097 5.77247L6.0013 0L11.7071 5.77263C12.0972 6.16736 12.0977 6.80784 11.7081 7.20318C11.3485 7.5681 10.7823 7.59659 10.3904 7.28835L10.2963 7.20427L5.99982 2.8576L1.70351 7.20443C1.34328 7.56872 0.776987 7.5962 0.385663 7.28726L0.291697 7.20301C-0.0678189 6.83801 -0.0949399 6.26419 0.209957 5.86768L0.293097 5.77247Z" fill="#004575"/>
  </svg>
</div>  
</label>

        <div className="max-h-full w-[100%] overflow-hidden  peer-checked:max-h-0 flex flex-col ">
        <span for="click" className="text-[#B6B6B6]  text-[15px] font-manrope leading-6 mt-1 ml-4 mb-1">
            Female
          </span>
        <div className="flex w-[100%] ">
          <div className="flex flex-col ml-4 w-[20%] items-left ">
            <span className="text-[#B6B6B6] text-[12px] font-manrope leading-6 mt-1 ">
              Age
            </span>
            <span className="text-[#252525]  text-[16px] font-manrope leading-8 mt-[-2.5]">
              24 yrs
            </span>
          </div>
          <div className="flex flex-col w-[33%] items-center">
            <span className="text-[#B6B6B6] text-[12px] font-manrope leading-6  mt-1">
              Height
            </span>
            <span className="text-[#252525] text-[16px] font-manrope leading-8 mt-[-2.5]">
              178 cm
            </span>
          </div>
          <div className="flex flex-col w-[33%] items-center">
            <span className="text-[#B5B5B5] text-[12px] font-manrope leading-6  mt-1">
              Weight
            </span>
            <span className="text-[#252525] text-[16px] font-manrope leading-8 mt-[-2.5]">
              82kg
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start">
          <span className="text-[#B6B6B6] text-[12px] font-manrope  leading-6 ml-4  mt-3">
            Symptoms
          </span>
          <span className="text-[#252525] text-[16px] font-manrope leading-6 ml-4 mr-4 mt-[-1.25]">
            headache, nausea, throat pain
          </span>
        </div>
        <div className="flex flex-col justify-start items-start">
          <span className="text-[#B6B6B6] text-[12px] font-manrope leading-6 ml-4  mt-3">
            Underlying Condition
          </span>
          <span className="text-[#252525]  text-[16px] font-manrope  leading-6 ml-4 mt-[-1.25] mb-5">
            Hypertension Stage 1
          </span>
          </div>
          <div className="justify-center  w-[100%]">
          <div className="mx-4 border border-gray-300"></div>
          <button className="my-4 justify-center font-bold text-[#2574FF] w-[100%]">View patient history</button>

        </div>

        </div>
      </div>
    </div>
  // </div>
  )}