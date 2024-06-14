import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { easeInOut, motion } from "framer-motion";
import ausalogowhite from "../../assets/ausalogowhite.png";
import ausalogo from "../../assets/ausa_logo.png";
import trafficcone from '../../assets/traffic_cone.png'
import ReactPlayer from "react-player";
import device from "../../assets/device.png";
import bg from "../../assets/bg.svg";
import line from "../../assets/line.png";
import ellipse from "../../assets/ellipse.png";
import doctor from "../../assets/doctor.png";
import footerlogo from "../../assets/footerlogo.png";
import mail from "../../assets/mail.png";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import icon4 from "../../assets/icon4.svg";
import icon5 from "../../assets/icon5.svg";
import star from "../../assets/star.svg";
import TextSlider from '../../components/TextSlider'
import IconSlider from '../../components/IconSlider'
import LandingSlider from '../../components/LandingSlider'
import { useMediaQuery } from "react-responsive";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../components/Navbar";

<link rel="stylesheet" href="path/to/aos.css" />;

const TextContainer = styled.div`
  display: grid;
  grid-template-areas:
    "top-left top-right"
    "bottom-left bottom-right";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 4rem;
  margin-top: -1rem;
`;

const Text = styled(motion.div)`
  grid-area: ${({ position }) => position};
  background-color: white;
  padding: 1rem;
  color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 01rem;
  height: 4.5rem;
  width: 18rem;
  // margin-bottom: 1rem;
  font-weight: 500;
  font-size: 1.1rem;
  box-shadow: 0px 31px 55px rgba(22, 75, 217, 0.05);
  background-color: ${({ position }) =>
    position.includes("top-left") ? "#1D4ED8" : "#ffffff"};
  color: ${({ position }) =>
    position.includes("top-left") ? "#ffffff" : "#1D4ED8"};
  margin-right: ${({ position }) =>
    position.includes("bottom-left") ? "8rem" : "auto"};
  margin-top: ${({ position }) =>
    position.includes("top-right") ? "5rem" : "auto"};
  margin-bottom: ${({ position }) =>
    position.includes("top-left") ? "5rem" : "auto"};
  margin-top: ${({ position }) =>
    position.includes("bottom-left") ? "-3rem" : "auto"};
  margin-left: ${({ position }) =>
    position.includes("top-right") ? "8rem" : "auto"};
  margin-left: ${({ position }) =>
    position.includes("bottom-right") ? "8rem" : "auto"};
`;


const texts = [
  [
    "Check your body temperature",
    "Connect with doctor",
    "Share your reading",
    "Get an accurate diagnosis",
  ],
  [
    "Capture your body sounds",
    "Connect with doctor",
    "Share your reading",
    "Track your health progress",
  ],
  [
    "Get your blood pressure",
    "Connect with doctor",
    "Share your reading",
    "Get an accurate diagnosis",
  ],
  [
    "Get your blood glucose levels",
    "Connect with doctor",
    "Share your reading",
    "Get an accurate diagnosis",
  ],
  [
    "Get a 12 lead ECG",
    "Connect with doctor",
    "Share your reading",
    "Get an accurate diagnosis",
  ],
];

const DesktopView = () => {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  const [currentSet, setCurrentSet] = useState(0);
  const [isLocked, setIsLocked] = useState(true);
  const timeoutRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  const [showText, setShowText] = useState([true, false, false, false, false]);

  const handleScrollDistance = (event) => {
    const { deltaY } = event;
    const distance = Math.abs(deltaY) / 50;

    if (distance < 1) {
      return;
    }

    clearTimeout(timeoutRef.current);

    if (currentSet === texts.length - 1 && deltaY > 0) {
      setIsLocked(false);
      return;
    } else if (currentSet === 0 && deltaY < 0) {
      return;
    }

    const newIndex = deltaY > 0 ? Math.min(currentSet + 1, texts.length - 1) : Math.max(currentSet - 1, 0);

    setCurrentSet(newIndex);

    setShowText((prevShowText) => {
      const newShowText = [...prevShowText];
      newShowText[currentSet] = false;
      newShowText[newIndex] = true;
      return newShowText;
    });


    setActiveDot((prevDot) => {
      const maxDots = texts.length;
      let newDot = prevDot + (deltaY > 0 ? 1 : -1);
      if (newDot < 0) {
        newDot = maxDots - 1;
      } else if (newDot >= maxDots) {
        newDot = 0;
      }
      return newDot;
    });


    timeoutRef.current = setTimeout(() => {
      setIsLocked(false);
    }, 3000 + distance * 2000);

    setIsLocked(true);
  };
  

  // useEffect(() => {
  //   const handleScroll = (event) => {
  //     if (isLocked) {
  //       event.preventDefault();
  //       handleScrollDistance(event);
  //     }
  //   };

  //   window.addEventListener("wheel", handleScroll, { passive: false });

  //   return () => {
  //     clearTimeout(timeoutRef.current);
  //     window.removeEventListener("wheel", handleScroll);
  //   };
  // }, [currentSet, isLocked]);


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
    <>
          <Navbar/>

    <div className="bg-slate-50 mt-48">
      <div className="flex flex-col -mt-28">
        <div className="flex justify-center">
          <h1 className="mt-14 mb-16 font-extrabold text-blue-700 text-2xl sm:text-3xl font-montserrat">
            Recording vitals like never before
          </h1>
        </div>

        <div className="flex flex-col items-center">
          <img src={bg} alt="ausa_device" className="w-[34rem] m-auto"></img>

          <TextContainer onWheel={handleScrollDistance} className="absolute">
            {texts.map((set, index) => (
              <React.Fragment key={index}>
                {activeIcon === index+1 && (
                  <React.Fragment>
                    {set.map((text, textIndex) => (
                      <Text
                        data-aos="zoom-in"
                        data-aos-duration="300"
                        data-aos-easing="ease-in-sine"
                        key={textIndex}
                        position={
                          textIndex === 0
                            ? "top-left"
                            : textIndex === 1
                            ? "top-right"
                            : textIndex === 2
                            ? "bottom-left"
                            : "bottom-right"
                        }
                        transition={{ duration: 1 }}
                      >
                        {text}
                      </Text>
                    ))}
                  </React.Fragment>
                )}
              </React.Fragment>
            ))}
          </TextContainer>
        </div>


        <div className="flex flex-col items-center justify-center mt-6 ">
        <div className="flex gap-7 sm:gap-14">
        <div
          className={`flex flex-col items-center cursor-pointer ${
            activeIcon === 1 ? 'opacity-100 scale-110' : 'opacity-50'
          }`}
          onClick={() => handleIconClick(1)}
        >
          <img src={icon1} className="w-10 h-10 sm:w-14 sm:h-14" />
        </div>
        
        <div
          className={`flex flex-col items-center cursor-pointer ${
            activeIcon === 2 ? 'opacity-100 scale-110' : 'opacity-50'
          }`}
          onClick={() => handleIconClick(2)}
        >
          <img src={icon2} className="w-10 h-10 sm:w-14 sm:h-14" />
        </div>

        <div
          className={`flex flex-col items-center cursor-pointer ${
            activeIcon === 3 ? 'opacity-100 scale-110' : 'opacity-50'
          }`}
          onClick={() => handleIconClick(3)}
        >
          <img src={icon3} className="w-10 h-10 sm:w-14 sm:h-14" />
        </div>

        <div
          className={`flex flex-col items-center cursor-pointer ${
            activeIcon === 4 ? 'opacity-100 scale-110' : 'opacity-50'
          }`}
          onClick={() => handleIconClick(4)}
        >
          <img src={icon4} className="w-10 h-10 sm:w-14 sm:h-14" />
        </div>

        <div
          className={`flex flex-col items-center cursor-pointer ${
            activeIcon === 5 ? 'opacity-100 scale-110' : 'opacity-50'
          }`}
          onClick={() => handleIconClick(5)}
        >
          <img src={icon5} className="w-10 h-10 sm:w-14 sm:h-14" />
        </div>
        </div>

        <div className='flex items-center gap-4 mb-12 -mt-2'>
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

    
        <div className="flex flex-col mt-4 p-12 h-[68rem] bg-bluebg1 w-full bg-rep">
        <div className="flex mt-10">
        <p data-aos="fade-up" className="flex justify-center text-3xl text-white font-montserrat ml-4">
          
            An affordable & portable product for families & <br /> organisations
            to capture and record the elementary vitals <br /> of the user, for
            the purpose of telemedicine and initial <br /> point of care.
          </p>
          </div>

    
        <div className="mt-10 mb-2">
          <IconSlider/>
        </div>

        <div className="flex flex-row justify-between">
          <div className="flex flex-col mt-36">
          <h1 data-aos="fade-up" className="flex justify-start font-montserrat text-start text-white font-bold text-3xl mt-16 ml-4">
                  Powered by advanced <br />
                      A.I. Technology
          </h1>

          <p data-aos="fade-up" className="flex justify-start text-2xl ml-4 mt-8 text-white font-montserrat">
            Vital HUB provides personalised <br/> Health insights, anomaly detection <br/> and risk prediction.
          </p>
          </div>

          <div className="-mr-12">
            <img src={device} ></img>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-96 mb-20">
        <img src={line}></img>
        <h1 className="absolute  font-montserrat font-extrabold text-3xl text-blue-700">
          AUSA Vital Hub in action
        </h1>
      </div>

      <div className="flex rounded-[30px] justify-center mb-20">
        <ReactPlayer
          controls
          width="1280px"
          height="720px"
          url="https://youtu.be/vuqrqZOQ2pU"
        ></ReactPlayer>
      </div>


      <div className="flex flex-col items-center gap-28 bg-bluebg h-[60rem] bg-rep w-full mx-auto pt-16 overflow-hidden">
        <div className="flex flex-col items-center gap-28 w-[94rem]">
          {/* <img src={blueBg2}></img> */}
        <h1 className="font-bold text-3xl text-white font-montserrat text-center">
          Stay in-tune with your health
        </h1>

        <div className="w-full flex justify-end mr-16">
          <div
            data-aos="fade-up"
            className=" relative w-[44rem] bg-white p-8 rounded-3xl boxglow "
          >
            <p data-aos="fade-up" className="a font-primary font-bold text-xl">
              Take charge of your well-being with our easy-to-use <br /> device
              that measures
            </p>
          </div>
        </div>

        <div className="w-full flex justify-start ml-16">
          <div
            data-aos="fade-up"
            className="w-[44rem] bg-white p-8 rounded-3xl boxglow"
          >
            <p data-aos="fade-up" className="font-primary font-bold   text-xl">
              Stay connected to your health with Ausa VitalHub - <br /> The
              ultimate telemedicine device that brings <br /> comprehensive,
              medical-grade vital monitoring and <br /> seamless doctor
              consultations right into your home.
            </p>
          </div>
        </div>

        <div className="w-full flex justify-end mr-16">
          <div
            data-aos="fade-up"
            className="w-[44rem] bg-white p-8 rounded-3xl boxglow"
          >
            <p data-aos="fade-up" className=" font-primary font-bold  text-xl">
              Ensuring you and your loved ones receive the best <br /> possible
              care in today's fast-paced, digital world. Say <br /> hello to a
              healthier future with VitalHub.
            </p>
          </div>
        </div>
        </div>
      </div>


      <div className="flex justify-center mt-16">
        <h1 className=" font-bold text-3xl text-blue-700 font-montserrat">
          Connect with a doctor
        </h1>
      </div>


      <div className=" flex justify-center py-24 items-center w-full overflow-hidden">
        <img
          src={ellipse}
          style={{ height: 590, width: 590 }}
          className="absolute mt-24 mb-24"
        ></img>

        <div className="flex justify-center items-center ">
          <img
            src={doctor}
            style={{ height: 436, width: 650 }}
            className="z-20"
          ></img>

          <div className="flex flex-col z-20 gap-4">
            <div data-aos="fade-up">
              <div className="flex justify-start  gap-4 px-4 items-center w-[32rem] h-[6rem] bg-white drop-shadow-[0_31px_55px_rgba(22,75,217,0.05)] rounded-[19px]  hover:scale-105 duration-100 hover:font-bold hover:cursor-default">
                <div className="rounded-full border-solid border-black border-2 h-8 w-8 flex justify-center items-center">1</div>
                <p className=" text-lg font-primary ">
                  Take your vitals using default test <br /> combination.
                </p>
              </div>
            </div>

            <div data-aos="fade-up">
              <div className="flex justify-start px-4 gap-4  items-center w-[32rem] h-[6rem] bg-white drop-shadow-[0_31px_55px_rgba(22,75,217,0.05)] rounded-[19px] hover:scale-105 duration-100 hover:font-bold hover:cursor-default">
              <div className="rounded-full border-solid border-black border-2 h-8 w-8 flex justify-center items-center">2</div>
                <p className="flex justify-center items-center text-lg font-primary ">
                  Book an appointment with a doctor <br /> through the device.
                </p>
              </div>
            </div>

            <div data-aos="fade-up">
              <div className="flex justify-start px-4 gap-4  items-center w-[32rem] h-[6rem] bg-white drop-shadow-[0_31px_55px_rgba(22,75,217,0.05)] rounded-[19px] hover:scale-105 duration-100 hover:font-bold hover:cursor-default">
              <div className="rounded-full border-solid border-black border-2 h-8 w-8 flex justify-center items-center">3</div>
                <p className=" flex text-lg font-primary ">
                  Share your vitals taken previously or take a test <br />{" "}
                  during the consultation.
                </p>
              </div>
            </div>

            <div data-aos="fade-up">
              <div className="flex justify-start px-4 gap-4  items-center w-[32rem] h-[6rem] bg-white drop-shadow-[0_31px_55px_rgba(22,75,217,0.05)] rounded-[19px]  hover:scale-105 duration-100 hover:font-bold hover:cursor-default">
              <div className="rounded-full border-solid border-black border-2 h-8 w-8 flex justify-center items-center">4</div>
                <p className=" flex text-lg font-primary ">
                  Get an accurate diagnosis from the doctor.
                </p>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="flex justify-start px-4 gap-0  items-center w-[32rem] h-[6rem] bg-white drop-shadow-[0_31px_55px_rgba(22,75,217,0.05)] rounded-[19px]  font-medium hover:scale-105 duration-100 hover:font-bold hover:cursor-default ">
              <div className=""><img src={star} alt="5" className="mt-12 -ml-[4.3rem]"></img></div>
                <p className="text-blue-700 text-lg font-primary -ml-[10.1rem]">
                  All at the convenience of your home :)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="footer-container text-white bg-black flex justify-center overflow-x-hidden pt-8 font-primary sm:text-xl md:text-2xl ">
        <div className="flex flex-col">
          <img
            src={ausalogowhite}
            className="w-[15rem] justify-center ml-20"
          ></img>
            <p className="text-gray-400 mb-4 flex justify-center text-lg">Ausa Health</p>

          <p className="text-gray-500 mb-7 flex justify-center text-lg">By</p>
          <img
            className="mb-10 w-[25rem]"
            src={sa}
            alt="Prar Labs Private Limtied"
          ></img>
          <p className="text-gray-400 mb-4 flex justify-center text-lg">700/2 Modi hospital compound, Bengaluru, Karnataka, India - 560086</p>
          <p className="text-gray-400 mb-4 flex justify-center text-lg">CIN: U73100KA2023PTC170052</p>
          <p className="text-gray-400 mb-4 flex justify-center text-lg">https://ausa.health/</p>

          
          <p className="text-gray-400 mb-4 flex justify-center text-lg">
            Get in touch...
          </p>

          <div className="flex items-center gap-2 justify-center font-primary mb-20 text-lg ">
            <img className="h-4" src={mail}></img>
            <h4>hello@ausa.health</h4>
          </div>
        </div>
      </div>
    </div>
    </>
    );

};



const MobileView = () => {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);
  return(
    // <div className='h-full flex flex-col px-12  justify-around mt-24  sm:mt-0 sm:justify-between items-center'>
    //    <h2 className='text-center text-3xl font-montserrat font-medium mt-4'>Please view in desktop</h2>
    //    <img className='sm:h-[26rem] sm:w-[26rem]  mt-20' src={trafficcone}></img>
    //    <h2 className='text-center text-xl font-primary font-light'><span className='font-bold'>ausa.health </span>page is under construction</h2>
    //    <img className='sm:max-h-[30rem] sm:max-w-[30rem] -mt-5'src={ausalogo}></img>
    // </div>

   <>
         <Navbar/>

      <div className="mt-24 sm:text-2xl relative bg-slate-50">
        <div className="flex flex-col justify-center items-center -mt-8">
          <h1 className="font-montserrat text-center text-blue-600 font-bold text-3xl mx-4 mt-14 sm:text-4xl">
            Recording vitals like never before
          </h1>

          <img src={bg} className="mt-16"></img>

          <div>
            <LandingSlider/>
          </div>

      <div className="flex flex-col mt-24 h-[70rem] bg-bluebg2 w-full bg-rep">
        <div className="flex mt-8">
          <p data-aos="fade-up" className="flex justify-center text-2xl m-6 text-white font-montserrat">
              An affordable & portable product for families & organisations
              to capture and record the <br/> elementary vitals of the user, for
              the purpose of telemedicine and initial point of care.
          </p>
        </div>


        <div className="">
          <IconSlider/>
        </div>

        <h1 data-aos="fade-up" className="flex justify-start font-montserrat text-start text-white font-bold text-2xl mt-16 m-6 mb-0">
        Powered by advanced <br />
            A.I. Technology
        </h1>
        <p data-aos="fade-up" className="flex justify-start text-base m-6 text-white font-montserrat">
          Vital HUB provides personalised Health insights, anomaly detection and risk prediction.
        </p>

        <div className="flex justify-center items-center mt-10 ml-8">
          <img src={device} ></img>
        </div>

      </div>

      <div className="flex flex-col justify-center mt-28">
          <h1 className="font-montserrat text-center text-blue-600 font-bold text-2xl mx-4 my-2 sm:text-4xl sm:mt-64">
            AUSA Vital Hub in action
          </h1>

          <div className="flex justify-center mt-4">
            <ReactPlayer
              controls
              width="90vw"
              height="50vw"
              url="https://www.youtube.com/watch?v=vuqrqZOQ2pU"
            ></ReactPlayer>
          </div>
      </div>

      <div className="flex flex-col mt-16 h-[54rem] bg-bluebg w-full bg-rep">
        <h1 className="flex justify-start font-montserrat text-start text-white font-bold text-2xl mt-12 m-6 mb-0">
          Stay in tune with <br/>your health
        </h1>
        
        <div data-aos="fade-up" className="bg-white rounded-tr-3xl rounded-br-3xl drop-shadow-[0_31px_55px_rgba(255, 255, 255, 0.21)] mr-16 mt-10">
          <p className="text-black p-6 font-bold text-lg font-primary">Take charge of your well-being with our easy-to-use device that measures</p>
        </div>

        <div data-aos="fade-up" className="justify-end bg-white rounded-tl-3xl rounded-bl-3xl drop-shadow-[0_31px_55px_rgba(255, 255, 255, 0.21)] ml-16 mt-6">
          <p className="text-black p-6 font-bold text-lg font-primary">Stay connected to your health with Ausa VitalHub - 
          The ultimate telemedicine device that brings comprehensive, medical-grade vital monitoring and seamless doctor consultations right into your home.</p>
        </div>

        <div data-aos="fade-up" className="bg-white rounded-tr-3xl rounded-br-3xl drop-shadow-[0_31px_55px_rgba(255, 255, 255, 0.21)] mr-16 mt-6">
          <p className="text-black p-6 font-bold text-lg font-primary">Ensuring you and your loved ones receive the best possible care in today's fast-paced, digital world. Say hello to a healthier future with VitalHub.</p>
        </div>

      </div>

      <div className="flex flex-col mt-10">
        <h1 className="font-montserrat text-center text-blue-600 font-bold text-2xl mx-4 my-2 sm:text-4xl z-10 md:mb-32 sm:mb-20">
            Connect with a doctor
        </h1>
      
        <div className=" flex justify-center items-center mt-8 overflow-hidden">
          <img
            src={ellipse}
            style={{width: '115%', maxWidth: 'none', height: 'auto', }}
          ></img>
        </div>


          <div className="flex justify-center items-center -mt-[27rem]">
            <img
              src={doctor}
              style={{ }}
              className="rounded-2xl z-20 "
            ></img>
          </div>

        <div className="z-30">
            <TextSlider/>
          </div>
      </div>

      <div className="footer-container text-white overflow-x-hidden min-w-full bg-black flex justify-center pt-8 mt-20 font-primary sm:text-xl md:text-2xl ">
        <div className="flex flex-col">
          <img
            src={ausalogowhite}
            className="w-[15rem] justify-center ml-10"
          ></img>
          <p className="text-gray-500 mb-7 flex justify-center text-lg">By</p>
          <img
            className="mb-10 w-[20rem]"
            src={footerlogo}
            alt="PRAR LABS PVT LTD."
          ></img>
          <p className="text-gray-400 mb-4 flex justify-center text-lg">
            Get in touch...
          </p>

          <div className="flex items-center gap-2 justify-center font-primary mb-20 text-lg ">
            <img className="h-4" src={mail}></img>
            <h4>prarlabs@gmail.com</h4>
          </div>
        </div>
      </div>

      
        </div>
      </div>
      </>
      

  )
}


const Ausa = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 1200px)` });

  return(
    <div>
      {isMobile ? <MobileView/> : <DesktopView />}
    </div>
    
  )
}

export default Ausa;