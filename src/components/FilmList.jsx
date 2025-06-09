import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import filmList from "../filmList.js";

const FilmList = ({ films }) => {
  const [selectedType, setSelectedType] = useState("tutti");
  const [filmFiltrati, setFilmFiltrati] = useState(films);
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
  const newFilmFiltrati = films.filter(
    (curMovie) =>
      (selectedType === "tutti" || selectedType === curMovie.genre) &&
      curMovie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setFilmFiltrati(newFilmFiltrati);
}, [selectedType, searchTerm]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Scegli il tuo film</h1>

      {/* Form di ricerca */}
      <form className="mb-4">
        <div className="d-flex">
          <h5 className="col-3">Cerca il film:</h5>
          <input type="text" placeholder="Cerca..." className="form-control" onChange={(event) => setSearchTerm(event.target.value)} />
        </div>
      </form>

      {/* Select per filtrare */}
      <div className="d-flex justify-content-center">
        <select
          value={selectedType}
          onChange={(event) => setSelectedType(event.target.value)}
          className="form-select mt-3 w-50"
        >
           <option value="Genere">Genere</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>
        </select>
      </div>

      {/* Lista film */}
      <ul className="list-unstyled d-flex flex-wrap p-5">
        {filmFiltrati.map((curMovie, index) => (
          <li
            key={index}
            className="mt-2 fs-3 col-6 text-center border border-secondary"
          >
            {curMovie.title} <br />
            <span className="text-secondary fs-5 border border-secondary px-4 shadow">
              {curMovie.genre}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilmList;
