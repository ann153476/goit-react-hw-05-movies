import { fetchCastById } from '../../api/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import notfound from '../../img/notfound.jpg';
import s from './cast.module.scss';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await fetchCastById(movieId);
        setCast(data.cast);
      } catch (error) {
        console.log(error, 'error');
        setError(true);
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
        if (profile_path) {
          imgNotFound = `http://image.tmdb.org/t/p/w500${profile_path}`;
        } else {
          imgNotFound = notfound;
        }
        return (
          <li className={s.card} key={id}>
            <img src={imgNotFound} width="70" />
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
