import {useEffect, useState} from "react";
import {getFilmById} from "../../services/api";
import './PopularFilmDetails.css';

export default function PopularFilmDetails({match: {url}}) {
    console.log(url)
    let [film, setFilm] = useState({});
    useEffect(() => {
        getFilmById(url).then(value => setFilm(value.data))
    }, [])
    console.log(film)
    return (
        <div>
            <h1>{film.title}</h1>
            <figure className="figure, wrap">
                <div className='box'>
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                             className="figure-img img-fluid rounded"
                             alt="filmImage"/>
                    </div>
                    <div>
                        <figcaption className="figure-caption">{film.overview}
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Мова фільму:</th>
                                        <th scope="col">Рік випуску:</th>
                                        <th scope="col">Оцінка:</th>
                                        <th scope="col">Тривалість:</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">{film.original_language}</th>
                                        <td>{film.release_date}</td>
                                        <td>{film.vote_average}</td>
                                        <td>{film.runtime}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </figcaption>
                    </div>
                </div>
            </figure>
        </div>
    );
}