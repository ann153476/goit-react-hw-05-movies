import { fetchMovieById } from 'api/api';
import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import svg from '../../img/symbol-defs.svg';

import notfound from '../../img/notfound.jpg';

import s from './one_movie.module.scss';

const OneMovie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await fetchMovieById(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error, 'error');
      }
    };
    if (movieId) {
      fetchMovie();
    }
  }, [movieId]);
  let imgNotFound = '';
  if (movie.poster_path) {
    imgNotFound = `http://image.tmdb.org/t/p/w500${movie.poster_path}`;
  } else {
    imgNotFound = notfound;
  }
  console.log(movie, '<<<<<');
  return (
    <>
      <div className="go__back__box">
        <div className="go__back">
          <NavLink to="/movies">
            <svg width="30">
              <use href={`${svg}#reshot`}></use>
            </svg>
            Go back
          </NavLink>
        </div>
      </div>
      <div className={s.card}>
        <div className={s.poster}>
          <img src={`${imgNotFound}`} height="500" alt="movie"></img>
        </div>
        <div className={s.about__movie}>
          <div className={s.title}>
            <h2>{movie.title}</h2>
          </div>
          <p>Popularity : {movie.popularity}</p>
          <div className={s.genres}>
            <h3>Genres : </h3>
            {movie.genres ? (
              movie.genres.map(({ id, name }) => <p key={id}>{name}</p>)
            ) : (
              <></>
            )}
          </div>
          <p>Release date : {movie.release_date}</p>
          <div className={s.companies}>
            {movie.production_companies ? (
              movie.production_companies.map(({ id, logo_path }) => (
                <img
                  key={id}
                  src={`http://image.tmdb.org/t/p/w500${logo_path}`}
                  width="60"
                  alt=" "
                />
              ))
            ) : (
              <></>
            )}
            {/* {movie.production_companies[0].logo_path && (
              <img
                src={`http://image.tmdb.org/t/p/w500${movie.production_companies[0].logo_path}`}
                width="80"
                alt=" "
              />
            )} */}
          </div>
          <a href={movie.homepage}>{movie.homepage}</a>
        </div>
        <div
          style={{
            backgroundImage: `url("http://image.tmdb.org/t/p/w500${movie.backdrop_path}")`,
          }}
          className={s.backdrop__path}
        >
          <div className={s.overlay}>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default OneMovie;
