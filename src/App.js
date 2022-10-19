import { useState } from "react";
import moviesArray from "./data/movies.json";

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

function App() {

  const [listOfMovies, setListOfMovies] = useState(moviesArray);

  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");


  const deleteMovie = (movieTitle) => {
    const newList = listOfMovies.filter((movie) => {
      return movie.title !== movieTitle;
    });
    setListOfMovies(newList);
  }

  const createMovie = (e) => {
    e.preventDefault();
    
    const newMovie = {
      title: title,
      year: year,
      rating: 7
    }

    setListOfMovies( (prevListOfMovies) => {
      const newList = [newMovie, ...prevListOfMovies];
      return newList;
    });


    //clear form
    setTitle("");
    setYear("");

  }


  return (
    <div className="App">

      <Header numberOfMovies={listOfMovies.length} />

      <form onSubmit={createMovie}>

        <input 
          type="text" 
          name="title" 
          placeholder="enter the title" 
          value={title} 
          onChange={(e)=>{ setTitle(e.target.value)}} 
        />

        <input 
          type="number" 
          name="year" 
          placeholder="2001" 
          min={1900}
          max={2050}
          value={year} 
          onChange={(e)=>{ setYear(e.target.value) }} 
        />

        <button>Create new movie</button>
      </form>

      <Main movies={listOfMovies} callbackToDelete={deleteMovie} />
      <Footer />
    </div>
  );
}

export default App;
