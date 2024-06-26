import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px;
  gap: 20px;
`;

export const Card = styled.div`
  margin: 10px;
  width: 320px;
  background-color: white;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 10px 0 black;
    scale: 0.98;
    transition: all 0.3s ease-in-out;
    
    & img {
      filter: grayscale(1);
      transition: all 1s ease-in-out;
      scale: 1;
      aspect-ratio: 1;
        }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 10px;
  loading: lazy;
  scale: 0.95;
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  color: #000;
`;

export const CardPrice = styled.div`
  display: inline-block;
  font-size: 1rem;
  color: #fff;
  background-color: #000;
  padding: 5px 10px;
  border-radius: 10px;
`;

export const ProductRating = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 1.5rem;
  color: purple;
  margin: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: left;

  & p {
    font-size: 1rem;
    color: #000;
    line-height: 1;
    margin-bottom: 0;
  }
`;
