import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../redux/actions';


export const Cards = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  
  return (
    <div className='flex pb-[3rem] justify-center items-center w-screen h-full  text-white'>
     {cards.length === 0 ? (
      <p>Cargando...</p>
    ) : (
      <div className='flex gap-x-[2.5rem]  justify-center  w-11/12 flex-wrap'>
       
        {cards && cards.map((card) => (
            <div className='w-[13rem] max-[420px]:w-11/12 max-[510px]:w-3/4 mb-[2.5rem] bg-slate-900 h-[25rem] items-center  flex flex-col mt-[4rem] max-[510px]:mb-[1.5rem] gap-[1.85rem] rounded-3xl' key={card.id}>
              <div className='w-full flex h-[5rem]  justify-center pt-[0.5rem] items-start'>
                <img src={card.imagen} className=' max-h-[8rem] min-h-[8rem] max-w-[8rem] min-w-[8rem] object-contain  ' alt={card.titulo} />
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
          </div>
        ))}
      </div>
        )}
      
    </div>
  );
};
