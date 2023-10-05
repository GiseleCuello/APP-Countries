const axios = require("axios");
const { Country } = require("../src/db");
const URL = "http://localhost:5000/countries";

const postApiCountries = async (req, res) => {
  try {
    const response = await axios.get(`${URL}`);
    const countriesData = response.data;

    const countryCreate = countriesData.map((coun) => ({
      id: coun.cca3,
      name: coun.name.common,
      imagen: coun.flags.png,
      continente:
        coun.continents.length > 0 ? coun.continents[0] : "Desconocido",
      capital:
        coun.capital && coun.capital.length > 0
          ? coun.capital[0]
          : "Desconocida",
      población: coun.population,
      mapa: coun.maps.googleMaps,
    }));

    const newCountry = await Country.bulkCreate(countryCreate);
    res.status(200).json({ message: "Países guardados exitosamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postApiCountries;
