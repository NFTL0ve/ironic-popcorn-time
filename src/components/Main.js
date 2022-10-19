import { useState } from "react";
import moviesArray from "../data/movies.json";
import Movie from "./Movie";

function Main() {

    const [listOfMovies, setListOfMovies ] = useState(moviesArray);

    const deleteMovie = (movieId) => {
        //const newList = listOfMovies.splice(xxx, 1); //VERY BAD: splice mutates the original array (never modify state directly)
        const newList = listOfMovies.filter( (movie) => {
            // if(movie.id === movieId){
            //     return false;
            // } else {
            //     return true;
            // }

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
                                <Movie key={movie.id} details={movie} />
                            )
                        })} 
                    </>     
            }
            

        </section>
    )
}

export default Main;