import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchOfertas } from '../redux/actions';
import Cookies from 'js-cookie';
import axios from "axios";
import { Footer } from '../components/Footer';
import { PromosV } from './PromoV';


export const PromosVEspaña = () => {
  const dispatch = useDispatch();
  const ofertas = useSelector((state) => state.ofertas);
  const [isInEspaña, setIsInEspaña] = useState(false);
  

  useEffect(() => {
    dispatch(fetchOfertas());
     const fetchData = async () => {
      try {
        const response = await axios.get('https://get.geojs.io/v1/ip/country.json');
        const countryCode = response.data.country;
       
        if (countryCode === 'ES') {
          Cookies.set('isInSpain', 'true', { expires: 1 });
          setIsInEspaña(true);
        }
        
      } catch (error) {
        console.error('Error al obtener la ubicación:', error);
      }
    };
    fetchData();

  }, [dispatch]);


   
  return (


    <div className='flex justify-center flex-col items-center w-screen  h-full text-white '>
      <h1 className='text-2xl mt-[2rem]'>PROMOCIONES VIGENTES</h1>
    {isInEspaña ? ( <div className='flex gap-x-[2.5rem] max-[1035px]:gap-[1rem]  max-[580px]:gap-[1rem]  h-full justify-center max-[580px]:w-11/12 w-full flex-wrap'>
     
      {ofertas.map((oferta, index) => (
         <div key={index} className='w-[26rem] mt-[5.5rem] min-[1650px]:mt-[4.5rem] min-[1650px]:w-[32rem] p-[0.2rem] flex flex-col bg-[#00000089] border-[#2e80fc] border-[0.005rem] mb-[1rem] max-[580px]:mb-[0rem] min-h-[16rem] rounded-xl flex-wrap max-[400px]:w-11/12 max-[400px]:max-h-[12rem]  max-[400px]:min-h-[12rem]' >
         <div className=''>
         <img src={oferta.imagen} className=' max-h-[14.5rem]  max-[400px]:max-h-[10rem]  max-[400px]:min-h-[10rem] max-[530px]:max-h-[14.1rem]  max-[530px]:min-h-[14.1rem]  w-full object-contain ' />
         </div>
        
        
          <div className=' '>
         <a href={oferta.link} className='w-full flex justify-center' target="_blank" rel="noopener noreferrer"><button className=' absolute mt-[0.35rem] w-[7.5rem] pt-[0.5rem] pb-[0.5rem]  pr-[0.5rem] pl-[0.5rem] text-white back rounded-md hover:scale-105 transition-all ease-in-out duration-200'>REGISTRATE</button></a>
          </div>
        </div>


      ))}
    </div> ) : ( 
      <div>
        <PromosV/>
      </div> )}

    <div className='mt-[10rem]'>
          <Footer/>
        </div>
  </div> 
  );
};
