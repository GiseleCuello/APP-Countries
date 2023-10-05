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

const initialState = {
  allCountries: [],
  oneCountry: [],
  detail: {},
  activity: [],
  activities: [],
  continentFilter: "",
  orderFilter: "",
  populationOrder: "",
  activityFilter: "",
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        oneCountry: action.payload,
      };
    case GET_ALLCOUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    case GET_ACTIVITY:
      return {
        ...state,
        activities: action.payload,
      };
    case POST_ACTIVITY:
      return {
        ...state,
        activity: action.payload,
      };
    case FILTER_CONTINENT:
      return {
        ...state,
        continentFilter: {
          ...state.continentFilter,
          continente: action.payload,
        },
      };
    case ORDER_COUNTRY:
      let orderCountries = [...state.allCountries]; // Hacer una copia de los países
      state.allCountries.sort((a, b) => {
        if (action.payload === "A-Z") {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        } else {
          if (a.name > b.name) {
            return -1;
          }
          if (b.name > a.name) {
            return 1;
          }
          return 0;
        }
      });
      return {
        ...state,
        allCountries: orderCountries,
        orderFilter: action.payload,
      };

    case ORDER_POPULATION:
      let sortedCountries = [...state.allCountries]; // Hacer una copia de los países

      state.allCountries.sort((a, b) => {
        if (action.payload === "A-Z") {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        } else {
          if (a.name > b.name) {
            return -1;
          }
          if (b.name > a.name) {
            return 1;
          }
          return 0;
        }
      });

      return {
        ...state,
        allCountries: sortedCountries,
        populationOrder: action.payload, // Actualiza la opción de ordenamiento por población
      };

    default:
      return state;
  }
}
