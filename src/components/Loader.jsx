import { Fragment } from 'react';


export const Loader = () => {
  return (
    <Fragment>
      <button type="button" className="mt-[2rem] w-full rounded-md flex-col py-2 px-4 flex items-center justify-center text-[#FF1F97] disabled:opacity-50 disabled:cursor-not-allowed">
        <svg className="animate-spin h-[2.5rem] w-[2.5rem]" viewBox="0 0 24 24">
          {/* Primer círculo estático con solo la línea exterior */}
          <circle cx="12" cy="12" r="10" fill="none" strokeWidth="2" strokeLinecap="round" stroke="#615f5fd3" strokeDasharray="calc(3.14159 * 10 * 2), calc(3.14159 * 10 * 2)" />
          {/* Segundo círculo lila giratorio */}
          <circle cx="12" cy="12" r="10" fill="none" strokeWidth="4" strokeLinecap="round" stroke="#FF1F97" strokeDasharray="calc(3.14159 * 10 * 2 * 0.5)" />
        </svg>
        CARGANDO
      </button>
      
      <div className="w-full h-screen flex flex-col items-center">
        <img src="https://storage.googleapis.com/casino-playmaker/5.png" alt="" className="max-h-[15rem] max-w-[15rem]" />
      </div>
    </Fragment>
  );
};
