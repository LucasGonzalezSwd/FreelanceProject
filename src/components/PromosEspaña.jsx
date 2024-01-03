import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPromos } from '../redux/actions';
import { Modal } from './Modal';
import { useState } from 'react';


export const PromosEspaña = () => {
  const dispatch = useDispatch();
  const promos = useSelector((state) => state.promos);
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (card) => {
    setSelectedCard(card);
  };

  useEffect(() => {
    dispatch(fetchPromos());
   
  }, [dispatch]);

   console.log(promos);
  return (
    <div className='flex flex-col justify-center items-center w-screen h-full mt-[6rem]  text-white'>
    <div className="flex w-full justify-center max-[510px]:mb-[4rem] mb-[3rem]">

<hr  className="border-0 border-t-[0.005rem] w-6/12 max-[963px]:w-8/12  border-[#ff1f977f]"/>
</div>
      <h1 className='text-2xl font-extrabold text-center'>OFERTAS EXCLUSIVAS </h1>

    <div className='flex flex-col items-center gap-[3rem]  justify-center w-full  mt-[3rem] flex-wrap'>
    {selectedCard && (
      <Modal card={selectedCard} closeModal={() => setSelectedCard(null)} />
    )}
      {promos.map((card) => (
         <>
         <div className='w-full flex  text-sm  justify-center ' key={card.id}>

          <div className='flex-col   '>
          <button className='back flex mt-[0.25rem] items-center flex-col w-[1.7rem] -mr-[0.1rem] h-[6.5rem] rounded-bl-xl rounded-tl-xl text-center shadow-[3px_6px_25px_5px_rgba(0,0,0,0.60)]  backHover2 max-[360px]:h-[14rem] max-[360px]:justify-center max-[360px]:mt-[0.5rem] max-[1000px]:h-[14rem] max-[1000px]:justify-center max-[1000px]:mt-[0.5rem]' onClick={() => openModal(card)}>
          <p>+</p>
          <p>I</p>
          <p>N</p>
          <p>F</p>
          <p>O</p></button>

          </div>

        
        <div className='w-3/4 max-[510px]:w-10/12 flex max-[1000px]:flex-col text-sm shadow-[4px_5px_13px_5px_rgba(0,0,0,0.60)] bg-[#0000007b] border-white justify-center items-center border-[0.005rem] max-[1000px]:h-[15rem] max-[360px]:h-[15rem] h-[7rem] rounded-xl mb-[1.5rem]'>

          <div className='flex  justify-center items-center w-1/3 '>
          <img className='max-h-[6.7rem] max-[510px]:mb-[1rem]  max-[510px]:max-h-[4rem] max-[510px]:min-h-[4rem] max-[510px]:w-full object-contain' src={card.imagen}/>
           </div>
           <div className='flex max-[730px]:flex-col w-full  max-[510px]:gap-x-[0rem] max-[510px]:text-xs max-[510px]:mb-[1rem] max-[730px]:-mt-[0.8rem]'>
          <p className='text-[#FF1F97] w-full flex justify-center items-center text-center '>{card.titulo.toUpperCase()}</p>
          <p className='text-[#3de7e1] w-full flex justify-center items-center text-center '>{ card.parrafo.toUpperCase() }</p>
          <p className='text-[#FF1F97] w-full flex justify-center items-center text-center '>{ card.parrafo2.toUpperCase() }</p>
          <p className='text-[#FF1F97] w-full flex justify-center items-center text-center '>{ card.parrafo3.toUpperCase() }</p>
          </div>
           <div className='w-1/4 flex justify-center items-center h-full'>
           <a href={card.infolink} target='_blank' rel="noreferrer" ><button className=' w-fit pt-[0.5rem] pb-[0.5rem]  pr-[0.5rem] pl-[0.5rem] text-white back rounded-md hover:scale-110 transition-all ease-in-out duration-200 max-[510px]:mb-[0.5rem]'> REGISTRATE</button></a>
           </div>
           <div className='absolute mt-[9.5rem] max-[360px]:mt-[16.4rem] max-[1000px]:mt-[16.8rem]'>
            <div className='flex gap-[9rem] justify-center w-full max-[510px]:gap-[1rem] max-[997px]:gap-[2.5rem]'>
           <img  className="h-[1.5rem] w-[3rem] object-contain" src={card.infoimagen1} alt="" />
           <img  className="h-[1.5rem] w-[3rem] object-contain" src={card.infoimagen2} alt="" />
           <img  className="h-[1.5rem] w-[3rem] object-contain" src={card.infoimagen3} alt="" />
           <img  className="h-[1.5rem] w-[3rem] object-contain" src={card.infoimagen4} alt="" />
           </div>
           </div>
        </div>
           </div>
        </>
      ))}
      
    </div>
    <div className='mt-[4rem]'>
       

    </div>
  </div>
);
};
