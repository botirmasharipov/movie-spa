import Actor from "./Actor";
import Grid from "./Grid";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Navigation from "./Navigation";
import Spinner from "./Spinner";
import { useMovieFetch } from '../hooks/useMovieFetch';
import { useParams } from 'react-router-dom';

const Movie = () => {
  const { movieId } = useParams(); 
  const [movie, loading, error] = useMovieFetch(movieId);
  console.log(movie, "movie");

  return (
  	<>
		<Navigation />
		<MovieInfo />
		<MovieInfoBar />
		<Grid >
			<Actor />
		</Grid>
		<Spinner />
  	</>
	)
}

export default Movie;