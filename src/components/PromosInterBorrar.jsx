import { useEffect ,useContext,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  fetchPromosInter } from '../redux/actions';
import axios from 'axios';
import {UserContext} from "../StreamerContext"
import { Modal } from './Modal';
export const PromosInterBorrar = () => {
  const dispatch = useDispatch();
  const { user } = useContext(UserContext); 
  const promos = useSelector((state) => state.promosInter);
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (card) => {
    setSelectedCard(card);
  };

  const handleDelete = async (id) => {
   

    try {
      const response = await axios.delete(`https://barbershopclub.hair/api/deletePromointer/${id}`, {
        headers: {
          nombre: user.username,
          password: user.password,
        },
      });

      if (response.status === 200) {
        dispatch(fetchPromosInter()); // Vuelve a cargar las tarjetas después de eliminar
      }
    } catch (error) {
      console.error('Error al eliminar la tarjeta:', error);
      // Manejo de errores si la eliminación de la tarjeta falla
      // Podrías establecer un estado de error aquí para mostrar un mensaje al usuario
    }
  };

  useEffect(() => {
    dispatch(fetchPromosInter());
  }, [dispatch]);

  return (
    <div className='flex flex-col justify-center items-center w-screen h-full   text-white'>
 

    <div className='flex flex-col items-center gap-[3rem]  justify-center w-full  mt-[3rem] flex-wrap ' >
    {selectedCard && (
      <Modal card={selectedCard} key={selectedCard.id} closeModal={() => setSelectedCard(null)} />
    )}
      {promos.map((card, index) => (
         <>
         <div  key={index} className='w-full flex  text-sm  justify-center '>

          <div className='flex-col   '>
          <button className='back mt-[0.25rem] items-center flex-col w-[1.7rem] -mr-[0.1rem] h-[6.5rem] rounded-bl-xl rounded-tl-xl text-center shadow-[3px_6px_25px_5px_rgba(0,0,0,0.60)]  backHover2 ' onClick={() => openModal(card)}>
          <p>+</p>
          <p>I</p>
          <p>N</p>
          <p>F</p>
          <p>O</p></button>

          </div>

        
        <div className='w-3/4 max-[510px]:w-11/12 flex max-[510px]:flex-col text-sm shadow-[4px_5px_13px_5px_rgba(0,0,0,0.60)] bg-[#0000007b] border-white justify-center items-center border-[0.005rem] max-[510px]:h-[12rem] max-[360px]:h-[14rem] h-[7rem] rounded-xl mb-[1.5rem]'>

          <div className='flex  justify-center items-center w-1/3 '>
          <img className='max-h-[6.7rem] max-[510px]:mb-[1rem]  max-[510px]:max-h-[4rem] max-[510px]:min-h-[4rem] max-[510px]:w-full object-contain ' src={card.imagen}/>
           </div>
           <div className='flex w-full  max-[510px]:gap-x-[0rem] max-[510px]:text-xs max-[510px]:mb-[1rem] max-[360px]:flex-wrap'>
          <p className='text-[#FF1F97] w-full flex justify-center items-center text-center '>{card.titulo}</p>
          <p className='text-[#3de7e1] w-full flex justify-center items-center text-center '>{ card.parrafo }</p>
          <p className='text-[#FF1F97] w-full flex justify-center items-center text-center '>{ card.parrafo2 }</p>
          <p className='text-[#FF1F97] w-full flex justify-center items-center text-center '>{ card.parrafo3 }</p>
          </div>
           <div className='w-1/4 flex justify-center items-center h-full'>
           <a href={card.infolink} target='_blank' rel="noreferrer" ><button className=' w-fit pt-[0.5rem] pb-[0.5rem]  pr-[0.5rem] pl-[0.5rem] text-white back rounded-md hover:scale-110 transition-all ease-in-out duration-200 max-[510px]:mb-[0.5rem]'> REGISTRATE</button></a>
           </div>
           <div className='absolute mt-[9.5rem] max-[360px]:mt-[16.2rem] max-[510px]:mt-[14.8rem]'>
            <div className='flex gap-[9rem] justify-center w-full max-[510px]:gap-[1rem] max-[997px]:gap-[2.5rem]'>
           <img  className="h-[1.5rem] w-[3rem] object-contain" src={card.infoimagen1} alt="" />
           <img  className="h-[1.5rem] w-[3rem] object-contain" src={card.infoimagen2} alt="" />
           <img  className="h-[1.5rem] w-[3rem] object-contain" src={card.infoimagen3} alt="" />
           <img  className="h-[1.5rem] w-[3rem] object-contain" src={card.infoimagen4} alt="" />
           </div>
           </div>
          
        </div>
        
           </div>
           <div className='flex justify-center text-xs pb-[1rem] -mt-[3rem] ' >
                  <button className='text-white text-center absolute  back w-[7rem] h-[2.5rem] rounded-full hover:cursor-pointer hover:scale-125 transition-all ease-in-out duration-200 hover:bg-fuchsia-600' onClick={() => handleDelete(card.id)}>Eliminar Oferta</button>
                </div>
        </>
      ))}
      
    </div>
    <div className='mt-[4rem]'>
       

    </div>
  </div>
);
};

          