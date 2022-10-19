import { useState } from "react";
import moviesArray from "./data/movies.json";

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

function App() {

  const [listOfMovies, setListOfMovies] = useState(moviesArray);

  const deleteMovie = (movieId) => {
    const newList = listOfMovies.filter((movie) => {
      return movie.id !== movieId;
    });
    setListOfMovies(newList);
  }

  return (
    <div className="App">
      <Header numberOfMovies={listOfMovies.length} />
      <Main movies={listOfMovies} callbackToDelete={deleteMovie} />
      <Footer />
    </div>
  );
}

export default App;
