import {
  GET_CARDS,
  GET_PROMOS,
  GET_REGISTROS,
  GET_PROMOS_INTER,
  GET_REGISTROS_INTER,
  GET_OFERTAS,
  GET_OFERTAS_INTER,
  POST_CARDS,
  POST_OFERTAS_INTER,
  POST_REGISTROS_INTER,
  POST_PROMOS_INTER,
  POST_PROMOS,
  POST_OFERTAS,
  POST_REGISTROS,
} from "./actionType";
import axios from "axios";
export const fetchCards = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://barbershopclub.hair/api/getCards"
      );
      dispatch({
        type: GET_CARDS,
        payload: response.data.cards,
      });
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };
};
export const fetchPromos = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://barbershopclub.hair/api/getPromos"
      );
      dispatch({
        type: GET_PROMOS,
        payload: response.data.promos,
      });
    } catch (error) {
      console.error("Error fetching promos:", error);
    }
  };
};
export const fetchPromosInter = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://barbershopclub.hair/api/getPromos/inter"
      );
      dispatch({
        type: GET_PROMOS_INTER,
        payload: response.data.promosInter,
      });
    } catch (error) {
      console.error("Error fetching promos:", error);
    }
  };
};
export const fetchRegistros = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://barbershopclub.hair/api/getRegisters"
      );
      dispatch({
        type: GET_REGISTROS,
        payload: response.data.registros,
      });
    } catch (error) {
      console.error("Error fetching registros:", error);
    }
  };
};
export const fetchRegistrosInter = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://barbershopclub.hair/api/getRegisters/inter"
      );
      dispatch({
        type: GET_REGISTROS_INTER,
        payload: response.data.registrosInter,
      });
    } catch (error) {
      console.error("Error fetching registros:", error);
    }
  };
};
export const fetchOfertas = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://barbershopclub.hair/api/getOfertas"
      );
      dispatch({
        type: GET_OFERTAS,
        payload: response.data.ofertas,
      });
    } catch (error) {
      console.error("Error fetching registros:", error);
    }
  };
};
export const fetchOfertasInter = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://barbershopclub.hair/api/getOfertas/inter"
      );
      dispatch({
        type: GET_OFERTAS_INTER,
        payload: response.data.ofertasInter,
      });
    } catch (error) {
      console.error("Error fetching registros:", error);
    }
  };
};

export const createCard = (cardData, username, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://barbershopclub.hair/api/createCard",
        cardData,
        {
          headers: {
            nombre: username,
            password: password,
          },
        }
      );

      if (response.status === 200) {
        dispatch({
          type: POST_CARDS,
          payload: response.data, // Aquí se supone que 'card' es la tarjeta creada
        });
        return response.data;
      } else {
        console.error("Error al crear una tarjeta:", response.statusText);
        throw new Error("Error al crear una tarjeta");
      }
    } catch (error) {
      console.error("Error al crear una tarjeta:", error);
      throw error;
    }
  };
};

export const createOfertaInter = (cardData, username, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://barbershopclub.hair/api/createOfertaInter",
        cardData,
        {
          headers: {
            nombre: username,
            password: password,
          },
        }
      );

      if (response.status === 200) {
        dispatch({
          type: POST_OFERTAS_INTER,
          payload: response.data, // Aquí se supone que 'card' es la tarjeta creada
        });
        return response.data;
      } else {
        console.error("Error al crear una oferta:", response.statusText);
        throw new Error("Error al crear una oferta");
      }
    } catch (error) {
      console.error("Error al crear una oferta:", error);
      throw error;
    }
  };
};
export const createOfertaEspaña = (cardData, username, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://barbershopclub.hair/api/createOferta",
        cardData,
        {
          headers: {
            nombre: username,
            password: password,
          },
        }
      );

      if (response.status === 200) {
        dispatch({
          type: POST_OFERTAS,
          payload: response.data, // Aquí se supone que 'card' es la tarjeta creada
        });
        return response.data;
      } else {
        console.error("Error al crear una oferta:", response.statusText);
        throw new Error("Error al crear una oferta");
      }
    } catch (error) {
      console.error("Error al crear una oferta:", error);
      throw error;
    }
  };
};

export const createRegistrosInter = (cardData, username, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://barbershopclub.hair/api/createRegisterinter",
        cardData,
        {
          headers: {
            nombre: username,
            password: password,
          },
        }
      );

      if (response.status === 200) {
        dispatch({
          type: POST_REGISTROS_INTER,
          payload: response.data, // Aquí se supone que 'card' es la tarjeta creada
        });
        return response.data;
      } else {
        console.error("Error al crear una registro:", response.statusText);
        throw new Error("Error al crear una registro");
      }
    } catch (error) {
      console.error("Error al crear una registro:", error);
      throw error;
    }
  };
};
export const createRegistrosEspaña = (cardData, username, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://barbershopclub.hair/api/createRegister",
        cardData,
        {
          headers: {
            nombre: username,
            password: password,
          },
        }
      );

      if (response.status === 200) {
        dispatch({
          type: POST_REGISTROS,
          payload: response.data, // Aquí se supone que 'card' es la tarjeta creada
        });
        return response.data;
      } else {
        console.error("Error al crear una registro:", response.statusText);
        throw new Error("Error al crear una registro");
      }
    } catch (error) {
      console.error("Error al crear una registro:", error);
      throw error;
    }
  };
};

export const createPromoInter = (cardData, username, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://barbershopclub.hair/api/createPromointer",
        cardData,
        {
          headers: {
            nombre: username,
            password: password,
          },
        }
      );

      if (response.status === 200) {
        dispatch({
          type: POST_PROMOS_INTER,
          payload: response.data, // Aquí se supone que 'card' es la tarjeta creada
        });
        return response.data;
      } else {
        console.error("Error al crear una registro:", response.statusText);
        throw new Error("Error al crear una registro");
      }
    } catch (error) {
      console.error("Error al crear una registro:", error);
      throw error;
    }
  };
};
export const createPromoEsp = (cardData, username, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://barbershopclub.hair/api/createPromo",
        cardData,
        {
          headers: {
            nombre: username,
            password: password,
          },
        }
      );

      if (response.status === 200) {
        dispatch({
          type: POST_PROMOS,
          payload: response.data, // Aquí se supone que 'card' es la tarjeta creada
        });
        return response.data;
      } else {
        console.error("Error al crear una registro:", response.statusText);
        throw new Error("Error al crear una registro");
      }
    } catch (error) {
      console.error("Error al crear una registro:", error);
      throw error;
    }
  };
};
