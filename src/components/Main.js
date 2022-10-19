import { useState } from "react";
import moviesArray from "../data/movies.json";
import Movie from "./Movie";

function Main() {

    const [listOfMovies, setListOfMovies ] = useState(moviesArray);


    const deleteMovie = (movieId) => {
        const newList = listOfMovies.filter((movie) => {
            return movie.id !== movieId;
        });
        setListOfMovies(newList);
    }

    return (
        <section className="Main">
            
            { 
                listOfMovies.length === 0
                    ? <p>Sorry, no movies to display yet</p>
                    :
                    <>
                        <p> We currently have {listOfMovies.length} movies in our catalog </p>
                        {listOfMovies.map( movie => {
                            return(
                                <Movie 
                                    key={movie.id} 
                                    details={movie} 
                                    callbackToDelete={deleteMovie} 
                                />
                            )
                        })} 
                    </>     
            }
            

        </section>
    )
}

export default Main;