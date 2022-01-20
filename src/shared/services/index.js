import axios from "../../utils/axios";

export const fetchMovie = async (type, id) => {
    try{
        const res = await axios.get(`/${type}/${id}`);
        return res.data;
    }catch(error){
        return error.response;
    }
}

export const fetchMovieVideos = async (type, id) => {
    try{
        const res = await axios.get(`/${type}/${id}/videos`);
        return res.data.results;
    }catch(error){
        return error.response;
    }
}