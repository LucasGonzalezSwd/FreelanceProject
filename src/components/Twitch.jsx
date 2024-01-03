
import {  faTwitch } from '@fortawesome/free-brands-svg-icons';
import { faCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Twitch = () => {
  return (
    <div className="w-screen z-10 flex flex-col items-center justify-center  mt-[3rem]">
    <div className="flex w-full justify-center max-[510px]:mb-[5.5rem] mb-[3rem]">

<hr  className="border-0 border-t-[0.005rem] w-6/12  border-[#ff1f977f]"/>
</div>
<div className="flex backTwitch z-50 text-white h-[15rem] rounded-bl-xl rounded-tl-xl rounded-br-xl rounded-tr-xl w-3/4 max-[963px]:w-11/12 border-white"> 

<div className="h-full flex justify-start w-full items-start p-[0.5rem]">
<div className="h-[7rem] max-[510px]:h-[5rem] max-[417px]:h-[3.5rem] max-[355px]:h-[2.8rem]">
    <img className="h-full backiconos rounded-full z-50" src="https://storage.googleapis.com/casino-playmaker/4.png" alt="" />
</div>
</div>

<div className="flex flex-col w-full h-full justify-center items-center">
     <FontAwesomeIcon  className="backiconos h-[2rem] -mt-[0.5rem] mb-[0.3rem]  p-[1rem] rounded-full  max-[510px]:h-[1rem] max-[510px]:p-[0.6rem]" icon={faTwitch} size="2xl"/>
     <div className="flex justify-center items-center">
    <h1 className="text-2xl max-[510px]:text-lg max-[360px]:text-sm ml-[0.5rem] max-[510px]:mt-[0.5rem] ">LIVE ON TWITCH</h1> <FontAwesomeIcon  className="elemento h-[1rem] text-2xl text-red-500 ml-[0.5rem] flex " icon={faCircle}/>
     </div>
     <a href="https://www.twitch.tv/playermakertv" target="_blank" rel="noopener noreferrer">
     <button className="backiconos mt-[1rem] w-[6.5rem] pt-[0.3rem] pb-[0.3rem]  pr-[0.5rem] pl-[0.5rem] text-white  rounded-md hover:scale-125 transition-all ease-in-out duration-200 hover:bg-fuchsia-600 max-[510px]:w-[6rem] max-[360px]:w-[6rem]">UNIRME</button></a>

</div>

<div className="h-full flex justify-end w-full items-end p-[0.5rem]">
<div className="h-[7rem] max-[510px]:h-[5rem] max-[417px]:h-[3.5rem] max-[355px]:h-[2.8rem]">
    <img className="h-full backiconos rounded-full" src="https://storage.googleapis.com/casino-playmaker/22.png" alt="" />
</div>
</div>



</div>

    </div>
    
  )
}
