import styled from "styled-components";

export const SearchWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const SearchInput = styled.input`
  padding-left: 35px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #ccc;
  display: flex;
  align-items: center;
`;

export const SearchList = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: grey;
  top: 40px;
  left: 0;
  width: 100%;
  border-radius: 5px;
  list-style: none;
  padding: 0;
  margin: 0;

  & li {
    cursor: pointer;

    &:hover {
      background-color: white;
      color: black;
    }
  }
`;
