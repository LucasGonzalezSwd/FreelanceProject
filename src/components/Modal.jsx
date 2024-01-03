import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons';
/* eslint-disable react/prop-types */

export const Modal = ({ card, closeModal }) => {
    return (
      <div className='modal absolute w-full  z-50'>
         <div className="flex flex-col justify-center items-center w-full">
        <div className='modal-content backHome2 max-[510px]:w-full z-50 rounded-md h-full flex flex-col justify-center items-center w-10/12 modal-animation'>
           <div className="w-full flex pl-[1rem] pt-[0.6rem]">
            <img className="max-w-[6rem] max-h-[4rem]" src={card.imagen} alt={card.titulo} />
           </div>
           <div className="w-[2rem] pt-[1rem] pr-[1rem] absolute top-0 right-0 ">
          <button onClick={closeModal}>
          <FontAwesomeIcon className='text-xl' icon={faCircleXmark} />
          </button>
           </div>
           <div className="flex w-full justify-center max-[510px]:mb-[4rem] mb-[2rem]">

<hr  className="border-0 border-t-[0.1rem] w-7/12 max-[963px]:w-8/12  border-[#ff1f977f]"/>
</div>
            <div className="w-3/4 h-full custom-modal-content text-center max-[470px]:text-xs">
            <p className="custom-infoparrafo">{card.infoparrafo}</p>
            
            </div>
            <div className="flex w-full justify-center max-[510px]:mb-[2rem] mt-[2rem]">

<hr  className="border-0 border-t-[0.1rem] w-7/12 max-[963px]:w-8/12  border-[#ff1f977f] max-[510px]:mb-[1rem] mb-[1.5rem]"/>
</div>
            <ul className="flex flex-col max-[470px]:text-sm">
            <h3 className='mb-[0.5rem]'> METODOS DE PAGO Y RETIRO</h3>
            <li ><FontAwesomeIcon className='text-xl mr-[0.2rem]' icon={faCreditCard} />{card.infopago1.toUpperCase()}</li>
            <li><FontAwesomeIcon className='text-xl mr-[0.2rem]' icon={faCreditCard} />{card.infopago2.toUpperCase()}</li>
            <li><FontAwesomeIcon className='text-xl mr-[0.2rem]' icon={faCreditCard} />{card.infopago3.toUpperCase()}</li>
            <li><FontAwesomeIcon className='text-xl mr-[0.2rem]' icon={faCreditCard} />{card.infopago4.toUpperCase()}</li>
            <li><FontAwesomeIcon className='text-xl mr-[0.2rem]' icon={faCreditCard} />{card.infopago5.toUpperCase()}</li>
            </ul>
            <div className='flex gap-[9rem] justify-center w-full max-[510px]:gap-[1rem] max-[997px]:gap-[2.5rem] mt-[1rem]'>
           <img  className="max-h-[2rem] min-h-[2rem] max-[700px]:max-w-[3rem] max-[700px]:min-w-[3rem] max-[700px]:max-h-[3rem] max-[700px]:min-h-[3rem] 
           max-[405px]:max-w-[2rem] max-[405px]:min-w-[2rem] max-[405px]:max-h-[2rem] max-[405px]:min-h-[2rem]min-w-[5rem] max-w-[5rem] object-contain" src={card.infoimagen1} alt="" />
           <img  className="max-h-[2rem] min-h-[2rem] max-[700px]:max-w-[3rem] max-[700px]:min-w-[3rem] max-[700px]:max-h-[3rem] max-[700px]:min-h-[3rem] 
           max-[405px]:max-w-[2rem] max-[405px]:min-w-[2rem] max-[405px]:max-h-[2rem] max-[405px]:min-h-[2rem]min-w-[5rem] max-w-[5rem] object-contain" src={card.infoimagen2} alt="" />
           <img  className="max-h-[2rem] min-h-[2rem] max-[700px]:max-w-[3rem] max-[700px]:min-w-[3rem] max-[700px]:max-h-[3rem] max-[700px]:min-h-[3rem] 
           max-[405px]:max-w-[2rem] max-[405px]:min-w-[2rem] max-[405px]:max-h-[2rem] max-[405px]:min-h-[2rem]min-w-[5rem] max-w-[5rem] object-contain" src={card.infoimagen3} alt="" />
           <img  className="max-h-[2rem] min-h-[2rem] max-[700px]:max-w-[3rem] max-[700px]:min-w-[3rem] max-[700px]:max-h-[3rem] max-[700px]:min-h-[3rem] 
           max-[405px]:max-w-[2rem] max-[405px]:min-w-[2rem] max-[405px]:max-h-[2rem] max-[405px]:min-h-[2rem]min-w-[5rem] max-w-[5rem] object-contain" src={card.infoimagen4} alt="" />
           </div>
           
           <div className='w-full flex justify-center items-center h-full'>
           <a className='w-10/12 p-[1.5rem]' href={card.infolink} target='_blank' rel="noreferrer" ><button className=' w-full pt-[0.5rem] pb-[0.5rem]  pr-[0.5rem] pl-[0.5rem] text-white back rounded-md hover:scale-105 transition-all ease-in-out duration-300 max-[510px]:mb-[0.5rem] backHover2'> REGISTRATE</button></a>
           </div>

            </div>

          
        </div>
      </div>
    );
  };