
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { Footer } from '../components/Footer';
import { useEffect } from 'react';
export const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [numero, setNumero] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [serviceId, setServiceId] = useState('');
  const [templateId, setTemplateId] = useState('');
  const [userId, setUserId] = useState('');
  const form = useRef();

  useEffect(() => {
    // Realizar la solicitud para obtener la configuración de EmailJS al cargar el componente
    fetch('https://barbershopclub.hair/api/getEmailData')
      .then((response) => response.json())
      .then((data) => {
        // Manejar los datos obtenidos
        setServiceId(data.serviceId);
        setTemplateId(data.templateId);
        setUserId(data.userId);
      })
      .catch((error) => {
        console.error('Error fetching emailjs configuration:', error);
        // Manejar el error si ocurre
      });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, userId)
      .then(() => {
        // Limpiar campos después de enviar el correo
        setNombre('');
        setEmail('');
        setMensaje('');
        setNumero('')
      })
      .catch((error) => {
        console.log(error.text);
      });
  };
  
    return (
      <div className='w-screen flex flex-col items-center h-full mt-[7rem]'>
        <div className='absolute ml-[1rem] w-4/6 max-[1110px]:w-3/4 '>
           <img className='absolute rounded-full back right-0 w-[5.5rem] max-[1110px]:-mt-[6rem]  -mt-[5rem] h-[5.5rem]' src="https://storage.googleapis.com/casino-playmaker/1.png" alt="" />
        </div>
        <form className='flex flex-col w-2/4 max-[1110px]:w-3/4' ref={form} onSubmit={sendEmail}>
          <label className='pb-[0.2rem] text-white'>Nombre Completo</label>
          <input
            className='rounded-md text-white h-[2rem] bg-[#ff1f97ab]'
            type='text'
            name='user_name'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <label className='pb-[0.2rem] text-white'>Email</label>
          <input
            className='rounded-md text-white h-[2rem] bg-[#ff1f97ab]'
            type='email'
            name='user_email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className='pb-[0.2rem] text-white'>Nº De Telefono</label>
          <input
            className='rounded-md text-white h-[2rem] bg-[#ff1f97ab]'
            type='text'
            name='contact_number'
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
          <label className='pb-[0.2rem] text-white'>Mensaje</label>
          <textarea
            className='rounded-md h-[5rem] text-white bg-[#ff1f97ab]'
            name='message'
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
          
          <div className='w-full flex justify-center mt-[1.5rem]'>
            <input
              className='text-white w-[7rem] rounded-md hover:scale-105 transition-all ease-in-out duration-200 back p-[0.5rem] '
              type='submit'
              value='Send'
            />
          </div>
        </form>

        <div className='mt-[10rem]'>
          <Footer/>
        </div>
      </div>
    );
};