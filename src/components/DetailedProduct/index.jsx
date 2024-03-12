import { useParams } from "react-router-dom";
import useApiFetch from "../../hooks/useApiFetch";
import CalculatedPrice from "../Price";
import StarRating from "../RatingStars";
import * as S from "./index.styles";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import useStore from "../../hooks/useStore";

// eslint-disable-next-line react/prop-types
const AddToCartBtn = ({ item }) => {
  const addToCart = useStore((state) => state.addToCart);
  return <button onClick={() => addToCart(item)}>Add to Cart</button>;
};

const DetailedProduct = () => {
  const { id } = useParams();
  const { data, loading, error } = useApiFetch(`products/`, id);
  const navigate = useNavigate();

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div>
        <img src={data.image.url} alt={data.image.alt} />
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <CalculatedPrice
          price={data.price}
          discountedPrice={data.discountedPrice}
        />
      </div>
      <AddToCartBtn item={data} />
      <S.returnButton>
        <IoArrowBackCircleOutline size={56} onClick={() => navigate(`/`)} />
      </S.returnButton>
      {data.reviews.length > 0 && (
        <S.reviewContainer>
          <h3>Reviews</h3>
          {data.reviews.map((review) => (
            <S.reviewCard key={review.id}>
              <h4>By: {review.username}</h4>
              <p>{review.description}</p>
              <StarRating rating={review.rating} />
            </S.reviewCard>
          ))}
        </S.reviewContainer>
      )}
      {data.reviews.length === 0 && <p>No reviews yet</p>}
    </>
  );
};

export default DetailedProduct;
