import { useEffect, useState } from "react";
import axios from 'axios';
import Movies from "./movies";
const Read = () => {
    const [myMovies, setMovie] = useState([]);

    const Reload = () => {
        console.log("Reloading movie data...");
        axios.get('http://localhost:4000/api/movies')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error reloading data:", error);
            });
    };
    useEffect(
        () => {
            //do some http client work
            axios.get('http://localhost:4000/api/movies')
                .then((response) => {
                    console.log(response.data);
                    setMovie(response.data);
                })
                .catch((error) => { console.log(error) });
        }, []
    );

    
    return (
        <div>
            <h1>Hello from Read component</h1>
            <Movies myMovies={myMovies} ReloadData={Reload}></Movies>
        </div>
    );
}

export default Read;