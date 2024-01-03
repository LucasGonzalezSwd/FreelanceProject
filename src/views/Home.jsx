
import { Registros } from "../components/Registros";
import { useState, useEffect } from "react";
import { Age } from "../components/Age";
import Cookies from 'js-cookie';
import axios from "axios";
import { RegistrosInter } from "../components/RegistrosInter";
import { PromosInter } from "../components/PromosInter";
import {Footer} from "../components/Footer"
import { Twitch } from "../components/Twitch";
import { PromosEspaña } from "../components/PromosEspaña";
import { Loader } from "../components/Loader";



export const Home = () => {
  const [isOver18, setIsOver18] = useState(false);
  const [isInEspaña, setIsInEspaña] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
     const fetchData = async () => {
      try {
        const response = await axios.get('https://get.geojs.io/v1/ip/country.json');
        const countryCode = response.data.country;
         console.log(countryCode);
        if (countryCode === 'ES') {
          Cookies.set('isInSpain', 'true', { expires: 30 });
          setIsInEspaña(true);
        }
        const userAgeAllow = Cookies.get('ageGate');
        if (userAgeAllow === 'true') {
          setIsOver18(true);
        }
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000); // 2000 milisegundos = 2 segundos
      } catch (error) {
        console.error('Error al obtener la ubicación:', error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

   
  const handleAgeSelection = (isOver18Selected) => {
    setIsOver18(isOver18Selected);
    Cookies.set('ageGate', isOver18Selected, { expires: 1 });
  };

  return (
    <div className="h-full w-screen flex flex-col justify-center items-center">
      {isLoading ? (
        <div className="w-full">
          <Loader />
        </div>
      ) : (
        !isOver18 ? (
          <Age handleAgeSelection={handleAgeSelection} />
        ) : (
          <>
            {isInEspaña && isOver18 ? (
              <>
                 <div className="flex h-[23rem] z-0 max-[470px]:h-[29rem]">
                <video
                    autoPlay
                    muted
                    loop
                    className="absolute top-0 left-0 w-full h-screen object-cover z-0"
                  >
                    <source src="https://storage.googleapis.com/web_playermakertv/player%20marker%20animacion%201.mp4" type="video/mp4" className="z-0" />
                  </video>
                </div>
                <div className="z-40">
                  <Registros />
              
                </div>
                <div className="z-40">
                <PromosEspaña />
               
      
                </div>
              </>
            ) : (
              <>
                <div className="flex h-[23rem] z-0 max-[470px]:h-[29rem] justify-center items-center">
                <video
                    autoPlay
                    muted
                    loop
                    className="absolute top-0 left-0 w-full h-screen object-cover z-0"
                  >
                    <source src="https://storage.googleapis.com/web_playermakertv/player%20marker%20animacion%201.mp4" type="video/mp4" className="z-0" />
                  </video>

                </div>
                <div className="z-40">
                <RegistrosInter />
             
                </div>
                <div className="z-40">
                <PromosInter />
                
               
                </div>
              </>
            )}
            <div className="flex">
              <Twitch />
            </div>
            <div className="mt-[5rem]">
              <Footer />
            </div>
          </>
        )
      )}
    </div>
  )
}