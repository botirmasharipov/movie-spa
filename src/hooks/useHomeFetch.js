import { useState, useEffect } from 'react';
import { API_URL, API_KEY } from '../config';

export const useHomeFetch = () => {
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (endpoint, options) => { // Add 'options' parameter here
    setError(false);
    setLoading(true);

    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      setState(data.results);
    } catch (err) {
      setError(true);
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    

    fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}`);
  }, []);

  return [{ state, loading, error }, fetchMovies];
};
