
import { Link } from "react-router-dom"
import MobileNavBar from "./NavbarResponsive";
import { useState, useEffect } from "react";

export const Navbar = () => {
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 963);

  useEffect(() => {
    const handleWindowResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsMobile(width <= 963);
    };
  
    window.addEventListener('resize', handleWindowResize);
  
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowWidth]); 
  
  return (

    <div className="w-screen z-50 ">
        <div className="w-full z-50 flex justify-center ">
            
        {!isMobile ? ( <ul className="flex z-50 w-3/5 h-[6rem] mt-[0.3rem] bg-[#00000088] rounded-md items-center justify-center skewed ">
            <div className="flex w-3/4 gap-[2.5rem] justify-center">
            <Link to="/"><li className=" text-white hover:cursor-pointer  hover:text-[#72FFFB] hover:underline hover:underline-offset-4 " id="inicio">INICIO</li></Link>
            <Link to="/tienda"><li className="text-white hover:cursor-pointer  hover:text-[#FF1F97] hover:underline hover:underline-offset-4">TIENDA</li></Link>
        
            </div>
            <div className="flex hover:cursor-pointer  w-2/4 justify-center">
               <Link to="/">
            <img className="w-[14rem]" src="https://storage.googleapis.com/casino-playmaker/PLAYERMAKERTV-COLOR-4-Fondo-TXT-transparente-V2.png" alt="" /></Link>

            </div>
            <div className="flex w-3/4 gap-[2.5rem] justify-center">
            <Link to="/contacto"><li className=" text-white hover:cursor-pointer  hover:text-[#72FFFB] hover:underline hover:underline-offset-4">CONTACTO</li></Link>
            <Link to="/promos"><li className="text-white hover:text-[#FF1F97] hover:cursor-pointer  hover:underline hover:underline-offset-4">
                PROMOS
            </li></Link>
            </div>
           
         </ul> ) : (
          <div className='flex z-50  w-full justify-center items-center'>
            <MobileNavBar />
          </div>
        )}
         </div>
    </div>
  )
}
