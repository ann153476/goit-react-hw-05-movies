import { fetchReviewsById } from 'api/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import s from './reviews.module.scss';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await fetchReviewsById(movieId);
        setReviews(data.results);
      } catch (error) {
        console.log(error, 'error');
      }
    };
    if (movieId) {
      fetchMovie();
    }
  }, [movieId]);

  return (
    <div className={s.reviews__box}>
      <h2>Reviews</h2>
      <ul>
        {reviews.length ? (
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>author: {author}</h3>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>Sorry none reviews... </p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
