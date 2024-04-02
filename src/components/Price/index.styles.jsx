import styled from "styled-components";

export const priceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media (max-width: 540px) {
    flex-direction: column;
    padding: 0 1rem;
  }
`;

export const price = styled.div`
text-decoration: line-through;
color lightgrey;
`;

export const discountedPrice = styled.div`
  font-size: 1.25rem;
  color: lightGreen;
`;

export const discount = styled.div`
  color: lightGreen;
`;
