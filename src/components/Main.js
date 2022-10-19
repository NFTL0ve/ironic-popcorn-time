import Movie from "./Movie";

function Main({movies, callbackToDelete}) {

    return (
        <section className="Main">
            
            { 
                movies.length === 0
                    ? <p>Sorry, no movies to display yet</p>
                    :
                    <>
                        {movies.map( movie => {
                            return(
                                <Movie 
                                    key={movie.id} 
                                    details={movie} 
                                    callbackToDelete={callbackToDelete} 
                                />
                            )
                        })} 
                    </>     
            }
            

        </section>
    )
}

export default Main;