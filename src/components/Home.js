import {API_URL, API_KEY, API_BASE_URL,IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../config'
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
  
  if(error) return <div>Something went wrong...</div>
  if(!state.movies[0]) return <Spinner /> 

  return (
  <>
    <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}` }
       title={state.heroImage.original_title}
       text={state.heroImage.overview}
       />
    <SearchBar />
    <Grid />
    <MovieThumb />
    <Spinner />
    <LoadMoreBtn />
  </>
  )
}



export default Home;