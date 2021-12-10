import { fetchMovie, fetchMovieVideos } from "../shared/services";

export const minutesToHours = time => {
    const hours = parseInt(time / 60);
    const minutes = time % 60 < 10 ? `0${time % 60}` : time % 60;
    const runtime = `${hours}h ${minutes}`;
    return runtime;
};

export const getMovie = async (type, id) => {
    const movie = await fetchMovie(type, id);
    const videos = await fetchMovieVideos(type, id);
    const movieData = {
        title: movie.original_title || movie.original_name,
        genres: movie.genres,
        tagline: movie.tagline,
        runtime: minutesToHours(movie.runtime),
        image: movie.backdrop_path,
        date: movie.release_date,
        poster: movie.poster_path,
        videos
    };
    return movieData;
};