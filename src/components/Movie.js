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
  
  if (error) return <div>Something went wrong</div>
  if(loading) return <Spinner />

  return (
  	<>
		<Navigation movie={movie.original_title} />
		<MovieInfo  movie={movie} />
		<MovieInfoBar />
		<Grid >
			<Actor />
		</Grid>
		<Spinner />
  	</>
	)
}

export default Movie;