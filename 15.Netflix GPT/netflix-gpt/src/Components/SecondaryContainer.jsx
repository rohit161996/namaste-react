import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {

    const movies = useSelector((store) => store.movies);

    if (!movies) return;

    return (
        <div className="text-white bg-black">
            <div className="-mt-35 relative z-20 ">
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            </div>
            <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
            <MovieList title={"Popular"} movies={movies.popularMovies} />
            <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        </div>
    )
}

export default SecondaryContainer;