import { Cards } from "../components/Cards"
import { Footer } from "../components/Footer"


export const Tienda = () => {
  return (
    <div className="text-white h-full  z-50 ">
        <div>

        <Cards/>
        </div>
        <div className="mt-[5rem]">
          <Footer/>
        </div>
    </div>
  )
}
