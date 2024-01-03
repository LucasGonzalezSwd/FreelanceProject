// reducer.js

import {
  GET_CARDS,
  GET_PROMOS,
  GET_PROMOS_INTER,
  GET_REGISTROS,
  GET_REGISTROS_INTER,
  GET_OFERTAS_INTER,
  GET_OFERTAS,
  POST_CARDS,
  POST_OFERTAS_INTER,
  POST_REGISTROS_INTER,
  POST_REGISTROS,
  POST_PROMOS_INTER,
  POST_OFERTAS,
  POST_PROMOS,
} from "./actionType";

const initialState = {
  cards: [],
  promos: [],
  promosInter: [],
  registros: [],
  registrosInter: [],
  ofertas: [],
  ofertasInter: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS:
      return {
        ...state,
        cards: action.payload || [],
      };
    case GET_PROMOS:
      return {
        ...state,
        promos: action.payload || [],
      };
    case GET_PROMOS_INTER:
      return {
        ...state,
        promosInter: action.payload || [],
      };
    case GET_REGISTROS:
      return {
        ...state,
        registros: action.payload || [],
      };
    case GET_REGISTROS_INTER:
      return {
        ...state,
        registrosInter: action.payload,
      };
    case GET_OFERTAS:
      return {
        ...state,
        ofertas: action.payload || [],
      };
    case GET_OFERTAS_INTER:
      return {
        ...state,
        ofertasInter: action.payload || [],
      };
    case POST_CARDS:
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };
    case POST_OFERTAS_INTER:
      return {
        ...state,
        ofertasInter: [...state.ofertasInter, action.payload],
      };
    case POST_OFERTAS:
      return {
        ...state,
        ofertas: [...state.ofertas, action.payload],
      };
    case POST_REGISTROS_INTER:
      return {
        ...state,
        registrosInter: [...state.registrosInter, action.payload],
      };
    case POST_REGISTROS:
      return {
        ...state,
        registros: [...state.registros, action.payload],
      };
    case POST_PROMOS_INTER:
      return {
        ...state,
        promosInter: [...state.promosInter, action.payload],
      };
    case POST_PROMOS:
      return {
        ...state,
        promos: [...state.promos, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
