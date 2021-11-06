import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { Cast, CreditsResponse } from '../interfaces/CreditsInterface';
import { MovieFull } from '../interfaces/MovieInterface';

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`);
    const creditsPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);
    const [movieDetailsPromiseRes, creditsPromiseRes] = await Promise.all([
      movieDetailsPromise,
      creditsPromise,
    ]);

    setState({
      isLoading: false,
      movieFull: movieDetailsPromiseRes.data,
      cast: creditsPromiseRes.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return { ...state };
};
