import {React, useState} from "react";

import './index.css'

export default function Soar() {
   //const [droneStatus, setDroneStatus] = useState("Disconnected");
   {/* 
   const status = () => {
    if (droneStatus === "on") {
        setDroneStatus("Online")
   }elif (droneStatus === "off"); {
        setDroneStatus("Offline")
   }
};
*/}




    
    return (
        <main>
            <div id="title-soar"  className="flex flex-col justify-center p-3">
                <div className="items-center justify-center text-center bg-yellow-200 p-2 rounded-lg"> 
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-widest 
                    text-sky-300 text-shadow-lg drop-shadow-lg mb-2 underline decoration-yellow-200 ">
                        S.O.A.R 
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl tracking-normal text-gray-700 text-shadow-lg ">
                        Skyborne Operations Automatic Roamer
                    </p>
                    
                </div>
            

            
                <div className="flex flex-col items-center justify-center p-3">
                    <div className="min-h-screen">
                        <div className="justify-center items-center mt-3">
                            Status: <input type="text" placeholder="Disconnected" className="bg-gray-300 border border-gray-500 rounded 
                                    py-1 px-4 focus:outline-none pointer-events-none text-center " readOnly/>
                            <div className="border border-gray-500 rounded py-1 px-4 focus:outline-none pointer-events-none text-center">
                                Battery: 
                            </div>
                        </div>
                        

                        <div id="live-feed" className="border-6 border-gray-400 rounded-lg p-4 mt-4 w-128 h-64 bg-gray-300 flex items-center justify-center">
                            <div>
                                <input type="text" placeholder="Drone Live View display" className="text-white-300 pointer-events-none" readOnly/>
                            </div>
                            <div className="grid grid-cols-1 z-20" >

                            </div>
                        </div>

                        
                    </div>
                </div>
          
            </div>


        </main>
        
    );
}