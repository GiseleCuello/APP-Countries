const axios = require("axios");
const { Op } = require("sequelize");
const { Country } = require("../src/db");

const getCountryByName = async (req, res) => {
  const { name } = req.query;
  try {
    const countries = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });

    res.json(countries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getCountryByName;
