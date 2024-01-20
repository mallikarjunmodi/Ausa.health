// pages/DoctorDashboard.js
import React from 'react';
// import { useRouter } from 'next/navigation'
import {useNavigate} from "react-router-dom";
import  { useState, useEffect } from 'react';
import CurrentTime from '../components/currentTime'
import { format, parse , isWithinInterval, addMinutes  } from 'date-fns';
import withAuth from '../components/withAuth';
import { db } from '../db.js'; // Adjust the path as needed
import { doc, getDoc } from 'firebase/firestore';


const appointments = [
    {
        id: 1,
        patientName: "John Doe",
        time: "9:00 AM",
        date: "2024-01-06",
        symptoms: "Headache and fever",
        additionalNotes: "Patient reports experiencing symptoms for two days.",
        status: "Scheduled"
      },
      {
        id: 2,
        patientName: "Jane Smith",
        time: "10:30 AM",
        date: "2024-01-06",
        symptoms: "Cough and sore throat",
        additionalNotes: "Has a history of seasonal allergies.",
        status: "Scheduled"
      },
      {
        id: 3,
        patientName: "Alice Johnson",
        time: "1:00 PM",
        date: "2024-01-06",
        symptoms: "Shortness of breath",
        additionalNotes: "Patient has a known history of asthma.",
        status: "Scheduled"
      },
      // Additional appointments... 
     ];

// Welcome Box Component
const WelcomeBox = ({ doctor }) => {
  return (
    <div className="flex h-[211px] w-[full] bg-white shadow rounded-[10px] p-7  font-manrope">
        <div>
          <h2 className="text-[32px] font-semibold text-[#1C274C]">Welcome,</h2>
          <h3 className="text-[32px] font-semibold text-[#1C274C]">{doctor.name}</h3>
          <p className="text-[16px] mt-[8px] font-normal text-[#1C274C]">{doctor.specialty} • {doctor.experience} years practice</p>
          <p className="text-[14px]  mt-[8px] font-normal text-[#6A6F86]">{doctor.hospital}</p>
        </div>
      {/* ... Additional welcome info ... */}
    </div>
  );
};

// Consultation Queue Item Component

const ConsultationQueueItem = ({ appointment, isExpanded, onClick }) => {
    // const router = useRouter()
    const navigate = useNavigate();



    const dateTime = parse(`${appointment.date} ${appointment.time}`, 'yyyy-MM-dd h:mm a', new Date());
    // Format the Date object into the desired string format
    const formattedDateTime = format(dateTime, "hh:mm a, MMMM dd, yyyy");
    const appointmentDateTime = parse(`${appointment.date} ${appointment.time}`, 'yyyy-MM-dd h:mm a', new Date());

    const now = new Date();
    const thirtyMinutesBeforeAppointment = addMinutes(appointmentDateTime, -30);
    const isJoinEnabled = isWithinInterval(now, { start: thirtyMinutesBeforeAppointment, end: appointmentDateTime });

    return (
      <div className="relative bg-white shadow rounded-[16px] mb-[8px] font-manrope" onClick={onClick}>
        <div className="p-4">
        <div className=" top-10 left-6 text-[12px] text-[#6A6F86]">
        Patient
      </div>
      <div className='flex flex-row'>
      <b className="text-base leading-[24px] text-[#1C274C]">
      {appointment.patientName}
            </b>
            <div className='relative left-[25px] '>
            <svg width="1" height="24" viewBox="0 0 1 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="24" stroke="#E6E8F7"/>
</svg>
</div>
            <button className="relative left-[41px] cursor-pointer [border:none] p-0 bg-[transparent] ">
        <b className="  text-xs font-manrope text-[#2574ff] text-right">
          View patient medical record
        </b>
        <div className="absolute top-[0px] left-[166px] w-6 h-6">
          <div className="absolute top-[0px] left-[0px] w-6 h-6">
            <div className="absolute top-[0px] left-[0px] w-6 h-6" />

            <svg               className="relative pt-[5px] "
width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.739 6.77148H7.21252V5.27148H18.2954V16.3543H16.7954V7.83645L6.55285 18.079L5.49219 17.0183L15.739 6.77148Z" fill="#2574FF"/>
</svg>

          </div>
        </div>
      </button>
            </div>
          {/* <h4 className="text-md font-semibold text-gray-700">{appointment.patientName}</h4> */}
        <div className='relative flex flex-row pt-[10px] pb-[8px]'>
          <div className="relative  text-[12px] text-[#6A6F86]">
        Appointment scheduled for
      </div>
          <p className=" relative text-[12px] left-[11px] text-[#1C274C]  font-bold">{formattedDateTime}</p>
          </div>
          {isExpanded && (
            <div>
                <div className=' relative flex flex-col w-[100%] bg-[#F9F8F6] rounded-[8px] p-3'>
              <p className="relative  text-[12px] text-[#6A6F86]">Symptoms</p>
              <p className="relative text-sm font-normal w-[90%] pt-[8px] pb-[0px] text-[14px] text-[#1C274C]">{appointment.symptoms}</p>

              </div>
              <div className='relative w-full flex flex-row pb-[5px]  pt-[16px]'>
                <div className='relative flex flex-row pl-[6px] pt-[8px]'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0717 22.5286H2.8234C2.3706 22.5286 2 22.1582 2 21.7052C2 21.2524 2.37042 20.8818 2.8234 20.8818H14.0717C14.5245 20.8818 14.8951 21.2523 14.8951 21.7052C14.8951 22.158 14.5245 22.5286 14.0717 22.5286Z" fill="#2574FF"/>
<path d="M8.44181 17.11C7.87055 17.11 7.40234 16.647 7.40234 16.0706V15.9986L7.71623 11.4807C7.73166 11.2851 7.81404 11.0949 7.95294 10.9558L16.078 2.84125C17.2049 1.71958 19.0317 1.71958 20.1585 2.84125L21.6764 4.35917C22.7981 5.48602 22.7981 7.31282 21.6764 8.43967L13.5569 16.5592C13.418 16.6981 13.2276 16.7857 13.0319 16.796L8.51405 17.1098H8.44208L8.44181 17.11ZM9.34239 11.9079L9.09545 15.4172L12.6047 15.1702L20.5033 7.26657C20.987 6.78293 20.987 6.00079 20.5033 5.51714L18.9955 4.00928C18.5118 3.52564 17.7297 3.52564 17.246 4.00928L9.34239 11.9079Z" fill="#2574FF"/>
<path d="M19.9946 9.77777C19.7785 9.77777 19.5675 9.69038 19.4132 9.53586L14.9827 5.10554C14.6481 4.79686 14.6225 4.27714 14.9312 3.94262C15.2398 3.60811 15.7596 3.58244 16.0941 3.89112C16.1147 3.90655 16.1301 3.92719 16.1456 3.94262L20.5761 8.37312C20.8952 8.69724 20.8952 9.21696 20.5761 9.53604C20.4216 9.69038 20.2107 9.77777 19.9946 9.77777Z" fill="#2574FF"/></svg>
<svg className='mt-[5px] mx-[16px]' width="1" height="14" viewBox="0 0 1 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<line opacity="0.2" x1="1" y1="4.37114e-08" x2="0.999999" y2="14" stroke="#000001" stroke-width="2"/>
</svg>

<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.96667 20C6.91 20 6.79667 20 6.74 19.9444C6.51333 19.8333 6.4 19.6667 6.4 19.4444V16.1111H3.56667C3.22667 16.1111 3 15.8889 3 15.5556V5.55556C3 5.22222 3.22667 5 3.56667 5H19.4333C19.7733 5 20 5.22222 20 5.55556V15.5556C20 15.8889 19.7733 16.1111 19.4333 16.1111H11.7267L7.36333 19.8889C7.25 19.9444 7.08 20 6.96667 20ZM4.13333 15H6.96667C7.30667 15 7.53333 15.2222 7.53333 15.5556V18.2222L11.1033 15.1667C11.2167 15.0556 11.33 15.0556 11.5 15.0556H18.8667V6.11111H4.13333V15Z" fill="#2574FF" stroke="#2574FF" stroke-width="0.5"/>
</svg>
                </div>
                <div className='flex relative w-full'>
            <button  onClick={() => navigate('/tele/consultation')} className={`absolute inset-y-0 right-0 w-[125px] h-[40px]  text-white font-bold  rounded-[8px] bg-[#2574FF]  hover:bg-blue-700 `}>
              {/* <button  disabled={!isJoinEnabled} className={`absolute inset-y-0 right-0 w-[125px] h-[40px]  text-white font-bold  rounded-[8px] ${isJoinEnabled ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-500'}`}> */}
                Join
              </button>
              </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  const ConsultationQueue = () => {
    const [expandedAppointmentId, setExpandedAppointmentId] = useState(appointments[0]?.id);

  
    return (
      <div>
        {appointments.map((appointment) => (
          <ConsultationQueueItem
            key={appointment.id}
            appointment={appointment}
            isExpanded={appointment.id === expandedAppointmentId}
            onClick={() => setExpandedAppointmentId(appointment.id)}
          />
        ))}
      </div>
    );
  };
  
// Main Dashboard Component
const DoctorDashboard = () => {
    //   const router = useRouter()
    const [docName, setDocName] = useState('');
    const [docExp, setDocExp] = useState('');
    const [docField, setDocField] = useState('');
    const [docHosp, setDocHosp] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    
  useEffect(() => {
    // Simulate an async operation like fetching data
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 3 seconds delay for demonstration
  }, []);






    useEffect(() => {
      const fetchDocName = async () => {
        const docRef = doc(db, 'doctor', 'mainDoc');
        const docSnap = await getDoc(docRef);
  
        if (docSnap.exists()) {
          setDocName(docSnap.data().name);
          setDocExp(docSnap.data().practiceYears);
          setDocField(docSnap.data().field);
          setDocHosp(docSnap.data().hospital);

        } else {
          console.log("No such document!");
        }
      };
  
      fetchDocName();
    }, []);

  // Mock data for the doctor and appointments
  const doctorInfo = {
    name: "Dr " + docName,
    specialty: docField,
    experience: docExp,
    hospital: docHosp,
  };


  if (isLoading) {
    return <div className='h-screen flex items-center justify-center'> <img src="/loading.gif" alt="Loading..." /></div>; // Replace with your loading animation
  }




  return (
    <main className="min-h-screen bg-cover  overflow-hidden bg-main-pattern text-manrope">
        <div className='min-h-screen bg-[#010101]/50 w-full h-full'>
                <img alt="Ausalogo" src="/logoWhite.png" className='absolute top-[1rem] left-[2rem]' />
                <div className="absolute right-10 top-10 ">
          <CurrentTime />
        </div>
        <div className='absolute bottom-[20px] left-[3%] w-[45%] max-w-[40%] h-[220px]'>
        <img alt="Colan" src="/colan.png" className='absolute top-0 left-0' />
        <div className='absolute w-[100%] h-[213px]  left-[65px] font-manrope sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white '>
 <div>Wherever the art of</div><div>medicine is loved, there is </div>also a love of humanity
</div>
</div>
      <div className=" overflow-y-auto overflow-x-hidden hide-scrollbar bg-white/50 w-[627px] max-w-[50%] h-auto max-h-[82%]  rounded-[16px] absolute right-4 top-[12%] ">
        <div className='px-[8px] pt-[8px]'>
        <WelcomeBox doctor={doctorInfo} />
        <h5 className="relative text-[16px] font-regular left-[3%] text-white mt-4 mb-4 font-manrope">Scheduled consultations</h5>
        {appointments.length === 0 ? (
    <p className=" relative font-semibold left-[3%] text-white text-[28px] pb-[24px]">No appointments scheduled.</p>
  ) : (
    <ConsultationQueue appointments={appointments} />

  )}
        
        </div>
        </div>
        </div>

    </main>
  );
};

export default withAuth(DoctorDashboard);
