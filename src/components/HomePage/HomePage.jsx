import { useState, useEffect } from 'react';
import { getKinoApi } from '../../api/api';

import FoundMovies from 'components/FoundMovies/FoundMovies';

const HomePage = () => {
  const [allKino, setallKino] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await getKinoApi();
        setallKino(data.results);
      } catch (error) {
        console.log(error, 'error');
      }
    };
    fetchPosts();
  }, []); //масив залежностей при зміні стейту викликається фетч

  return (
    <>
      <FoundMovies movies={allKino} />
    </>
  );
};

export default HomePage;
