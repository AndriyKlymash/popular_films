import SingleFilm from "../SingleFilm/SingleFilm";
import React, {useEffect, useState} from "react";
import {getPopularFilms} from "../../services/api";

export default function AllFilms() {
    let [popularFilms, setPopularFilms] = useState([]);
    useEffect(() => {
        getPopularFilms().then(value => setPopularFilms(value.data.results))
    }, []);

    return (
        <div>
            <div className='popularFilms'>
                {
                    popularFilms.map(value => <SingleFilm
                        key={value.id}
                        item={value}
                    />)
                }
            </div>
        </div>
    );
}