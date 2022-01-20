import React, { useEffect, useReducer } from "react";
import Cinemas from "./component";
import { fetchCinemaList } from "../services";
import { setMovies, setActiveCategory, setLoading } from "./actions";
import { reducer } from "./reducer";


const CinemasContainer = props => {
    const { title, categories, type } = props;

    const initialState = { activeCategory: categories[0].slag };

    const [state, dispatchAction] = useReducer(reducer, initialState);

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
                    title: movie.title || movie.name,
                    rating: movie.vote_average
                };
            })
            .sort((a, b) => b.rating - a.rating);
        dispatchAction(setMovies(movies));
        dispatchAction(setLoading(false));
    };

    const setActiveCategoryHandler = (category) => {
        dispatchAction(setActiveCategory(category));
    }

    return (
        <Cinemas
            title={title}
            movies={state.movies}
            type={type}
            categories={categories}
            activeCategory={state.activeCategory}
            setActiveCategory={setActiveCategoryHandler}
            isLoading={state.isLoading}
        />
    );
};

export default CinemasContainer;
