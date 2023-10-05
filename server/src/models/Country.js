const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Country",
    {
      id: {
        type: DataTypes.STRING(3),
        primaryKey: true,
        allowNull: false,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      imagen: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      continente: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      capital: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      población: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      mapa: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
