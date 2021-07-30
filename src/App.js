import './App.css';
import Header from "./components/Header/Header";
import {Route, Switch} from "react-router-dom";
import PopularFilmDetails from "./components/PopularFilmDetails/PopularFilmDetails";
import AllFilms from "./components/AllFilms/AllFilms";
import {useEffect, useState} from "react";
import {getPopularFilms, getBySearch} from "./services/api";

function App() {
    const [searchInput, setSearchInput] = useState('');
    const [films, setFilms] = useState([]);

    useEffect(() => {
        getPopularFilms().then(value => setFilms(value.data.results))
    }, []);

    async function fetchSearchFilm(event) {
        event.preventDefault();
        const {data: {results}} = await getBySearch(searchInput);
        setFilms(results);
    }


    return (
        <div className="App">
            <Header
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                fetchSearchFilm={fetchSearchFilm}
            />
            <Switch>
                <Route exact path={'/'} render={() => <AllFilms films={films}/>}/>
                <Route exact path={'/:id'} render={(props) => {
                    console.log(props)
                    return <PopularFilmDetails {...props}/>
                }}/>
            </Switch>
        </div>
    );
}

export default App;
