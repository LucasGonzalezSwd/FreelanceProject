import { useEffect } from 'react';
import { useUser } from '../StreamerContext';
import { Login } from './Login';
import { CreateCards } from '../components/CreateCards';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CreateOfertaEspaña } from '../components/CreateOfertaEspaña';
import { CreateRegistrosEspaña } from '../components/CreateRegistrosEspaña';
import { CreatePromoEspaña } from '../components/CreatePromoEspaña';

export const PanelEspaña = () => {
  const { user } = useUser();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const handleAuthentication = () => {
      // Verificar si el usuario tiene credenciales almacenadas en el contexto
      if (user.username !== "" && user.password !== "") {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    };

    // Realizar la verificación de autenticación al cargar la página o al iniciar el componente
    handleAuthentication();
  }, [user]);

  // Mostrar el componente Login si no está autenticado
  if (!authenticated) {
    return <Login />;
  }


  // Mostrar el resto de los componentes si está autenticado
  return (
    <div className="text-white h-full w-full flex flex-col">
           <div className='w-11/12 mt-[2rem] justify-end flex'>
        <Link to="/panel"><button className='back text-center text-xs back rounded-full hover:cursor-pointer hover:scale-125 transition-all ease-in-out duration-200 p-[1rem] hover:bg-fuchsia-600'>
            Ir al Panel Internacional
          </button></Link>
      </div>
      <div className="">
        <CreateCards />
      </div>
       <div className="flex w-full pl-[2rem]">
        <CreateOfertaEspaña />
      </div>
      <div>
        <CreateRegistrosEspaña />
      </div>
      <div className='mb-[10rem]'>
        <CreatePromoEspaña />
      </div>
    
    </div>
  );
};
