import { useEffect,useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../redux/actions';
import axios from 'axios';
import {UserContext} from "../StreamerContext"

export const CardParaBorrar = () => {
  const dispatch = useDispatch();
  const { user } = useContext(UserContext); 
  const cards = useSelector((state) => state.cards);

  const handleDelete = async (id) => {
   

    try {
      const response = await axios.delete(`https://barbershopclub.hair/api/deleteCard/${id}`, {
        headers: {
          nombre: user.username,
          password: user.password,
        },
      });

      if (response.status === 200) {
        dispatch(fetchCards()); // Vuelve a cargar las tarjetas después de eliminar
      }
    } catch (error) {
      console.error('Error al eliminar la tarjeta:', error);
      // Manejo de errores si la eliminación de la tarjeta falla
      // Podrías establecer un estado de error aquí para mostrar un mensaje al usuario
    }
  };

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <div className='flex flex-col pb-[3rem] justify-center  items-center w-screen h-full  text-white'>
      {cards.length === 0 ? (
        <p>Cargando...</p>
      ) : (
        <div className='flex gap-x-[2.5rem]  justify-center   w-11/12 flex-wrap'>
          {cards && cards.map((card) => (
            <div className='w-[13rem] mb-[2.5rem] bg-slate-900 h-[25rem] items-center  flex flex-col mt-[4rem]  gap-[1.85rem] rounded-3xl' key={card.id}>
              <div className='w-full flex h-[5rem]  justify-center pt-[0.5rem] items-start'>
                <img src={card.imagen} className=' max-h-[8rem]  h-fit w-[9rem]' alt={card.titulo} />
              </div>
              <div className='h-[12.5rem] max-h-[12.5rem]  flex flex-col justify-start items-center'>
                <h1 className='text-center h-fit pt-[1.7rem] p-[0.5rem] text-2xl'>{card.titulo.toUpperCase()}</h1>
                <p  className='text-center h-fit text-xs p-[0.7rem] pb-[2.8rem]'>{card.parrafo}</p>
              </div>
              <div className='flex items-end justify-center h-full pt-[2.4rem] pb-[1rem]'>
                <a href="https://streamelements.com/playermakertv/store" target="_blank" rel="noopener noreferrer" className='text-center '>
                  <button className='text-center back w-[7rem] h-[2.5rem] rounded-full hover:cursor-pointer hover:scale-125 transition-all ease-in-out duration-200 hover:bg-fuchsia-600 '>{card.precio}</button>
                </a>  
                
              </div>
              <div className='flex justify-center text-xs pb-[1rem] '>
                  <button className='text-white text-center absolute -mt-[1.8rem] back w-[7rem] h-[2.5rem] rounded-full hover:cursor-pointer hover:scale-125 transition-all ease-in-out duration-200 hover:bg-fuchsia-600' onClick={() => handleDelete(card.id)}>Eliminar Tarjeta</button>
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
