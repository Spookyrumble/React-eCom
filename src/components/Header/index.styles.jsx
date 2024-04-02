import styled from "styled-components";

export const Logo = styled.div`
  background-image: url(${(props) => props.src});
  background-size: contain;
  width: 200px;
  height: 40px;
  object-fit: cover;
  margin: 0 2rem;
`;
