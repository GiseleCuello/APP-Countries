describe('getCountries', () => {
});
    // Prueba que la fn getCountries devuelva una lista de países con sus respectivos datos cuando la consulta a la DB sea exitosa
    it('should return a list of countries with their respective data when the database query is successful', () => {
      // Simula la fn Country.findAll() para devolver una lista de países
      const countries = [
        {
          id: 1,
          name: 'Country 1',
          imagen: 'image1.jpg',
          continente: 'Continent 1',
          capital: 'Capital 1',
          población: 'Population 1',
          mapa: 'map1.jpg',
        },
        {
          id: 2,
          name: 'Country 2',
          imagen: 'image2.jpg',
          continente: 'Continent 2',
          capital: 'Capital 2',
          población: 'Population 2',
          mapa: 'map2.jpg',
        },
      ];
      Country.findAll.mockResolvedValue(countries);

      // Llama a la fn getCountries
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      getCountries(req, res);

      expect(res.status).toHaveBeenCalledWith(200);

      expect(res.json).toHaveBeenCalledWith([
        {
          id: 1,
          name: 'Country 1',
          imagen: 'image1.jpg',
          continente: 'Continent 1',
          capital: 'Capital 1',
          población: 'Population 1',
          mapa: 'map1.jpg',
        },
        {
          id: 2,
          name: 'Country 2',
          imagen: 'image2.jpg',
          continente: 'Continent 2',
          capital: 'Capital 2',
          población: 'Population 2',
          mapa: 'map2.jpg',
        },
      ]);
    });

//este test está configurando un comportamiento simulado para Country.findAll() de manera que se pueda probar cómo se comporta el código cuando se llama a la fn, sin tener que depender de una DB real en el entorno de pruebas.