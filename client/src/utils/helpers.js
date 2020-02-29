import { fetchMovie, fetchMovieTrailer } from "../shared/services";

export const minutesToHours = time => {
    const hours = parseInt(time / 60);
    const minutes = time % 60 < 10 ? `0${time % 60}` : time % 60;
    const runtime = `${hours}h${minutes}`;
    return runtime;
};

export const getMovie = async id => {
    const movie = await fetchMovie(id);
    const video = await fetchMovieTrailer(id);
    const trailer = video.find(video => video.type === "Trailer");
    const movieData = {
        genres: movie.genres,
        tagline: movie.tagline,
        runtime: minutesToHours(movie.runtime),
        image: movie.backdrop_path,
        trailer: trailer ? trailer.key : null
    };
    return movieData;
};