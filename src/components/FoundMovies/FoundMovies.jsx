import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';

import notfound from '../../img/notfound.jpg';
import s from './found_movies.module.scss';

const FoundMovies = ({ moviesOBJ }) => {
  return (
    <>
      <ul className={s.kino__block}>
        {moviesOBJ.map(oneKino => {
          let imgNotFound = '';
          if (oneKino.poster_path) {
            imgNotFound = `http://image.tmdb.org/t/p/w500${oneKino.poster_path}`;
          } else {
            imgNotFound = notfound;
          }
          return (
            <li key={oneKino.id}>
              <NavLink
                to={`/movies/${oneKino.id}`}
                className={s.kino__card}
              >
                <img
                  src={imgNotFound}
                  width="110"
                  height="160"
                  alt="no movie"
                />
                {oneKino.title ||
                  oneKino.name ||
                  oneKino.original_name ||
                  'none title'}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FoundMovies;
