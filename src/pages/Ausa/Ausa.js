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
import blueBg from "../../assets/blueBg.png";
import blueBg2 from "../../assets/blueBg2.png";
import ellipse from "../../assets/ellipse.png";
import doctor from "../../assets/doctor.png";
import footerlogo from "../../assets/footerlogo.png";
import mail from "../../assets/mail.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";
import icon6 from "../../assets/icon6.svg";
import icon7 from "../../assets/icon7.svg";
import icon8 from "../../assets/icon8.svg";
import icon9 from "../../assets/icon9.svg";
import Slider from '../../components/Slider'
import { useMediaQuery } from "react-responsive";
import AOS from "aos";
import "aos/dist/aos.css";

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

const sentences =[
  "Get preliminary diagnosis and contact a medical professional.",
  "See vital history, and track differences",
  "A GSM module to solve connectivity issue",
  "Save money while doing tests",
]

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

    // const newIndex = deltaY > 0 ? currentSet + 1 : currentSet - 1;
    const newIndex = deltaY > 0 ? Math.min(currentSet + 1, texts.length - 1) : Math.max(currentSet - 1, 0);

    setCurrentSet(newIndex);

    setShowText((prevShowText) => {
      const newShowText = [...prevShowText];
      newShowText[currentSet] = false;
      newShowText[newIndex] = true;
      return newShowText;
    });

    // setCurrentSet((prevSet) => prevSet + (deltaY > 0 ? 1 : -1));
    // setActiveDot((prevDot) => prevDot + (deltaY > 0 ? 1 : -1));

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
  

  useEffect(() => {
    const handleScroll = (event) => {
      if (isLocked) {
        event.preventDefault();
        handleScrollDistance(event);
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      clearTimeout(timeoutRef.current);
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentSet, isLocked]);

  return (
    <div className="bg-slate-50 mt-48">
      <div className="flex flex-col -mt-28">
        <div className="flex justify-center">
          <h1 className="mt-14 mb-16 font-extrabold text-blue-700 text-2xl sm:text-3xl font-montserrat">
            Recording vitals like never before
          </h1>
        </div>

        <div className="flex flex-col items-center">
          <img src={bg} className="w-[34rem] m-auto"></img>

          <TextContainer onWheel={handleScrollDistance} className="absolute">
            {texts.map((set, index) => (
              <React.Fragment key={index}>
                {showText[index] && (
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

        <div className="flex flex-row justify-center items-center sm:gap-14 gap-8 mt-6 ">
          <img src={icon1} className="sm:w-[4rem] w-[3rem]"></img>
          <img src={icon2} className="sm:w-[4rem] w-[3rem]"></img>
          <img src={icon3} className="sm:w-[4rem] w-[3rem]"></img>
          <img src={icon4} className="sm:w-[4rem] w-[3rem]"></img>
          <img src={icon5} className="sm:w-[4rem] w-[3rem]"></img>
        </div>

        
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1.4rem",
            marginBottom: "3rem",
          }}
        >
          {texts.map((_, index) => (
            <div
              key={index}
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                margin: "0 0.5rem",
                background: index === activeDot ? "#1D4ED8" : "#c2e3fc",
                scale: index === activeDot ? "1.5" : "1",
                cursor: "pointer",
              }}              
              onClick={() => {
                setCurrentSet(index);
                setActiveDot(index);
              }}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className=" relative w-max">
          <img className="" src={blueBg}></img>
          <p data-aos="fade-up" className="absolute sm:text-3xl text-2xl top-16 left-16 m-6 text-white font-montserrat">
            An affordable & portable product for families & <br /> organisations
            to capture and record the elementary vitals <br /> of the user, for
            the purpose of telemedicine and initial <br /> point of care.
          </p>

          <div className="absolute flex flex-row sm:gap-28 gap-20 m-6 top-72 left-16">
            <img src={icon6} className="sm:w-[4rem] w-[2rem]"></img>
            <img src={icon7} className="sm:w-[4rem] w-[2rem]"></img>
            <img src={icon8} className="sm:w-[4rem] w-[2rem]"></img>
            <img src={icon9} className="sm:w-[3.3rem] w-[1.3rem]"></img>
          </div>

          <div className="absolute flex top-96 ml-20 mt-14">
            <Slider sentences={sentences}/>
          </div>

          <p data-aos="fade-up" className="absolute sm:text-3xl text-2xl bottom-80 left-16 text-white font-montserrat font-extrabold">
            Powered by advanced <br />
            A.I. Technology{" "}
          </p>
          <p data-aos="fade-up" className="absolute sm:text-2xl text-xl bottom-44 left-16 text-white font-montserrat">
            Vital HUB provides personalised <br /> Health insights, anomaly
            detection <br /> and risk prediction.
          </p>
          <img src={device} className="absolute -bottom-40 right-0"></img>
        </div>
      </div>

      <div className="flex justify-center mt-60 mb-20">
        <img src={line}></img>
        <h1 className="absolute  font-montserrat font-extrabold text-3xl text-blue-700">
          AUSA Vital Hub in action
        </h1>
      </div>

      <div className="flex justify-center mb-20">
        <ReactPlayer
          controls
          width="1280px"
          height="720px"
          url="https://youtu.be/7sDY4m8KNL"
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
              <div className="flex justify-start px-4 gap-4  items-center w-[32rem] h-[6rem] bg-white drop-shadow-[0_31px_55px_rgba(22,75,217,0.05)] rounded-[19px]  font-medium hover:scale-105 duration-100 hover:font-bold hover:cursor-default ">
              <div className="rounded-full border-solid border-black border-2 h-8 w-8 flex justify-center items-center">5</div>
                <p className=" text-blue-700 text-lg font-primary ">
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
          <p className="text-gray-500 mb-7 flex justify-center text-lg">By</p>
          <img
            className="mb-10 w-[25rem]"
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
  );
};

const MobileView = () => {
  return(
    <div className='h-full flex flex-col px-12  justify-around mt-24  sm:mt-0 sm:justify-between items-center'>
       <h2 className='text-center text-3xl font-montserrat font-medium mt-4'>Please view in desktop</h2>
       <img className='sm:h-[26rem] sm:w-[26rem]  mt-20' src={trafficcone}></img>
       <h2 className='text-center text-xl font-primary font-light'><span className='font-bold'>ausa.health </span>page is under construction</h2>
       <img className='sm:max-h-[30rem] sm:max-w-[30rem] -mt-5'src={ausalogo}></img>
    </div>
  )
}


const Ausa = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 640px)` });

  return(
    <div>
      {isMobile ? <MobileView/> : <DesktopView />}
    </div>
    
  )
}

export default Ausa;