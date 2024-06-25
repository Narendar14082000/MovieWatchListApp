import React from 'react';
import '../styles/Rating.css';

const Rating = ({ rating, setRating }) => {
  const handleClick = value => {
    setRating(value);
  };

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map(star => (
        <span
          key={star}
          className={rating >= star ? 'star filled' : 'star'}
          onClick={() => handleClick(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
