import { useUser } from "../StreamerContext";
import { useState } from "react";
import axios from "axios";

export const Login = () => {
  const { updateUser } = useUser();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const hashPassword = async (password) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashedPassword = hashArray.map((byte) => String.fromCharCode(byte)).join("");
    return hashedPassword;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const hashedPassword = await hashPassword(loginData.password);

      const response = await axios.post("https://barbershopclub.hair/api/getadmin", {
        nombre: loginData.username,
        password: loginData.password,
      });
  
      // Si la solicitud al servidor es exitosa (código de estado 200)
      if (response.status === 200) {
        // Actualiza los datos del usuario con los ingresados en el formulario
        updateUser(loginData);
  
        // Almacena las credenciales en el localStorage después de un inicio de sesión exitoso
        localStorage.setItem('username', loginData.username);
        localStorage.setItem('password', hashedPassword);
  
        // Redirige al usuario a otra página o realiza alguna acción
      }
    } catch (error) {
      setError("Credenciales incorrectas");
      console.error("Error al iniciar sesión:", error);
    }
  };
  return (
    <div className=" min-h-screen w-full flex justify-center ">
      <form className="w-[26rem] min-[1650px]:mt-[2.5rem] min-[1650px]:w-[32rem] p-[2rem] pb-[1rem] flex flex-col bg-[#00000089] border-white border-[0.005rem] min-[1650px]:p-[2.5rem] h-[20rem] rounded-xl flex-wrap shadow-[4px_5px_13px_5px_rgba(0,0,0,0.60)] mt-[5rem] gap-y-[2rem] justify-center items-center" method="post" onSubmit={handleLogin}>

        <input
        className="w-3/4 h-[3.5rem] rounded-md"
          type="text"
          name="username"
          placeholder="Nombre de usuario"
          value={loginData.username}
          onChange={handleInputChange}
        />
        <input
        className="w-3/4 h-[3.5rem] rounded-md"
          type="password"
          name="password"
          placeholder="Contraseña"
          value={loginData.password}
          onChange={handleInputChange}
        />
        <button className=" back w-fit pt-[0.5rem] pb-[0.5rem]   pr-[0.5rem] pl-[0.5rem] text-white back rounded-md hover:scale-110 transition-all ease-in-out duration-200" type="submit">
          Iniciar Sesión
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};
