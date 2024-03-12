import * as S from "./index.styles";

const CalculatedPrice = ({ price, discountedPrice }) => {
  if (!price || !discountedPrice || price <= discountedPrice) {
    return <span>{`$ ${price}`}</span>;
  }

  const discountPercentage = Math.round(
    ((price - discountedPrice) / price) * 100
  );

  return (
    <>
      <S.priceContainer>
        <S.price>{`$ ${price}`}</S.price>
        <S.discountedPrice>{`$ ${discountedPrice}`}</S.discountedPrice>
        <S.discount>{`${discountPercentage}% Discount`}</S.discount>
      </S.priceContainer>
    </>
  );
};

export default CalculatedPrice;
