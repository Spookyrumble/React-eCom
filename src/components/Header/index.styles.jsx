import styled from "styled-components";

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: auto;
`;

// export const Logo = styled.div`
//   background-image: props => url(${props.src}
//   background-size: contain;
//   width: 200px;
//   height: 40px;
//   object-fit: cover;
//   margin: 0 2rem;
// `;

export const Logo = styled.div`
  background-image: url(${(props) => props.src});
  background-size: contain;
  width: 200px;
  height: 40px;
  object-fit: cover;
  margin: 0 2rem;
`;
