import { useState } from "react";
import moviesArray from "../data/movies.json";

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
                                <div key={movie.id} className="movie">
                                    <h1>{movie.title}</h1>
                                    
                                    {movie.imgURL ?  <img src={movie.imgURL} alt={movie.title} /> : 'Image not available'}
                                    
                                    <p>Year: {movie.year}</p>
                                    <p>Rating: {movie.rating}</p>
                                    { movie.rating >= 8 && <p> RECOMMEND </p> } 
                                    <button onClick={()=>{ deleteMovie(movie.id) }}>Delete</button>
                                </div>
                            )
                        })} 
                    </>     
            }
            

        </section>
    )
}

export default Main;