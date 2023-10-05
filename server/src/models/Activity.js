const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Activity",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      dificultad: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 5,
        },
        allowNull: false,
      },

      duracionHoras: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          isFloat: true, // Asegura que sea un número decimal
          min: 1,
          max: 24,
        },
      },

      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      temporada: {
        type: DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera"),
        allowNull: false,
      },

      pais: {
        type: DataTypes.ARRAY(DataTypes.STRING), // Define un array de strings
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
