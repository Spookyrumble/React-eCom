import styled from "styled-components";

export const CartContainer = styled.div`
  margin: 25px;
  position: fixed;
  right: 0;
  top: 0;
  cursor: pointer;
  z-index: 1000;
`;

export const CartCount = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 0 5px;
  font-size: 0.9rem;
  font-weight: bold;
`;
