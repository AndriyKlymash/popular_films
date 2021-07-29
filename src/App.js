import './App.css';
import Header from "./components/Header/Header";
import {Route, Switch} from "react-router-dom";
import PopularFilmDetails from "./components/PopularFilmDetails/PopularFilmDetails";
import AllFilms from "./components/AllFilms/AllFilms";

function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path={'/'} render={() => <AllFilms/>}/>
                {/*<Route exact path={'/:id'} render={(props) => {*/}
                {/*    console.log(props)*/}
                {/*    return <PopularFilmDetails {...props}/>*/}
                {/*}}/>*/}
                <Route exact path={'/:id'} render={(props)=>{
                    console.log(props)
                    return <PopularFilmDetails {...props}/>
                }}/>
            </Switch>
        </div>
    );
}

export default App;
