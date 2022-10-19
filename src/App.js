import { useState } from "react";
import moviesArray from "./data/movies.json";

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';
import AddMovie from "./components/AddMovie";

function App() {

  const [listOfMovies, setListOfMovies] = useState(moviesArray);


  const deleteMovie = (movieTitle) => {
    const newList = listOfMovies.filter((movie) => {
      return movie.title !== movieTitle;
    });
    setListOfMovies(newList);
  }


  const createMovie = (movieDetails) => {
    setListOfMovies( (prevListOfMovies) => {
      const newList = [movieDetails, ...prevListOfMovies];
      return newList;
    });
  }


  return (
    <div className="App">
      <Header numberOfMovies={listOfMovies.length} />
      <AddMovie callbackToCreate={createMovie} />
      <Main movies={listOfMovies} callbackToDelete={deleteMovie} />
      <Footer />
    </div>
  );
}

export default App;
