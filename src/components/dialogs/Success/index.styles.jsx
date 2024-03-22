import styled from "styled-components";

export const Dialog = styled.div`
  position: fixed; /* Cover the whole screen */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  z-index: 10;
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
  background-color: #646cff;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #535bf2;
  }
`;
