import { Route, Routes } from 'react-router-dom';
import { Home } from './views/Home';
import './App.css'
import { Tienda } from './views/Tienda';
// import { PromosV } from './views/PromoV';
import { Contacto } from './views/Contacto';
import { UserProvider } from './StreamerContext';
import { PanelEspaña } from './views/PanelEspaña';
import { Panel } from './views/Panel';
import { PromosVEspaña } from './views/PromoVEspaña';
import { Navbar } from './components/Navbar';



function App() {

  return (
    <>
    <div className='backHome w-screen h-full -z-50'>
     <Navbar/>
    <UserProvider>
     <Routes>

      <Route path="/" exact element={<Home/>} />
      <Route path="/tienda"  element={<Tienda/>} />
      <Route path="/promos"  element={<PromosVEspaña/>} />
      <Route path="/contacto"  element={<Contacto/>} />
      <Route path="/playmakerAdminPanel/global"  element={<Panel/>} />
      <Route path="/playmakerAdminPanel"  element={<PanelEspaña/>} />
      
      
     </Routes>
     </UserProvider>

     </div>
    </>
  )
}

export default App
