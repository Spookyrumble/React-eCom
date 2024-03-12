import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const StarRating = ({ rating }) => {
  const totalStars = 5;
  let stars = [];

  // Add filled stars
  for (let i = 1; i <= Math.floor(rating); i++) {
    stars.push(<FaStar key={i} />);
  }

  // Add half star if rating is not an integer
  if (!Number.isInteger(rating)) {
    stars.push(<FaStarHalfAlt key="half" />);
  }

  // Add empty stars
  for (let i = Math.ceil(rating) + 1; i <= totalStars; i++) {
    stars.push(<FaRegStar key={i} />);
  }

  return <span>{stars}</span>;
};

export default StarRating;
