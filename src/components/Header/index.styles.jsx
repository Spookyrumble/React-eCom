import styled from "styled-components";

export const Logo = styled.div`
  background-image: url(${(props) => props.src});
  background-size: contain;
  object-fit: cover;
  position: fixed;
  width: 100%;

  & :hover {
    cursor: pointer;
  }
`;
