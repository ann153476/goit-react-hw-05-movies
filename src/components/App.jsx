import { BrowserRouter, Routes, Route } from 'react-router-dom'; //npm i react-router-dom

import Header from './Header/Header';

import HomePage from './HomePage/HomePage';
import MoviesPage from './MoviesPage/MoviesPage';
import OneMovie from './OneMovie/MovieDetails';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<OneMovie />} />
      </Routes>
    </BrowserRouter>
  );
};
