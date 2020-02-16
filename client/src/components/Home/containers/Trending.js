import React, { useEffect, useReducer } from "react";
import { useDispatch } from "react-redux";
import Trending from "../components/Trending";
import { getTrending, getMovie, getMovieTrailer } from "../services/Trending";
import { reducer } from "../reducers/Trending";
import { setTranding, setTrailer, setImage } from "../actions/Trending";
import { minutesToHours } from "../../../utils/helpers";

import { setLoading } from "../../../shared/components/Loader/action";

const TrendingContainer = () => {
    const [state, dispatchAction] = useReducer(reducer, {});
    const dispatch = useDispatch();

    useEffect(() => {
        getTrendingHandler();
        // eslint-disable-next-line
    }, []);

    const getTrendingHandler = async () => {
        dispatch(setLoading(true));
        const trandingList = await getTrending();
        Promise.all(
            trandingList.map(async movie => {
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
            .then(response => {
                dispatchAction(setTranding(response));
                dispatchAction(setImage(response[0].image));
            })
            .then(response => dispatch(setLoading(false)));
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
        const activeImage = state.tranding[index].image;
        dispatchAction(setImage(activeImage));
    };

    return (
        <Trending
            tranding={state.tranding}
            trailer={state.trailer}
            setTrailer={setTrailerHandler}
            image={state.image}
            setImage={setImageHandler}
        />
    );
};

export default TrendingContainer;
