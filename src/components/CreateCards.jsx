import { useState,useContext  } from 'react';
import { useDispatch } from 'react-redux';
import { createCard } from '../redux/actions'; 
import { CardParaBorrar } from './CardParaBorrar';
import {UserContext} from "../StreamerContext"

export const CreateCards = () => {
    const dispatch = useDispatch();
    const { user } = useContext(UserContext); 
    const [cardData, setCardData] = useState({
      imagen: '',
      titulo: '',
      parrafo: '',
      precio: '',
    });
    const [error, setError] = useState('');
    
  
   
   
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await dispatch(createCard(cardData, user.username, user.password)); 
      if (response.payload && response.payload.error) {
        setError(response.payload.error);
      } else {
        setCardData({
          imagen: '',
          titulo: '',
          parrafo: '',
          precio: '',
        });
        setError('');
        
        // Aquí puedes hacer otras acciones después de crear la tarjeta
      }
    } catch (error) {
      console.error('Error al crear una tarjeta:', error);
      setError('Error al crear una tarjeta. Inténtalo de nuevo más tarde.');
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardData({
      ...cardData,
      [name]: value,
    });
  };
  return (

    <div className='w-full h-full'>
       <div className='w-full justify-center text-2xl pt-[1rem] text-white flex'>
        CREAR Y ELIMINAR TARJETAS PARA LA TIENDA
       </div>
    <div className='flex pb-[2rem] justify-center items-center w-full h-full text-white'>
      <form className='w-[15rem] bg-slate-950 h-[25rem] items-center justify-center flex flex-col mt-[2rem]  gap-[1.7rem] rounded-lg ' onSubmit={handleSubmit}>
        <input className='text-black w-[12.3rem]' type="text" name="imagen" placeholder="URL de la imagen" value={cardData.imagen} onChange={handleChange} />
        <input className='text-black w-[12.3rem]' type="text" name="titulo" placeholder="Título" value={cardData.titulo} onChange={handleChange} />
        <textarea className=' text-black h-[6rem] w-[12.3rem] ' name="parrafo" placeholder="Descripción" value={cardData.parrafo} onChange={handleChange}></textarea>
        <input className='text-black w-[12.3rem]' type="number" name="precio" placeholder="Precio" value={cardData.precio} onChange={handleChange} />
        {error && <p className='text-red-500 text-sm'>{error}</p>} {/* Mostrar mensaje de error */}
        <button className='text-center text-xs back w-[7rem] h-[2.5rem] rounded-full hover:cursor-pointer hover:scale-125 transition-all ease-in-out duration-200 hover:bg-fuchsia-600' type="submit">Crear Tarjeta</button>
      </form>
    </div>
    <div className='h-full'>
        <CardParaBorrar/>
    </div>
    </div>
  );
};
