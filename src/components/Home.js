import {API_URL, API_KEY, API_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../config'
import Grid from './Grid';
import LoadMoreBtn from './LoadMoreBtn';
import MovieThumb from './MovieThumb';
import HeroImage from './HeroImage';
import SearchBar from './SearchBar';
import Spinner from './Spinner';
import {useHomeFetch} from '../hooks/useHomeFetch'

const Home = () => {
  const [{state, loading, error} , fetchMovies] = useHomeFetch();
  console.log(state);

  return (
  <>
    <HeroImage />
    <SearchBar />
    <Grid />
    <MovieThumb />
    <Spinner />
    <LoadMoreBtn />
  </>
  )
}



export default Home;