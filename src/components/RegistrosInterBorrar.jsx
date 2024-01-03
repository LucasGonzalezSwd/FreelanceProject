import { useEffect,useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  fetchRegistrosInter } from '../redux/actions';
import axios from 'axios';
import { faCoins,faDollarSign, faSackDollar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {UserContext} from "../StreamerContext"

export const RegistrosInterBorrar = () => {
  const dispatch = useDispatch();
const { user } = useContext(UserContext); 
  const registros = useSelector((state) => state.registrosInter);

  const handleDelete = async (id) => {
   

    try {
      const response = await axios.delete(`https://barbershopclub.hair/api/deleteRegisterinter/${id}`, {
        headers: {
          nombre: user.username,
          password: user.password,
        },
      });

      if (response.status === 200) {
        dispatch(fetchRegistrosInter()); // Vuelve a cargar las tarjetas después de eliminar
      }
    } catch (error) {
      console.error('Error al eliminar la tarjeta:', error);
      // Manejo de errores si la eliminación de la tarjeta falla
      // Podrías establecer un estado de error aquí para mostrar un mensaje al usuario
    }
  };

  useEffect(() => {
    dispatch(fetchRegistrosInter());
  }, [dispatch]);

  return (
    <div className='flex flex-col pb-[3rem] justify-center  items-center w-screen h-full  text-white'>
      {registros.length === 0 ? (
        <p>Cargando...</p>
      ) : (
        <div className='flex gap-x-[2.5rem] justify-center   w-11/12 flex-wrap'  >
          {registros && registros.map((card, index) => (
            <div className='w-[26rem] max-[470px]:-mt-[8rem] max-[510px]:-mt-[2rem]  max-[1134px]:mt-[1rem] max-[1294px]:-mt-[2.1rem] max-[1034px]:-mt-[1rem] max-[1094px]:-mt-[2.2rem] max-[510px]:w-full max-[510px]:mr-[0.4rem] max-[510px]:ml-[0.4rem]   min-[1650px]:mt-[2.5rem] -mt-[3.5rem] min-[1650px]:w-[32rem] p-[2rem] pb-[1rem] flex flex-col bg-[#00000089] border-white border-[0.005rem] max-[1300px]:-mt-[8.6rem] min-[1650px]:p-[2.5rem] h-[20rem] rounded-xl flex-wrap shadow-[4px_5px_13px_5px_rgba(0,0,0,0.60)]  max-[1100px]:-mt-[8.8rem] mb-[6rem] max-[470px]:mb-[0rem] max-[1034px]:mb-[0rem] max-[1094px]:mb-[0rem]  max-[1134px]:mb-[2rem] max-[1294px]:mb-[5rem]' key={index}>
          <div className='object-contain -mt-[3rem] w-full min-[1650px]:-mt-[3.5rem] flex justify-center items-center'>
            <img src={card.imagen} className='h-[10rem] w-3/4 flex object-contain'/>
          </div>
            <p className='text-[#FF1F97] text-center text-sm -mt-[1.5rem]'> <FontAwesomeIcon icon={faDollarSign} className='text-white text-sm' /> {card.titulo.toUpperCase()}</p>
            <p className='text-[#3de7e1] text-sm text-center '> <FontAwesomeIcon className='text-white text-sm' icon={faSackDollar} /> {card.parrafo.toUpperCase()}</p>
            <p className='text-[#FF1F97] text-sm text-center '><FontAwesomeIcon className='text-white text-sm' icon={faCoins} /> {card.parrafo2.toUpperCase()}</p>
             <div className='w-full flex justify-center '>

            <a href={card.link} target='_blank' rel="noreferrer" ><button className=' w-fit pt-[0.5rem] pb-[0.5rem] mt-[1.5rem]  pr-[0.5rem] pl-[0.5rem] text-white back rounded-md hover:scale-110 transition-all ease-in-out duration-200'>REGISTRATE</button></a>
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
