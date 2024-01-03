import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
 
  HomeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  BuildingStorefrontIcon,
  FireIcon
} from '@heroicons/react/24/outline';


const products = [
  {  description: 'Inicio',href: '/', icon: HomeIcon, id:"sobre"},
  {  description: 'Tienda', href: '/tienda', icon: BuildingStorefrontIcon, id:"contacto" },
  {  description: 'Contacto', href: '/contacto', icon: ChatBubbleOvalLeftEllipsisIcon  },
  {  description: 'Promos', href: '/promos', icon:FireIcon   },
];

/* eslint-disable-next-line react/prop-types */
export default function MobileNavBar() {
  const [pick, setPick] = useState(false);

  
  const changeArrow = () => {
    setPick(!pick);
  };

  return (
    <header className="w-full h-[5rem] bg-[#00000088] justify-start items-start  flex z-50">
      <nav className="flex z-50   max-w-6xl items-center justify-start p-6 lg:px-8" >
       
      <div className='absolute right-0 max-[470px]:mr-[0.2rem] max-[400px]:mr-[0.2rem] max-[360px]:mr-[0.2rem]'>
            <img className='w-[7rem]' src="https://storage.googleapis.com/casino-playmaker/PLAYERMAKERTV-COLOR-4-Fondo-TXT-transparente.png" alt="" />
        </div>
        
        <div className="lg:flex lg:gap-x-12 relative">
          <div className="flex items-center gap-x-1 text-sm font-semibold leading-6  outline-none">
            <div className="flex">
              <button className="flex items-end" onClick={changeArrow}>
                <FontAwesomeIcon icon={faBars} size="2xl" style={{ color: '#fff' }} />
                
              </button>
            </div>
          </div>
        
          {pick && (
          
            <div className="absolute mt-[1.2rem] ml-[0.45rem] -left-8 top-full z-10  w-screen max-w-xs overflow-hidden  rounded-lg bg-white shadow-lg ring-1 ">
              <div className="p-2 ">
                {products.map((item) => (
                  <div
                  key={item.description}
                    /* eslint-disable-next-line react/no-unknown-property */
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6  hover:bg-gray-200"
                    >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg ">
                      <item.icon className="h-6 w-6 text-black group-hover:text-[#d44491] " aria-hidden="true" />
                    </div>
                    <div className="flex-auto ">
                      <a href={item.href} className="block font-semibold ">
                        {item.name}
                        <span className="absolute inset-0 " />
                      </a>
                      <p className="mt-1 text-black group-hover:text-[#d44491]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
       
          )}
        </div>
      </nav>
      </header>
  );
}
