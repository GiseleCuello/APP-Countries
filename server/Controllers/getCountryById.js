const axios = require("axios");
const { Country, Activity } = require("../src/db");

const getCountryById = async (req, res) => {
  const { id } = req.params;
  const formattedId = id.toUpperCase();
  try {
    const country = await Country.findOne({
      where: { id: formattedId },
      include: [Activity],
    });
    if (!country) {
      return res.status(404).json({ message: "País no encontrado" });
    }
    res.json(country);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getCountryById;
