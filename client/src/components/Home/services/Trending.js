import axios from "../../../utils/axios";

export const getTrending = async () => {
    try{
        const res = await axios.get(`/trending/movie/day`);
        return res.data.results;
    }catch(error){
        return error.response;
    }
}

export const getMovie = async (movieId) => {
    try{
        const res = await axios.get(`/movie/${movieId}`);
        return res.data;
    }catch(error){
        return error.response;
    }
}

export const getMovieTrailer = async (movieId) => {
    try{
        const res = await axios.get(`/movie/${movieId}/videos?`);
        return res.data.results;
    }catch(error){
        return error.response;
    }
}