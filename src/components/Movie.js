function Movie({details, callbackToDelete}) {

    
    return(
        <section className="Movie">
            <h1>{details.title}</h1>
            
            { details.imgURL 
                ? <img src={details.imgURL} alt={details.title} /> 
                : 'Image not available'
            }
            
            <p>Year: {details.year}</p>
            <p>Rating: {details.rating}</p>
            {details.rating >= 8 && <p>RECOMMEND</p>}

            <button onClick={()=>{callbackToDelete(details.id)}}>Delete</button>
        </section>
    );
}

export default Movie;