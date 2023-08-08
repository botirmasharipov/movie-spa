import { Link } from "react-router-dom";
import { StyledMovieThumb } from '../styles/StyledMovieThumb';

const MovieThumb = ({ image, movieId, clickable }) => {
	console.log('movieId:', movieId);
	
return (
  <StyledMovieThumb>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <img className="clickable" src={image} alt="movie thumb" />
      </Link>
    ) : (
      <img src={image} alt="movie thumb" /> //not clickable image
    )}
  </StyledMovieThumb>
) 
}

export default MovieThumb;