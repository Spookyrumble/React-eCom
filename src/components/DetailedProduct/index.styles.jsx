import styled from "styled-components";

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  margin: 100px 20px;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 25px;
`;

export const ProductCard = styled.div`
  backdrop-filter: blur(10px);
  border-radius: 25px;
  margin: auto;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  max-width: 600px;
`;

export const ReviewCard = styled.div`
  margin: 20px;
  max-width: 400px;
  transition: all 0.3s ease-in-out;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  height: auto;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  max-width: 500px;
`;
