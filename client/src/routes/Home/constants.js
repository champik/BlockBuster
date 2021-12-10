import { MOVIE, TV } from "../../shared/constants";

export const CINEMAS = [
    {
        type: MOVIE.type,
        name: `${MOVIE.name}s`,
        categories: [
            { id: 1, title: "Popular", slag: "popular" },
            { id: 2, title: "Top Rated", slag: "top_rated" },
            { id: 3, title: "In Theatre", slag: "now_playing" },
            { id: 4, title: "Coming Soon", slag: "upcoming" }
        ]
    },
    {
        type: TV.type,
        name: `${TV.name}s`,
        categories: [
            { id: 1, title: "Popular", slag: "popular" },
            { id: 2, title: "Top Rated", slag: "top_rated" },
            { id: 3, title: "On The Air", slag: "on_the_air" },
            { id: 4, title: "Today", slag: "airing_today" }
        ]
    }
];
