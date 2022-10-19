import "./Header.css"

function Header(props){
    return(
        <header className="Header">
            <h1>Popcorn Time!</h1>
            <h2> We currently have {props.numberOfMovies} movies in our catalog </h2>
        </header>
    )
}

export default Header;