import { fetchCastById } from '../../api/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import notfound from '../../img/notfound.jpg';
import s from './cast.module.scss';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await fetchCastById(movieId);
        setCast(data.cast);
      } catch (error) {
        console.log(error, 'error');
      }
    };
    if (movieId) {
      fetchMovie();
    }
  }, [movieId]);
  return (
    <ul className={s.cast__block}>
      {cast.map(({ id, name, character, profile_path }) => {
        let imgNotFound = '';
        profile_path
          ? (imgNotFound = `http://image.tmdb.org/t/p/w500${profile_path}`)
          : (imgNotFound = notfound);
        return (
          <li className={s.card} key={id}>
            <img src={imgNotFound} width="70" alt="none" />
            <p>{name}</p>
            <p>character:</p>
            <p>{character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
