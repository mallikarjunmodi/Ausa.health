
export default function Tests() {
    return (
        <div className="w-full h-auto flex flex-col relative items-start">
        <div className="flex flex-col items-start w-[90%] h-auto mx-auto bg-gray-100 rounded-[15px] p-2 mb-4">

        <input id='click2' type="checkbox"  class="absolute opacity-0 peer"/>
        <label for='click2' className="cursor-pointer w-full flex tracking-[1px] flex-col justify-start peer-checked:mb-2 mb-2 ">
          <span for="click2" className="text-[#3F4856] text-xl font-normal leading-6 ml-4 mt-2 ">
           Request Tests
          </span>
          </label>
     
          <div className="absolute top-6 right-12 transform transition-transform duration-300 ease-in-out rotate-180 peer-checked:rotate-0">
  <svg width="15" height="10" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.293097 5.77247L6.0013 0L11.7071 5.77263C12.0972 6.16736 12.0977 6.80784 11.7081 7.20318C11.3485 7.5681 10.7823 7.59659 10.3904 7.28835L10.2963 7.20427L5.99982 2.8576L1.70351 7.20443C1.34328 7.56872 0.776987 7.5962 0.385663 7.28726L0.291697 7.20301C-0.0678189 6.83801 -0.0949399 6.26419 0.209957 5.86768L0.293097 5.77247Z" fill="#004575"/>
  </svg>
</div>   

          <div className="flex w-full max-h-0 overflow-hidden  peer-checked:max-h-full flex-col ">

          <div className="border border-gray-300 w-full mb-4"></div>
          <div className="flex flex-col w-full">
            <div className="text-gray-400 text-sm ml-4 mb-2">Tests available</div>
            <div className="flex justify-center mb-2">
              <button className="text-green-600 text-xs bg-green-200 rounded-full px-4 py-2">Stethoscope</button>
              <button className="text-green-600 text-xs bg-green-200 rounded-full px-4 py-2 ml-4">ENT Camera</button>
            </div>
            <div className="flex justify-center mb-2">
              <button className="text-green-600 text-xs bg-green-200 rounded-full px-4 py-2">ECG</button>
              <button className="text-green-600 text-xs bg-green-200 rounded-full px-4 py-2 ml-4">SpO2</button>
              <button className="text-green-600 text-xs bg-green-200 rounded-full px-4 py-2 ml-4">Blood Glucose</button>
            </div>
            <div className="flex justify-center mb-2">
              <button className="text-green-600 text-xs bg-green-200 rounded-full px-4 py-2">Blood Pressure</button>
              <button className="text-green-600 text-xs bg-green-200 rounded-full px-4 py-2 ml-4">Body temperature</button>
            </div>
          </div>
          <button className="text-white bg-blue-600 rounded-full px-8 py-2 ml-auto mt-4 mb-2">Send</button>
        </div>
        </div>
        </div>
    
    )
}
