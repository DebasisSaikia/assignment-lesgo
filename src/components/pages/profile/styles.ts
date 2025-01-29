import styled, { css } from "styled-components";
import { FormGroup } from "../../../auth/login/styles";

const ProfileWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileCard = styled.div`
  width: 400px;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0 2px rgba(194, 196, 199, 0.2);
  background: white;
  padding: 32px;
  border-radius: 8px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  margin-top: 2rem;
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
    outline: none !important;
    border-color: rgb(183, 185, 187);
    box-shadow: 0 0 0 2px rgba(194, 196, 199, 0.2);
  }
  &:disabled {
    background: #f5f5f5;
  }
`;

const InputWithError = styled(Input)<{ $hasError?: boolean }>`
  ${(props) =>
    props.$hasError &&
    css`
      border-color: #ef4444;
      &:focus {
        border-color: #ef4444;
        box-shadow: 0 0 0 1px #ef4444;
      }
    `}
`;

const AvatarContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto 0;

  .img {
    height: 90px;
    width: 90px;
    object-fit: contain;
    border-radius: 50%;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
`;

const SaveButton = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  background: #e5b075;

  &:hover {
    opacity: 0.9;
    transition: 0.3s ease-in-out;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const StyledFormGroup = styled(FormGroup)`
  width: 100%;
`;

export {
  AvatarContainer,
  ButtonContainer,
  FormGroup,
  Input,
  InputContainer,
  InputWithError,
  ProfileCard,
  ProfileWrapper,
  SaveButton,
  StyledFormGroup,
};
