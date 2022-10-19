function Movie({details}) {
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
        </section>
    );
}

export default Movie;