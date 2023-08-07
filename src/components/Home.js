import {useState} from 'react';
import {
  POPULAR_BASE_URL,
  SEARCH_BASE_URL,
  IMAGE_BASE_URL, 
  POSTER_SIZE, 
  BACKDROP_SIZE 
} from '../config'
import Grid from './Grid';
import LoadMoreBtn from './LoadMoreBtn';
import MovieThumb from './MovieThumb';
import HeroImage from './HeroImage';
import SearchBar from './SearchBar';
import Spinner from './Spinner';
import {useHomeFetch} from '../hooks/useHomeFetch'
import NoImage from '../images/no_image.jpg';

const Home = () => {
  const [
    {
      state,
      loading, 
      error
    } , fetchMovies] = useHomeFetch();

  const [searchTerm, setSearchTerm] = useState("");

   //if we have a search word, show user search 
  const searchMovies = search => {
    const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;

    setSearchTerm(search);
    fetchMovies(endpoint);
  }

  const loadMoreMovies = () => {
    const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${state.currentPage + 1} ` //give the other page
    const popularEndpoint = `${POPULAR_BASE_URL}&page=${state.currentPage + 1}`

    //show movies for search or load more 
    const endpoint = searchTerm ? searchEndpoint : popularEndpoint;
    fetchMovies(endpoint);
  }

  if(error) return <div>Something went wrong...</div>
  if(!state[0]) return <Spinner />  //show loader
  // console.log("state", state[0])
  // console.log(`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state[0].backdrop_path}`)
  
  return (
  <>
   { !searchTerm && (
        <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state[0].backdrop_path}`}
          title={state.original_title}
          text={state.overview}
        />
      )}
    <SearchBar callback={searchMovies} />
      
    <Grid header={searchTerm ? 'Search Results' : 'Popular Movies' } >
     {state.map(movie => (
       <MovieThumb 
       key={movie.id}
       clickable
       image={
            movie.poster_path 
        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
        :  NoImage
          }
          movieId={movie.id}
          movieName={movie.original_title}
          />
     ))}
    </Grid>

    {/* loading is true and show spinner */}
    {loading && <Spinner /> } 

    <LoadMoreBtn  text="Load More" callback={loadMoreMovies} />
  </>
  )
}



export default Home;