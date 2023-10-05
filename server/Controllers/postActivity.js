const { Activity, Country } = require("../src/db");

const createActivity = async (req, res) => {
  try {
    const { nombre, dificultad, duracionHoras, temporada, descripcion, pais } =
      req.body;

    const newActivity = await Activity.create({
      nombre,
      dificultad,
      duracionHoras,
      temporada,
      descripcion,
      pais,
    });

    const countries = await Country.findAll({
      where: { name: pais },
    });

    if (!countries || countries.length === 0) {
      return res
        .status(404)
        .json({ message: "País no encontrado", success: false });
    }

    // Asocia la actividad al país encontrado.
    await newActivity.setCountries(countries);

    res
      .status(201)
      .json({ message: "Actividad creada exitosamente", success: true });
  } catch (error) {
    console.error("Error al crear la actividad:", error);
    res
      .status(500)
      .json({ error: "Error interno del servidor", success: false });
  }
};

module.exports = createActivity;
