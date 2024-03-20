import styled from "styled-components";

export const Dialog = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  z-index: 1000;
`;

export const DialogContent = styled.div`
  padding: 20px;
  text-align: center;
`;

export const DialogContentText = styled.p`
  margin: 0;
`;

export const DialogActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

export const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: #f0c040;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #f0a040;
  }
`;
