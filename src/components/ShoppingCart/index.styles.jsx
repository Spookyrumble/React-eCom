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
  min-width: 300px;

  & h3,
  p,
  button {
    text-align: left;
  }

  @media (max-width: 540px) {
    flex-direction: column;

    & h3,
    p,
    button {
      text-align: center;
    }
  }
`;

export const CartThumbnail = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`;

export const Discount = styled.div`
  font-size: 1.25rem;
  color: lightgreen;
  margin-top: 2rem;
`;
export const SubTotal = styled.div`
  font-size: 1.75rem;
  font-weight: bold;
  text-decoration: underline;
`;

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & p {
    background-color: #fff;
    color: #000;
    padding: 0 1rem;
    margin: 0 5px;
    border-radius: 10px;
  }
`;

export const AddBtn = styled.div`
  cursor: pointer;
  margin-top: 5px;

  & :hover {
    color: lightGreen;
  }
`;

export const TrashCan = styled.div`
  cursor: pointer;
  margin-top: 5px;

  & :hover {
    color: red;
  }
`;

export const ClearCart = styled.button`
  cursor: pointer;
  font-size: 1rem;
  color: white;
  margin: auto;
  text-align: right;
`;
