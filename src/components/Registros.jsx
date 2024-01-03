import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegistros } from '../redux/actions';

import { faCoins, faSackDollar,faDollarSign} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Registros = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.registros);


  useEffect(() => {
    dispatch(fetchRegistros());
   
  }, [dispatch]);

   
  return (
    <div className='flex justify-center items-center w-screen h-full  text-white'>
     
      <div className='flex max-[1100px]:flex-col  max-[1100px]:gap-y-[13rem] gap-x-[2.5rem] gap-y-[1rem] max-[510px]:gap-y-[9rem] max-[470px]:gap-y-[14rem] max-[1034px]:gap-y-[8rem] justify-center w-full flex-wrap items-center'>
       
        {cards.map((card, index) => (
            <div className='w-[26rem] max-[470px]:-mt-[1.5rem] max-[510px]:mt-[4.5rem]  max-[1134px]:-mt-[5.5rem] max-[1294px]:-mt-[0rem] max-[1034px]:-mt-[5.5rem]  max-[540px]:w-11/12 max-[510px]:mr-[0.4rem] max-[510px]:ml-[0.4rem] max-[994px]:-mt-[3.5rem] max-[1450px]:mt-[0.5rem] -mt-[5.5rem] max-[2000px]:mt-[4.4rem] max-[2800px]:mt-[7.5rem] max-[1648px]:mt-[1rem] min-[1650px]:w-[32rem] p-[2rem] pb-[1rem] flex flex-col bg-[#00000089] border-white border-[0.005rem] max-[1300px]:-mt-[5.5rem] min-[1650px]:p-[2.5rem] h-[22rem] max-[540px]:h-full  rounded-xl flex-wrap shadow-[4px_5px_13px_5px_rgba(0,0,0,0.60)]  max-[1100px]:-mt-[8.8rem] mb-[6rem] max-[470px]:mb-[0rem] max-[1034px]:mb-[0rem] max-[1094px]:mb-[0rem]  max-[1134px]:mb-[2rem] max-[1294px]:mb-[5rem]' key={index}>

            <div className='object-contain h-[10rem] -mt-[2rem] w-full min-[1650px]:-mt-[3rem] flex justify-center items-center '>
              <img src={card.imagen} className='max-h-[10rem] max-[510px]:max-h-[9rem]  mb-[1rem] max-w-[15rem] max-[510px]:max-w-[13rem] flex object-contain'/>
            </div>
              <p className='text-[#FF1F97] text-center text-md -mt-[1.5rem] max-[338px]:text-sm'> <FontAwesomeIcon icon={faDollarSign} className='text-white text-sm' /> {card.titulo.toUpperCase()}</p>
              <p className='text-[#3de7e1] text-md text-center  max-[338px]:text-sm'> <FontAwesomeIcon className='text-white text-sm' icon={faSackDollar} /> {card.parrafo.toUpperCase()}</p>
              <p className='text-[#FF1F97] text-md text-center   max-[338px]:text-sm'><FontAwesomeIcon className='text-white text-sm' icon={faCoins} /> {card.parrafo2.toUpperCase()}</p>
               <div className='w-full flex justify-center '>
  
              <a href={card.link} target='_blank' rel="noreferrer" ><button className=' w-fit pt-[0.5rem] pb-[0.5rem] mt-[1.5rem]  pr-[0.5rem] pl-[0.5rem] text-white back rounded-md hover:scale-110 transition-all ease-in-out duration-200'>REGISTRATE</button></a>
               </div>
            </div>
        ))}
      </div>
      
    </div>
  );
};
