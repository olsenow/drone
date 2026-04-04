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
        <main className="bg-[url('./src/drone.jpg')] bg-cover bg-center min-h-screen flex items-center justify-center">
            <div id="title-soar"  className="flex flex-col justify-center p-3">
                <div className="items-center justify-center text-center p-8 rounded-lg"> 
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-widest 
                    text-sky-300 text-shadow-lg drop-shadow-lg mb-2 underline decoration-yellow-200 ">
                        S.O.A.R 
                    </h1>
                    <p className="text-base text-white md:text-lg lg:text-xl tracking-normal text-gray-700 text-shadow-lg ">
                        Skyborne Operations Automatic Roamer
                    </p>
                    
                </div>
            

            
                <div className="flex items-center justify-center gap-10 p-5">
                    <div className="justify-center items-center text-white" >
                        Status : <input type="text" placeholder="Disconnected" className="bg-gray-300 border border-gray-500 text-black rounded 
                                    py-1 px-4 focus:outline-none pointer-events-none text-center " readOnly/>
                    </div>
                    <div className="items-center flex text-white" >
                        Battery : <progress value="" max="100" className="border border-white rounded ml-5 w-24 h-7"/>
                    </div>    
                </div>
                <div className="flex flex-col items-center justify-center -mt-4">
                    <div id="live-feed" className="flex flex-col items-center justify-center border-6 border-gray-400 rounded-lg p-4 mt-4 w-128 h-64 bg-gray-300">
                        <div>
                            <input type="text" placeholder="Drone Live View display" className="text-white-300 pointer-events-none" readOnly/>
                        </div>
                </div>
                <div>
                    <div id="altitude" className="mt-2 justify-center items-center gap-2 flex">
                            Altitude: <input type="text" placeholder="0" className="flex-col items-center justify-center m-1 w-12" readOnly/>m 
                            <hr className="gap-9"></hr>
                            Barometric: <input type="number"  placeholder="0.0" className="flex-col items-center justify-center w-12 " readOnly/>hPa
                    </div>
                </div>
                <div id="warning-message" className="mt-4 text-gray-500 font-bold">
                     <input type="text" placeholder="" className="pointer-events-none" readOnly/>
                </div>
               
            </div>
            </div>


        </main>
        
    );
}