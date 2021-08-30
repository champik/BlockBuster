import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Movie from "./component";
import { useParams } from "react-router-dom";
import { getMovie } from "../../utils/helpers";
import { setLoading } from "../../redux/loading/action";

const MovieContainer = props => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const [movieData, setMovieData] = useState(null);
    useEffect(() => {
        getMovieHandler(id);
        // eslint-disable-next-line
    }, []);

    const getMovieHandler = async (id) => {
        dispatch(setLoading(true));
        setMovieData(await getMovie(id))
        dispatch(setLoading(false))
    }
    return <Movie movie={movieData}/>;
};

export default MovieContainer;