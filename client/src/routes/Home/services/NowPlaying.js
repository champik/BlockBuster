import axios from "../../../utils/axios";

export const getNowPlaying = async () => {
    try{
        const res = await axios.get(`/movie/now_playing`);
        return res.data.results;
    }catch(error){
        return error.response;
    }
}