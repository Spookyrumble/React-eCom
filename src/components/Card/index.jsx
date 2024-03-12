import useApiFetch from "../../hooks/useApiFetch";
import * as S from "./index.styles";
import RatingStars from "../RatingStars";
import CalculatedPrice from "../Price";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const { data, loading, error } = useApiFetch(`products`);
  const navigate = useNavigate();

  return (
    <>
      <S.CardContainer>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data &&
          data.map((product) => (
            <S.Card
              key={product.id}
              onClick={() => navigate(`/products/${product.id}`)}
            >
              <S.CardImage src={product.image.url} alt={product.title} />
              <S.CardTitle>{product.title}</S.CardTitle>
              <S.CardPrice>
                <CalculatedPrice
                  price={product.price}
                  discountedPrice={product.discountedPrice}
                />
              </S.CardPrice>
              <S.ProductRating>
                <RatingStars rating={product.rating} />
              </S.ProductRating>
            </S.Card>
          ))}
      </S.CardContainer>
    </>
  );
};

export default Card;
