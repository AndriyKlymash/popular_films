import axios from "axios";

let options = {
    baseURL: 'https://api.themoviedb.org/3/'
}

let axiosInstance = axios.create(options);

const getPopularFilms = () => {
    return axiosInstance.get('movie/popular?api_key=6a711027d5cccea8f5118a8d199711f5&language=en-US&page=1')
}

const getFilmById = (movieID) =>{
    return axiosInstance.get('movie'+movieID+'?api_key=6a711027d5cccea8f5118a8d199711f5&language=en-US')
}

const getBySearch = (searchText) => {
    return axiosInstance.get('https://api.themoviedb.org/3/search/movie?query='+searchText+'&api_key=6a711027d5cccea8f5118a8d199711f5')
}

export {
    getPopularFilms,
    getFilmById,
    getBySearch,
    axiosInstance
}
