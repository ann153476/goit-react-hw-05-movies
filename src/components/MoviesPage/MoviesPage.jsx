import { useState, useEffect } from 'react';
import { fetchMovieBySearch } from '../../api/api';
import { useSearchParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import FoundMovies from 'components/FoundMovies/FoundMovies';

import s from './movies_page.module.scss';

import svg from '../../img/symbol-defs.svg';

const MoviesPage = () => {
  const [allKino, setallKino] = useState([]);
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQwery = searchParams.get('search');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await fetchMovieBySearch(searchQwery);
        setallKino(data.results);
      } catch (error) {
        console.log(error, 'error');
      }
    };
    if (searchQwery) {
      fetchPosts();
    }
  }, [searchQwery]);
  const handleChange = e => {
    setSearch(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ search: search });
    setSearch('');
  };
  return (
    <>
      <div className="go__back__box input__flex">
        <div className="btn">
          <NavLink to="/">
            <svg width="30">
              <use href={`${svg}#reshot`}></use>
            </svg>
            Go back
          </NavLink>
        </div>
        <div className={s.input__box}>
          <form onSubmit={handleSubmit}>
            <input
              className={s.input}
              name="search"
              onChange={handleChange}
              value={search}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search movie..."
              required
            ></input>
            <button type="submit" className={s.btn}>
              <svg width="25">
                <use href={`${svg}#lupa`}></use>
              </svg>
            </button>
          </form>
        </div>
      </div>
      <FoundMovies movies={allKino} />
    </>
  );
};

export default MoviesPage;
