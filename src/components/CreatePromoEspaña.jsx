import { useDispatch } from "react-redux";
import { useState,useContext } from "react";
import { createPromoEsp } from "../redux/actions";

import {UserContext} from "../StreamerContext"
import { PromoEspañaBorrar } from "./PromoEspañaBorrar";

export const CreatePromoEspaña = () => {
  const dispatch = useDispatch();
  const { user } = useContext(UserContext); 
  const [promoData, setPromoData] = useState({
    imagen: '',
    titulo:'',
    parrafo:'',
    parrafo2:'',
    parrafo3:'',
    infolink: '',
    infoimagen1:'',
    infoimagen2:'',
    infoimagen3:'',
    infoimagen4:'',
    infoparrafo: '',
    infopago1: '',
    infopago2:'',
    infopago3:'',
    infopago4:'',
    infopago5:'',
  });
  const [error, setError] = useState('');

 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await dispatch(createPromoEsp(promoData, user.username, user.password)); // Pasando las credenciales
      if (response.payload && response.payload.error) {
        setError(response.payload.error);
      } else {
        setPromoData({
          imagen: '',
          titulo:'',
          parrafo:'',
          parrafo2:'',
          parrafo3:'',
          infolink: '',
          infoimagen1:'',
          infoimagen2:'',
          infoimagen3:'',
          infoimagen4:'',
          infoparrafo: '',
          infopago1: '',
          infopago2:'',
          infopago3:'',
          infopago4:'',
          infopago5:'',

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
        <hr className="border-0 border-t-[0.1rem] w-8/12  border-[#ff1f977f]"/>
      </div>
      <div className='w-full justify-center text-2xl pt-[1rem] text-white flex'>
        <h1>CREAR Y ELIMINAR PROMOS PRINCIPALES</h1>
      </div>
      <div className='flex flex-col pb-[3rem] justify-center items-center w-screen h-full text-white'>
        <form className='w-11/12  bg-slate-900 border-white border-[0.005rem] h-full items-center justify-center flex flex-col mt-[4rem] p-[2rem] gap-[1.7rem] rounded-lg' onSubmit={handleSubmit}>
          <div className="flex gap-x-[1.5rem]">
          <input className='text-black w-[12rem] h-[4rem] ' type="text" name="imagen" placeholder="URL de la imagen" value={promoData.imagen} onChange={handleChange} />
          <input className='text-black w-full' type="text" name="titulo" placeholder="Título 1" value={promoData.titulo} onChange={handleChange} />
          <input className='text-black w-full ' name="parrafo" placeholder="Título 2" value={promoData.parrafo} onChange={handleChange} />
          <input className='text-black w-full ' name="parrafo2" placeholder="Título 3" value={promoData.parrafo2} onChange={handleChange} />
          <input className='text-black w-full ' name="parrafo3" placeholder="Título 4" value={promoData.parrafo3} onChange={handleChange} />
          <input className='text-black w-full' type="text" name="infolink" placeholder="Enlace del ref." value={promoData.infolink} onChange={handleChange} />
          </div>
          <div className="flex-col w-full">
          <div className="flex gap-x-[1rem] w-full mb-[2rem]">
          <input className='text-black w-3/4' type="text" name="infoimagen1" placeholder="Enlace de la imagen" value={promoData.infoimagen1} onChange={handleChange} />
          <input className='text-black w-3/4' type="text" name="infoimagen2" placeholder="Enlace de la imagen 1" value={promoData.infoimagen2} onChange={handleChange} />
          <input className='text-black w-3/4' type="text" name="infoimagen3" placeholder="Enlace de la imagen 2" value={promoData.infoimagen3} onChange={handleChange} />
          <input className='text-black w-3/4' type="text" name="infoimagen4" placeholder="Enlace de la imagen 3" value={promoData.infoimagen4} onChange={handleChange} />
         
          </div>
          <div className="flex flex-col w-full items-center justify-center max-[510px]:mb-[4rem] mb-[1rem]">

<hr  className="border-0 border-t-[0.1rem] w-10/12 max-[963px]:w-8/12  border-white"/>
         <h1 className="text-center">INFO EXTRA</h1>
</div> 
          </div>
          <div className="flex gap-x-[1rem] w-3/4 justify-center mb-[1rem]">
          <textarea  className='text-black w-3/4 h-[15rem] '  placeholder="Texto descriptivo del casino" onChange={handleChange} value={promoData.infoparrafo} name="infoparrafo"  ></textarea>
          </div>

          <div className="flex gap-x-[1rem] w-full mb-[2rem]">
            
          <input className='text-black w-3/4' type="text" name="infopago1" placeholder="Forma de pago 1" value={promoData.infopago1} onChange={handleChange} />
          <input className='text-black w-3/4' type="text" name="infopago2" placeholder="Forma de pago 2" value={promoData.infopago2} onChange={handleChange} />
          <input className='text-black w-3/4' type="text" name="infopago3" placeholder="Forma de pago 3" value={promoData.infopago3} onChange={handleChange} />
          <input className='text-black w-3/4' type="text" name="infopago4" placeholder="Forma de pago 4" value={promoData.infopago4} onChange={handleChange} />
          <input className='text-black w-3/4' type="text" name="infopago5" placeholder="Forma de pago 5" value={promoData.infopago5} onChange={handleChange} />
         
          </div>
          
          {error && <p className='text-red-500 text-sm'>{error}</p>} {/* Mostrar mensaje de error */}
          <button className='text-center text-xs back w-[7rem] h-[2.5rem] rounded-full hover:cursor-pointer hover:scale-125 transition-all ease-in-out duration-200 hover:bg-fuchsia-600' type="submit">Crear Promo</button>
        </form>

        <div className="mt-[5rem]">
        <PromoEspañaBorrar/>
        </div>
      </div>
    </div>
  );
};
