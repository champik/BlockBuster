import React, { useEffect, useReducer } from "react";
import { useDispatch } from "react-redux";
import NowPlaying from "./component";
import { getNowPlaying } from "../services";
import { getMovie, getMovieTrailer } from "../../../shared/services";
import { reducer } from "./reducer";
import { setNowPlaying, setTrailer, setImage } from "./actions";
import { minutesToHours } from "../../../utils/helpers";

import { setLoading } from "../../../redux/loading/action";

const NowPlayingContainer = () => {
    const [state, dispatchAction] = useReducer(reducer, {});
    const dispatch = useDispatch();

    useEffect(() => {
        getNowPlayingHandler();
        // eslint-disable-next-line
    }, []);

    const getNowPlayingHandler = async () => {
        dispatch(setLoading(true));
        const nowPlayingList = await getNowPlaying();
        Promise.all(
            nowPlayingList.map(async movie => {
                const movieData = await getMovieHandler(movie.id);
                return {
                    id: movie.id,
                    title: movie.title,
                    genres: [{ name: "test" }],
                    rating: movie.vote_average,
                    releaseDate: movie.release_date,
                    poster: movie.poster_path,
                    ...movieData
                };
            })
        )
            .then(response => response.sort((a, b) => b.rating - a.rating))
            .then(response => {
                dispatchAction(setNowPlaying(response));
                dispatchAction(setImage(response[0].image));
            })
            .then(() => dispatch(setLoading(false)));
    };

    const getMovieHandler = async id => {
        const movie = await getMovie(id);
        const video = await getMovieTrailer(id);
        const trailer = video.find(video => video.type === "Trailer");
        const movieData = {
            genres: movie.genres,
            tagline: movie.tagline,
            runtime: minutesToHours(movie.runtime),
            image: movie.backdrop_path,
            trailer: trailer.key
        };
        return movieData;
    };

    const setTrailerHandler = key => {
        dispatchAction(setTrailer(key));
    };
    const setImageHandler = index => {
        const activeImage = state.nowPlaying[index].image;
        dispatchAction(setImage(activeImage));
    };

    return (
        <NowPlaying
            nowPlaying={state.nowPlaying}
            trailer={state.trailer}
            setTrailer={setTrailerHandler}
            image={state.image}
            setImage={setImageHandler}
        />
    );
};

export default NowPlayingContainer;
