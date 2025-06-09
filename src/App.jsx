import filmList from './filmList.js';
import FilmList from './components/FilmList.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Lista di Film</h1>
      <FilmList films={filmList} />
    </div>
  );
}
    
export default App
     

 



