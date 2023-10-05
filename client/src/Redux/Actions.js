import {
  FILTER_CONTINENT,
  GET_ACTIVITY,
  GET_ALLCOUNTRIES,
  GET_COUNTRIES,
  GET_DETAIL,
  ORDER_COUNTRY,
  ORDER_POPULATION,
  POST_ACTIVITY,
} from "./ActionTypes";
import axios from "axios";


export const orderPopulation = (order) => {
  return {
    type: ORDER_POPULATION,
    payload: order,
  };
};

export const orderCountry = (order) => {
  return {
    type: ORDER_COUNTRY,
    payload: order,
  };
};

export const filterContinent = (continente) => {
  return {
    type: FILTER_CONTINENT,
    payload: continente,
  };
};

export const postActivity = (activityData) => {
  const endpoint = `http://localhost:3001/countries/activity`;

  return  (dispatch) => {
    try {
      const { data } = axios.post(endpoint, activityData)
      .then((response) =>
      dispatch({
        type: POST_ACTIVITY,
        payload: data, // Agrega "success" a la respuesta
      }))
    } catch (error) {
      console.error("Error al crear la actividad: ", error);
      
    }
  }
} 
      

export const getActivity = (activityFilter) => {
  const endpoint = `http://localhost:3001/countries/activity?activityFilter=${activityFilter}`;

  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      return dispatch({
        type: GET_ACTIVITY,
        payload: data,
      });
    } catch (error) {
      console.error("Error al mostrar la actividad: ", error);
    }
  };
};

export const getDetail = (id) => {
  const endpoint = `http://localhost:3001/countries/${id}`;

  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      return dispatch({
        type: GET_DETAIL,
        payload: data,
      });
    } catch (error) {
      console.error("Error al obtener el país por ID: ", error);
      throw error; // Propaga el error para manejarlo en el componente Detail
    }
  };
};

export const getCountriesByName = (payload) => {
  const endpoint = `http://localhost:3001/countries/name/?name=${payload}`;

  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);

      return dispatch({
        type: GET_COUNTRIES,
        payload: data,
      });
    } catch (error) {
      console.error("Error al obtener el país por nombre: ", error);
    }
  };
};

export const getAllCountries = () => {
  const endpoint = `http://localhost:3001/countries/`;

  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      return dispatch({
        type: GET_ALLCOUNTRIES,
        payload: data,
      });
    } catch (error) {
      console.error("Error al obtener el país", error);
    }
  };
};
