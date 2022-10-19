import { useState } from "react";

function AddMovie({callbackToCreate}) {

    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const newMovie = {
            title: title,
            year: year,
            rating: 7
        }

        callbackToCreate(newMovie);

        //clear form
        setTitle("");
        setYear("");

    }

    return (
        <div className="AddMovie">
            <form onSubmit={handleFormSubmit}>

                <input
                    type="text"
                    name="title"
                    placeholder="enter the title"
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                />

                <input
                    type="number"
                    name="year"
                    placeholder="2001"
                    min={1900}
                    max={2050}
                    value={year}
                    onChange={(e) => { setYear(e.target.value) }}
                />

                <button>Create new movie</button>
            </form>
        </div>
    )
}

export default AddMovie;