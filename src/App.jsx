import { useState } from 'react'
import { useEffect } from 'react'
import filmList from './filmList.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <>
    <div className="container mt-5 d-flex justify-content-center">
    <ul className="list-unstyled d-flex flex-wrap p-5">
 {filmList.map((curMovie, index) => {
        return <li key={index} className="mt-2 fs-3 col-6 text-center border border-secondary">
          {curMovie.title} <br /> <span className='text-secondary fs-5 border border-secondary px-4 shadow ' >{curMovie.genre}</span></li>
    })}
     </ul></div>
    </>
  )
}

export default App
