import { useEffect,useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  fetchOfertasInter } from '../redux/actions';
import {UserContext} from "../StreamerContext"

import axios from 'axios';

export const OfertaInterBorrar = () => {
  const dispatch = useDispatch();
  const { user } = useContext(UserContext); 
  const ofertas = useSelector((state) => state.ofertasInter);

  const handleDelete = async (id) => {

    try {
      const response = await axios.delete(`https://barbershopclub.hair/api/deleteOfertaInter/${id}`, {
        headers: {
          nombre: user.username,
          password: user.password,
        },
      });

      if (response.status === 200) {
        dispatch(fetchOfertasInter()); // Vuelve a cargar las tarjetas después de eliminar
      }
    } catch (error) {
      console.error('Error al eliminar la tarjeta:', error);
      // Manejo de errores si la eliminación de la tarjeta falla
      // Podrías establecer un estado de error aquí para mostrar un mensaje al usuario
    }
  };

  useEffect(() => {
    dispatch(fetchOfertasInter());
  }, [dispatch]);

  return (
    <div className='flex flex-col pb-[3rem] justify-center  items-center w-screen h-full  text-white'>
      {ofertas.length === 0 ? (
        <p>Cargando...</p>
      ) : (
        <div className='flex gap-x-[2.5rem]  justify-center   w-11/12 flex-wrap'  >
          {ofertas && ofertas.map((card, index) => (

            <div key={index} className='w-[26rem] mt-[5.5rem] min-[1650px]:mt-[4.5rem] min-[1650px]:w-[32rem] p-[0.2rem] flex flex-col bg-[#00000089] border-[#2e80fc] border-[0.005rem] mb-[2.5rem]   min-h-[16rem] rounded-xl flex-wrap' >
            <div className=''>
            <img src={card.imagen} className=' max-h-[14.5rem]  w-full object-contain  ' />
            </div>
           
           
             <div className=' '>
            <a href={card.link} className='w-full flex justify-center' target="_blank" rel="noopener noreferrer"><button className=' absolute mt-[0.35rem] w-[7.5rem] pt-[0.5rem] pb-[0.5rem]  pr-[0.5rem] pl-[0.5rem] text-white back rounded-md hover:scale-105 transition-all ease-in-out duration-200'>REGISTRATE</button></a>
             </div>
             
              <div className='flex justify-center text-xs pb-[1rem] ' >
                  <button className='text-white text-center absolute mt-[3.5rem] back w-[7rem] h-[2.5rem] rounded-full hover:cursor-pointer hover:scale-125 transition-all ease-in-out duration-200 hover:bg-fuchsia-600' onClick={() => handleDelete(card.id)}>Eliminar Oferta</button>
                </div>
            </div>
          
          ))}
        </div>
       
      )}
       <div className='h-[4rem] w-full'>
            
            </div>
    </div>
  );
};
