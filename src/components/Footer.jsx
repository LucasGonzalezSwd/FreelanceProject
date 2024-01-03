import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faInstagram, faKickstarter, faTiktok, faTwitch, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";


export const Footer = () => {
  return (
    <div className="flex w-screen flex-col bg-black h-full mt-[3rem]">
        <div className="w-full flex flex-col justify-center items-center pt-[2rem]">

        <div className="flex flex-col justify-center items-center w-2/4  text-white">
          <p className="text-center mb-[0.5rem]">JUEGA CON RESPONSABILIDAD</p>
          <p className="text-center text-sm ">«Para encontrar mas información visita: <span className="text-[#FF1F97]"><a href="https://www.jugarbien.es/" target="_blank" rel="noopener noreferrer">https://www.jugarbien.es/</a></span>
</p>
</div>
        </div>
       


  <div className="flex w-full justify-center mt-[2rem]">

   <hr  className="border-0 border-t-[0.005rem] w-10/12  border-[#ff1f977f]"/>
   </div>
        <div className="w-screen  flex justify-center  ">
        <div className="h-[13rem] justify-evenly text-white items-center max-[1035px]:gap-[2rem] gap-[3rem] w-3/4 flex max-[1035px]:flex-col max-[1035px]:h-full ">
          
        <div>
        <img className="h-full max-[1035px]:w-[10rem] w-[14rem]" src="https://storage.googleapis.com/casino-playmaker/PLAYERMAKERTV-COLOR-5-1.png" alt="icono playmaker" />
        </div>
      <div className="flex gap-[1rem] text-xl max-[1035px]:text-lg">
      <a href="https://www.twitch.tv/playermakertv" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon className="hover:scale-125 transition-all ease-in-out duration-200" icon={faTwitch}/></a>
      <a href="https://discord.com/invite/mtxv95ZNWP" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="hover:scale-125 transition-all ease-in-out duration-200" icon={faDiscord}/></a>
       <a href="https://www.instagram.com/playermakertv/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="hover:scale-125 transition-all ease-in-out duration-200" icon={faInstagram}/></a>
       <a href="https://kick.com/playermakertv" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="hover:scale-125 transition-all ease-in-out duration-200" icon={faKickstarter}/></a>
       <a href="https://www.youtube.com/@playermakertv7806" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="hover:scale-125 transition-all ease-in-out duration-200" icon={faYoutube}/></a>
       <a href="http://www.tiktok.com/@playermakertv" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="hover:scale-125 transition-all ease-in-out duration-200" icon={faTiktok}/></a>
      </div>
      <div className="text-sm gap-[0.5rem] max-[1035px]:mb-[1rem] flex flex-col">
        <p className="text-center">Contacto:</p>
        <p>playermaker.tv@gmail.com</p>
      </div>
      <div className="text-sm gap-[0.5rem] max-[1035px]:text-xs max-[1035px]:text-center flex flex-col">
        <Link  to="#" className="text-[#FF1F97]"><p>Politica de privacidad</p></Link>
        <Link  to="#" className="text-[#FF1F97]"> <p>Politica de cookies</p></Link>
        <Link   to="#"className="text-[#FF1F97]"> <p>Aviso legal</p></Link>
      </div>
      
        </div>

        </div>
        <div className="flex w-full justify-center mt-[2rem]">

<hr  className="border-0 border-t-[0.005rem] w-10/12  border-[#ff1f977f]"/>
</div>
        <div className="text-white  max-[1035px]:mt-[3rem] max-[1035px]:flex-col flex w-full justify-center mb-[0rem] max-[1035px]:items-center">
          <div className="flex flex-col justify-center items-center gap-[0.7rem] p-[0.5rem]">
         <a href="https://www.jugarbien.es/" target="_blank" rel="noopener noreferrer">
            <img src="https://casinokillers.tv/wp-content/uploads/2023/09/JugarBien.webp" alt="" className="h-[1.2rem] hover:scale-105 transition-all ease-in-out duration-200 w-fit"/></a>
            <img src="https://casinokillers.tv/wp-content/uploads/2023/09/JuegaConResponsabilidad.webp" alt="" className="h-[1.2rem] hover:scale-105 transition-all ease-in-out duration-200 w-fit"/>
            <img src="https://casinokillers.tv/wp-content/uploads/2023/09/SinDiversionNoHayJuego2.webp" alt="" className="h-[1.2rem] hover:scale-105 transition-all ease-in-out duration-200 w-fit"/>
          </div>
          <div className="flex flex-col justify-center items-center gap-[0.7rem] p-[0.5rem]">
          <a href="https://www.ordenacionjuego.es/es/rgiaj" target="_blank" rel="noopener noreferrer"><img src="https://casinokillers.tv/wp-content/uploads/2023/09/mas18.webp" alt="" className="h-[1.2rem] hover:scale-105 transition-all ease-in-out duration-200 w-fit"/></a>
          <a href="https://www.juegoseguro.es/" target="_blank" rel="noopener noreferrer">
            <img src="https://casinokillers.tv/wp-content/uploads/2023/09/logo_juego-seguro.webp" alt="" className="h-[1.2rem] hover:scale-105 transition-all ease-in-out duration-200 w-fit"/></a>
          </div>
          <div className="w-2/4 max-[1035px]:mb-[2rem]  max-[1035px]:w-11/12 max-[1035px]:text-center p-[2rem] h-full">
          <p className=" text-[0.6rem]">JUEGO RESPONSABLE: No asumimos responsabilidad por las pérdidas resultantes de actividades de juego en casinos o apuestas en sitios de apuestas asociados con cualquiera de nuestras promociones de bonos. La cantidad que una persona decide jugar es su responsabilidad y debe hacerlo dentro de sus medios financieros. Se desaconseja jugar o apostar con dinero que no se pueda permitir perder. También es importante no intentar recuperar las pérdidas. Es responsabilidad de los jugadores investigar y entender las leyes de juego en su país o región antes de apostar su dinero en cualquier sitio de apuestas en línea.
          AVISO: Las ofertas disponibles en nuestro sitio web pueden cambiar o ser canceladas en cualquier momento. Siempre recomendamos a los jugadores revisar las condiciones y verificar directamente las ofertas en el sitio web de las compañías de casinos o apuestas.»</p>
          </div>
        
        </div>
    </div>
  )
}
