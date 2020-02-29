import React, { useEffect, useReducer } from "react";
import Cinemas from "./component";
import { fetchCinemaList } from "../services";
import { setMovies, setactiveCategory, setLoading } from "./actions";
import { reducer } from "./reducer";


const CinemasContainer = props => {
    const { title, categories, type } = props;

    const iniTialState = { activeCategory: categories[0].slag };

    const [state, dispatchAction] = useReducer(reducer, iniTialState);

    useEffect(() => {
        getMoviesList(state.activeCategory);
        // eslint-disable-next-line
    }, [state.activeCategory]);

    const getMoviesList = async category => {
        dispatchAction(setLoading(true));
        const moviesList = await fetchCinemaList(type, category);
        const movies = moviesList
            .map(movie => {
                return {
                    id: movie.id,
                    poster: movie.poster_path,
                    title: movie.original_title,
                    rating: movie.vote_average
                };
            })
            .sort((a, b) => b.rating - a.rating);
        dispatchAction(setMovies(movies));
        dispatchAction(setLoading(false));
    };

    const setactiveCategoryHandler = (category) => {
        dispatchAction(setactiveCategory(category));
    }

    return (
        <Cinemas
            title={title}
            movies={state.movies}
            categories={categories}
            activeCategory={state.activeCategory}
            setactiveCategory={setactiveCategoryHandler}
            isLoading={state.isLoading}
        />
    );
};

export default CinemasContainer;
