/* eslint-disable react/prop-types */

import { useState } from "react";

export const Age = ({ handleAgeSelection }) => {
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleButtonClick = (isOver18Selected) => {
    if (!isOver18Selected) {
      setShowErrorMessage(true);
    } else {
      handleAgeSelection(isOver18Selected);
    }
  };

  return (
    <div className="w-screen absolute top-0 z-50 min-h-screen bg-black text-white">
      <div className="flex flex-col items-center justify-center w-full mt-[4rem]">
        <img src="https://storage.googleapis.com/casino-playmaker/PLAYERMAKERTV-COLOR-5-1.png" alt="" className="h-[25rem] w-[25rem] max-[500px]:h-[20rem] max-[500px]:w-[20rem] max-[380px]:h-[18rem] max-[380px]:w-[18rem]" />
        <p className="text-white text-lg -mt-[2rem] mb-[1rem]">
          ¿Tienes más de 18 años?
        </p>
      </div>
      <div className="gap-[2rem] w-full flex justify-center">
        <button
          className="text-white rounded-md hover:scale-105 transition-all ease-in-out duration-200 max-[380px]:w-[6rem] w-[7rem] back p-[0.5rem]"
          onClick={() => handleButtonClick(false)}
        >
          No
        </button>
        <button
          className="text-white max-[380px]:w-[6rem] w-[7rem] rounded-md hover:scale-105 transition-all ease-in-out duration-200 back p-[0.5rem]"
          onClick={() => handleButtonClick(true)}
        >
          Sí
        </button>
      </div>
      {showErrorMessage && (
        <p className="text-red-500 z-50 w-full flex justify-center mt-[0.85rem] text-2xl">
          Debes ser mayor de edad para continuar
        </p>
      )}
    </div>
  );
};
