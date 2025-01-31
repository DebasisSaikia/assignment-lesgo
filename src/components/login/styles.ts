import styled, { css } from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: rgb(246, 243, 243);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 1200px;
  overflow: hidden;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImageSection = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    height: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FormSection = styled.div`
  padding: 1.5rem;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #333;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.2s;
  background: #fff;
  color: #111;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: rgb(183, 185, 187);
    box-shadow: 0 0 0 2px rgba(194, 196, 199, 0.2);
  }
`;

const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  margin-bottom: 0;
`;

const FormError = styled.div`
  color: #ef4444;
  font-size: 0.875rem;
  text-align: center;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background-color: #fef2f2;
  border-radius: 0.375rem;
  border: 1px solid #fee2e2;
`;

const buttonStyles = () => css`
  .button {
    width: 100%;
    padding: 0.75rem 1rem;
    color: white;
    background: #1a1a1a;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
      transition: 0.3s ease-in-out;
    }
  }
`;

export {
  buttonStyles,
  Card,
  Container,
  FormContainer,
  FormGroup,
  FormSection,
  Grid,
  Image,
  ImageSection,
  Input,
  Label,
  Title,
  ErrorMessage,
  FormError,
};
