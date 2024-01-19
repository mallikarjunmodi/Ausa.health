import React, { useState, useEffect } from 'react';

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = formatDateTime(currentTime);

  return <div>{formattedTime}</div>;
};

// Function to format the date and time
function formatDateTime(date) {
  const hours = formatTwoDigits(date.getHours() % 12 || 12);
  const minutes = formatTwoDigits(date.getMinutes());
  const amPm = date.getHours() >= 12 ? 'P.M.' : 'A.M.';
  const day = formatTwoDigits(date.getDate());
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return <div className='font-xs font-semibold text-white	font-manrope'>{hours}:{minutes} {amPm} | {month} {day}, {year}</div>;
}

// Helper function to ensure single-digit numbers are formatted with a leading zero
function formatTwoDigits(n) {
  return n < 10 ? '0' + n : n;
}

export default CurrentTime;
