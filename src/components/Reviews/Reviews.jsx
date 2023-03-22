import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReview } from 'services/getApi';
import { ReviewList, ReviewItem, Plug } from './Reviews.styled';

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReview(movieId)
      .then(resp => {
        setReviews(resp);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <ReviewList>
      {reviews.length > 0 ? (
        reviews.map(({ content, id }) => (
          <ReviewItem key={id}>{content}</ReviewItem>
        ))
      ) : (
        <ReviewItem>
          <Plug>"We don't have any reviews for this movie"</Plug>
        </ReviewItem>
      )}
    </ReviewList>
  );
};

export default Review;
