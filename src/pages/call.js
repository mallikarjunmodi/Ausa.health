

import {useNavigate} from "react-router-dom";

import React, { useState, useEffect } from 'react';

import { JaaSMeeting } from '@jitsi/react-sdk';
import Paitents from '../components/paitents';
import Tests from '../components/tests';
import Notes from '../components/notes';
import withAuth from '../components/withAuth'; // Import the HOC
import { doc, getDoc } from 'firebase/firestore';

const Home = () => {
  const [token, setToken] = useState('');
  const [joinCall, setJoinCall] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    fetch('/api/generateToken')
      .then(response => response.json())
      .then(data => setToken(data.token));
      console.log(token)
  }, []);  
  
  const navigateOnHangup = () => {
    navigate('/dashboard');
  
    // Delay in milliseconds (10000ms = 10s)
  };
  
  
  return (
    <main className=" relative flex w-full h-full  overflow-hidden min-h-screen items-center flex-col bg-[#E8EDF5] justify-start">

      <div className=" top-0px left-0 bg-[#FCFCFC] w-full h-12">
        <img alt="Ausalogo" src="/ausalogo.png" className="relative top-3.5  ml-5 w-[131.2px] h-[20px] " />
      </div>
      <div className="flex-1 ">
      <div id="jitsi-container"  className=" container flex-1 absolute top-[70px] left-[1%]  rounded-[20px] bg-[#000000] w-[69%] h-[90%] overflow-hidden">
        <JaaSMeeting
          appId="vpaas-magic-cookie-cd58d83d6bb247d893d484da00e00493"
          roomName="Ausa Clinic"
          jwt={token}
          onApiReady={(externalApi) => {
            externalApi.addEventListeners({
              videoConferenceLeft: navigateOnHangup,
              readyToClose: navigateOnHangup,
            });
          }}
          configOverwrite={{
            toolbarButtons: [ 'chat','microphone', 'camera', 'hangup'], 
            disableThirdPartyRequests: true,
            disableLocalVideoFlip: true,
            backgroundAlpha: 0.5
          }}
          interfaceConfigOverwrite={{
            VIDEO_LAYOUT_FIT: 'nocrop',
            MOBILE_APP_PROMO: false,
            TILE_VIEW_MAX_COLUMNS: 4
          }}
          getIFrameRef={(iframeRef) => {
            iframeRef.style.borderRadius = "20px !important";
            iframeRef.style.height = "100%";
            iframeRef.style.width = "100%";
            
                
          }}
        />
              {/* <button className="absolute bottom-6 right-[25%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
  Button
</button> */}
      </div>
      <div className="overflow-y-auto  overflow-x-hidden hide-scrollbar absolute font-manrope  top-[70px] left-[70%] rounded-[20px] bg-[] w-[30%] h-[90%]">
        <Paitents/>
        <Tests/>
        <Notes/>

      </div>
      
      </div>

    </main>
  );
}

export default withAuth(Home);
