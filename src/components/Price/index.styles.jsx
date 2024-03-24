import styled from "styled-components";

export const priceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const price = styled.div`
text-decoration: line-through;
color lightgrey;
`;

export const discountedPrice = styled.div`
  color: lightGreen;
`;

export const discount = styled.div`
  color: lightGreen;
`;
