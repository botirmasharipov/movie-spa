import Actor from "./Actor";
import Grid from "./Grid";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Navigation from "./Navigation";
import Spinner from "./Spinner";

const Movie = ({ movieId }) => (
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


export default Movie;