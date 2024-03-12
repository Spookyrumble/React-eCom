import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  margin: 3rem auto;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  max-width: 300px;
  margin: auto;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 1rem;
`;

export const Label = styled.label`
  margin: 0;
`;

export const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #000;
  background-color: #fff;
  color: #000;
  font-size: 1rem;
`;

export const TextArea = styled.textarea`
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 5px;
  border: 1px solid #000;
  font-family: "Arial", sans-serif;
  background-color: #fff;
  color: #000;
  font-size: 1rem;
`;
