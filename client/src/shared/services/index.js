import axios from "../../utils/axios";

export const fetchMovie = async (movieId) => {
    try{
        const res = await axios.get(`/movie/${movieId}`);
        return res.data;
    }catch(error){
        return error.response;
    }
}

export const fetchMovieTrailer = async (movieId) => {
    try{
        const res = await axios.get(`/movie/${movieId}/videos?`);
        return res.data.results;
    }catch(error){
        return error.response;
    }
}