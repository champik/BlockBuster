import axios from "../../utils/axios";

export const fetchTrending = async () => {
    try{
        const res = await axios.get(`/trending/movie/day`);
        return res.data.results;
    }catch(error){
        return error.response;
    }
}

export const fetchCinemaList = async (type, category) => {
    try{
        const res = await axios.get(`/${type}/${category}`);
        return res.data.results;
    }catch(error){
        return error.response;
    }
}