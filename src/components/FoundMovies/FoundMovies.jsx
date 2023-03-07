import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import notfound from '../../img/notfound.jpg';
import s from './found_movies.module.scss';

const FoundMovies = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ul className={s.kino__block}>
        {movies.map(oneKino => {
          let imgNotFound = '';
          oneKino.poster_path
            ? (imgNotFound = `http://image.tmdb.org/t/p/w500${oneKino.poster_path}`)
            : (imgNotFound = notfound);

          return (
            <li key={oneKino.id}>
              <NavLink
                state={{ from: location }}
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

FoundMovies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default FoundMovies;
