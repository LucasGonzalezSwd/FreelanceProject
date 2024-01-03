import { useState,useContext } from 'react';
import { useDispatch } from 'react-redux';
import { createOfertaEspaña } from '../redux/actions'; // Asegúrate de que la ruta de importación sea correcta
import {UserContext} from "../StreamerContext"
import { OfertaEspañaBorrar } from './OfertasEspañaBorrar';

export const CreateOfertaEspaña = () => {
  const dispatch = useDispatch();
  const { user } = useContext(UserContext); 
  const [promoData, setPromoData] = useState({
    imagen: '',
    link: '',
  });
  const [error, setError] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await dispatch(createOfertaEspaña(promoData, user.username, user.password)); // Pasando las credenciales
      if (response.payload && response.payload.error) {
        setError(response.payload.error);
      } else {
        setPromoData({
          imagen: '',
          link: '',
        });
        setError('');
        
      }
    } catch (error) {
      console.error('Error al crear una oferta:', error);
      setError('Error al crear una oferta. Inténtalo de nuevo más tarde.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPromoData({
      ...promoData,
      [name]: value,
    });
  };

  return (

    <div className='flex flex-col'>
        <div className="flex w-full justify-center mb-[3rem]">

<hr  className="border-0 border-t-[0.1rem] w-8/12  border-[#ff1f977f]"/>
</div>
       <div className='w-full justify-center text-2xl pt-[1rem] text-white flex'>
        <h1> CREAR Y ELIMINAR OFERTAS</h1>
      </div>
    <div className='flex flex-col pb-[3rem] justify-center items-center w-screen h-full text-white'>
      <form className='w-[30rem] bg-slate-800 h-[18rem] items-center justify-center flex flex-col mt-[4rem] p-[2rem] gap-[1.7rem] rounded-lg' onSubmit={handleSubmit}>
        <input className='text-black w-3/4' type="text" name="imagen" placeholder="URL de la imagen" value={promoData.imagen} onChange={handleChange} />
       
        <input className='text-black w-3/4' type="text" name="link" placeholder="Enlace de la oferta" value={promoData.link} onChange={handleChange} />
        {error && <p className='text-red-500 text-sm'>{error}</p>} {/* Mostrar mensaje de error */}
        <button className='text-center text-xs back w-[7rem] h-[2.5rem] rounded-full hover:cursor-pointer hover:scale-125 transition-all ease-in-out duration-200 hover:bg-fuchsia-600' type="submit">Crear Oferta</button>
      </form>

      <div>
        <OfertaEspañaBorrar/>
      </div>
    </div>
    </div>
  );
};
