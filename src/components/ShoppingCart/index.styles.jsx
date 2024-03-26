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
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 25px;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  border-bottom: 1px solid #000;

  & h3,
  p,
  button {
    text-align: left;
  }
`;

export const CartThumbnail = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`;

export const TrashCan = styled.div`
  cursor: pointer;
  margin-top: 6px;
  & :hover {
    color: red;
  }
`;
export const Discount = styled.div`
  font-size: 1rem;
  color: lightgreen;
  margin-top: 2rem;
`;
export const SubTotal = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;
