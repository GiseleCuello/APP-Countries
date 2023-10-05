import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import FilterContinent from "../../Filtros/FilterContinent";
import OrderCountries from "../../Filtros/OrderCountries";
import OrderPopulation from "../../Filtros/OrderPopulation";
import { Link } from "react-router-dom";
import style from "../../Filtros/Filter.module.css";

const Nav = ({ onSearch, searchTerm, setSearchTerm }) => {
  return (
    <nav>
      <SearchBar
        onSearch={onSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <FilterContinent />
      <OrderCountries />
      <OrderPopulation />
      <Link className={style.link} to="/activities">
        Descubrí actividades
      </Link>
      <Link className={style.linkAbout} to="/about">
        Acerca de la página
      </Link>
    </nav>
  );
};

export default Nav;
