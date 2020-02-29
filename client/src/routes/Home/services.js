import axios from "../../utils/axios";

export const fetchCinemaList = async (type, category) => {
    try{
        const res = await axios.get(`/${type}/${category}`);
        return res.data.results;
    }catch(error){
        return error.response;
    }
}