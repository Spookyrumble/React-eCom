import styled from "styled-components";

export const ShoppingCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  margin: 1rem;
  border-radius: 10px;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  border-bottom: 1px solid #000;

  & h3,
  p,
  button {
    margin: 0;
    text-align: left;
  }
`;

export const CartThumbnail = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

export const TrashCan = styled.div`
  cursor: pointer;
  margin-top: 6px;
  & :hover {
    color: red;
  }
`;
