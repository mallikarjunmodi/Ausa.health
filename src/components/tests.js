

import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';


export default function Tests() {
  // State to keep track of selected tests
  const [selectedTests, setSelectedTests] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  
    // Connect to the socket server
    const newSocket = io('https://ausa-tele-socket-server-production.up.railway.app/');
    socket.on('connect', () => {
      console.log('Connected to the server');
      // Send a message to the server upon connection
      socket.emit('message', 'Hello Server!');
    });

    // Disconnect on cleanup
    socket.on('disconnect', () => {
      console.log('Disconnected from the server');
    });

    socket.on('message', (message) => {
      console.log('Received message:', message);
    });


  // Function to handle clicking on a test button
  const handleTestClick = (test) => {
    setSelectedTests((prevSelectedTests) => {
      // Check if the test is already selected
      if (prevSelectedTests.includes(test)) {
        // If it is, remove it from the selection
        return prevSelectedTests.filter((t) => t !== test);
      } else {
        // If it's not selected, add it to the selection
        return [...prevSelectedTests, test];
      }
    });
  };

  const sendTests = () => {
    console.log('Selected tests to send:', selectedTests);
      socket.emit('send-tests', selectedTests);
  

    // Show popup
    setShowPopup(true);

    // Hide popup after 1 second
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
  };

  return (
    <div className="w-full h-auto flex flex-col relative items-start">
          {showPopup && (
        <div className="absolute top-12 right-2 bg-blue-600 text-white p-2 rounded">
          Tests Sent
        </div>
      )}
      <div className="flex flex-col items-start w-[90%] h-auto mx-auto bg-[#FAFAFA] rounded-[10px] p-2 mb-4">
        <input id='click2' type="checkbox" className="absolute opacity-0 peer" onChange={(e) => setIsChecked(e.target.checked)} />
        <label htmlFor='click2' className="cursor-pointer w-full flex tracking-[1px] flex-col justify-start peer-checked:mb-2 mb-2 ">
          <span className="text-[#9B9FA6]  flex-wrap w-[85%] gap-2 font-[20px] font-manrope leading-6 ml-4 mt-2 ">
          {isChecked ? "What tests do you want your patient to take?" : "Request Tests"}
          </span>
          
    

          {/* Arrow icon here */}
          <div className={`absolute top-6 right-12 transform transition-transform duration-300 ease-in-out ${isChecked ? 'rotate-0' : 'rotate-180'}`}>
          <svg width="15" height="10" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.293097 5.77247L6.0013 0L11.7071 5.77263C12.0972 6.16736 12.0977 6.80784 11.7081 7.20318C11.3485 7.5681 10.7823 7.59659 10.3904 7.28835L10.2963 7.20427L5.99982 2.8576L1.70351 7.20443C1.34328 7.56872 0.776987 7.5962 0.385663 7.28726L0.291697 7.20301C-0.0678189 6.83801 -0.0949399 6.26419 0.209957 5.86768L0.293097 5.77247Z" fill="#004575"/>
  </svg>
          </div>
        </label>
        <div className="flex w-full max-h-0 overflow-hidden  peer-checked:max-h-full flex-col ">
      {/* Render selected tests here */}
          <div className={`flex mb-2 mt-1 justify-center flex-wrap gap-2 ${selectedTests.length > 0 ? 'mb-4' : ''}`}>
            {selectedTests.map((test) => (
              <div key={test} className="flex items-center justify-between bg-[#20C389] rounded-full px-3 py-1 ">
                <span className="text-[#FAFAFA] font-bold text-[12px]">{test}</span>
                <button onClick={() => handleTestClick(test)} className="text-[#FAFAFA] ml-2">✕</button>
              </div>
            ))}
          </div>
        {/* Border line */}
        <div className="justify-center  w-[100%]">
          <div className="mx-4 border border-gray-300"></div>
        </div>

        {/* Test buttons */}
          <div className="flex flex-col w-full">
            <div className="text-[#B6B6B6] text-[12px] font-manrope ml-4 my-4">Tests available</div>
            <div className="flex justify-center flex-wrap w-full gap-2 mb-2">
              {['Stethoscope', 'ENT Camera', 'ECG', 'SpO2', 'Blood Glucose', 'Blood Pressure', 'Body temperature'].map((test) => (
                <button
                  key={test}
                  onClick={() => handleTestClick(test)}
                  className={`text-[#189066] font-bold text-[12px] bg-green-200 rounded-full px-4 py-2 ${selectedTests.includes(test) ? 'bg-green-400' : ''}`}
                >
                  {test}
                </button>
              ))}
            </div>
          </div>
          <button onClick={sendTests} className="text-white bg-blue-600 font-[20px] rounded-[8px] px-8 py-2 mx-2 mt-4 mb-2">Request Tests</button>
        </div>
      </div>
    </div>
  );
}

