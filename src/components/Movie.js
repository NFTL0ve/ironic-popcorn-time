function Movie(props) {
    return(
        <section className="Movie">
            <h1>{props.details.title}</h1>
            
            { props.details.imgURL 
                ? <img src={props.details.imgURL} alt={props.details.title} /> 
                : 'Image not available'
            }
            
            <p>Year: {props.details.year}</p>
            <p>Rating: {props.details.rating}</p>
            {props.details.rating >= 8 && <p>RECOMMEND</p>}
        </section>
    );
}

export default Movie;