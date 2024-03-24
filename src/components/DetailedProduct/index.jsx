import { useParams } from "react-router-dom";
import useApiFetch from "../../hooks/useApiFetch";
import CalculatedPrice from "../Price";
import StarRating from "../RatingStars";
import * as S from "./index.styles";
import { ReturnButton } from "../Global/index.styles";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import useStore from "../../hooks/useStore";

// eslint-disable-next-line react/prop-types
const AddToCartBtn = ({ item }) => {
  const addToCart = useStore((state) => state.addToCart);
  const cart = useStore((state) => state.cart);
  // eslint-disable-next-line react/prop-types
  const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);

  const buttonClassName = isItemInCart ? "addedBtn" : "addBtn";

  return (
    <button className={buttonClassName} onClick={() => addToCart(item)}>
      {isItemInCart ? "Add More" : "Add to cart"}
    </button>
  );
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
      <S.ProductCard>
        <S.ImgContainer>
          <S.Img src={data.image.url} alt={data.image.alt} />
        </S.ImgContainer>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <CalculatedPrice
          price={data.price}
          discountedPrice={data.discountedPrice}
        />
      </S.ProductCard>
      <AddToCartBtn item={data} />
      <ReturnButton>
        <IoArrowBackCircleOutline size={56} onClick={() => navigate(`/`)} />
      </ReturnButton>
      {data.reviews.length > 0 && (
        <S.ReviewContainer>
          <h3>Reviews</h3>
          {data.reviews.map((review) => (
            <S.ReviewCard key={review.id}>
              <h4>By: {review.username}</h4>
              <p>{review.description}</p>
              <StarRating rating={review.rating} />
            </S.ReviewCard>
          ))}
        </S.ReviewContainer>
      )}
      {data.reviews.length === 0 && <p>No reviews yet</p>}
    </>
  );
};

export default DetailedProduct;
