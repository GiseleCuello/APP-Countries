const { Activity } = require("../src/db");
const { Op } = require("sequelize");

const getActivities = async (req, res) => {
  try {
    const { activityFilter } = req.query;
    // Verifica si se proporciona un filtro y realiza la búsqueda
    let activities;
    if (activityFilter) {
      activities = await Activity.findAll({
        where: {
          nombre: {
            [Op.iLike]: `%${activityFilter}%`,
          },
        },
      });
    } else {
      activities = await Activity.findAll();
    }

    if (!activities || activities.length === 0) {
      return res
        .status(404)
        .json({ message: "No se encontraron actividades en la base de datos" });
    }

    const activityData = activities.map((act) => ({
      nombre: act.nombre,
      dificultad: act.dificultad,
      duracionHoras: act.duracionHoras,
      temporada: act.temporada,
      descripcion: act.descripcion,
      pais: act.pais,
    }));
    res.json(activityData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getActivities;
