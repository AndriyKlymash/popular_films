import './SingleFim.css';
import {
    Link
} from "react-router-dom";

export default function SingleFilm({item}) {
    return (
        <div className="card card">
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className="card-img-top"
                 alt="imageFilms"/>
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.overview}</p>
                <Link to={`/${item.id}`} className="btn btn-primary">More information about film</Link>
            </div>
        </div>
    );
}