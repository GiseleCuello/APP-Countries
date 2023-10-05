const { Country } = require("../src/db");

const getCountries = async (req, res) => {
  try {
    const countries = await Country.findAll();

    if (!countries) {
      return res
        .status(404)
        .json({ message: "No se encontraron países en la base de datos" });
    }

    const countriesData = countries.map((coun) => ({
      id: coun.id,
      name: coun.name,
      imagen: coun.imagen,
      continente: coun.continente,
      capital: coun.capital,
      población: coun.población,
      mapa: coun.mapa,
    }));
    res.status(200).json(countriesData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getCountries;
