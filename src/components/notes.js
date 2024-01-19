export default function Notes() {
    return (
        <div className="w-full h-auto flex flex-col relative items-start">
        <div className="flex flex-col items-start w-[90%] mx-auto bg-[#FAFAFA] rounded-[10px] p-2">
        <input id='click3' type="checkbox"  class="absolute opacity-0 peer"/>
        <label for='click3' className="cursor-pointer w-full flex tracking-[1px] flex-col justify-start peer-checked:mb-2 mb-2 ">
          <span for="click3" className="text-[#9B9FA6] font-[20px] w-full font-manrope leading-6 ml-4 mt-2 ">
           Diagonosis
          </span>
          </label>
     
          <div className="absolute top-6 right-12 transform transition-transform duration-300 ease-in-out rotate-180 peer-checked:rotate-0">
  <svg width="15" height="10" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.293097 5.77247L6.0013 0L11.7071 5.77263C12.0972 6.16736 12.0977 6.80784 11.7081 7.20318C11.3485 7.5681 10.7823 7.59659 10.3904 7.28835L10.2963 7.20427L5.99982 2.8576L1.70351 7.20443C1.34328 7.56872 0.776987 7.5962 0.385663 7.28726L0.291697 7.20301C-0.0678189 6.83801 -0.0949399 6.26419 0.209957 5.86768L0.293097 5.77247Z" fill="#004575"/>
  </svg>
</div>   
          
          <div className="flex flex-col w-full max-h-0 overflow-hidden peer-checked:max-h-full ">

          <div className="flex flex-col items-center bg-[] w-full pl-4 pr-4">
            <textarea
              placeholder=" notes (optional)"
              className=" w-[100%] h-40 p-2 border border-gray-400 mb-4 rounded-[5px] "
            ></textarea>
          </div>
        </div>
        </div>
      </div>
    )
}