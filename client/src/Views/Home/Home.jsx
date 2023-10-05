import { useState } from "react";
import Countries from "../../Components/Countries/Countries";
import Nav from "../../Components/Home/Nav/Nav";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  // Función para manejar la búsqueda
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <Nav onSearch={handleSearch} /> {/* Pasa la función de búsqueda */}
      <Countries searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
}
