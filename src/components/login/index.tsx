import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginFormInputs } from "../../types";
import { useAuth } from "../../hooks/useAuth";
import styled, { css } from "styled-components";
import {
  buttonStyles,
  Card,
  Container,
  ErrorMessage,
  FormContainer,
  FormError,
  FormGroup,
  FormSection,
  Grid,
  Image,
  ImageSection,
  Input,
  Label,
  Title,
} from "./styles";
import { LOGIN_IMAGE } from "../../constant/authConstant";

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

const LoginForm: React.FC = () => {
  const { login } = useAuth();
  const [error, setError] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    setError("");

    try {
      const { email, password } = data;
      const loginSuccessful = await login(email, password);

      if (!loginSuccessful) {
        setError("Invalid email or password");
      }
    } catch (err: unknown) {
      setError(`An error occurred during login. Please try again.${err}`);
    }
  };

  const ButtonWrapper = styled.div`
    ${buttonStyles}
  `;

  return (
    <Container>
      <Card>
        <Grid>
          <ImageSection>
            <Image src={LOGIN_IMAGE} alt="Food delivery app showcase" />
          </ImageSection>

          <FormSection>
            <FormContainer>
              <Title>Sign in to continue</Title>

              <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <InputWithError
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter email address"
                    aria-describedby={errors.email ? "email-error" : undefined}
                    $hasError={!!errors.email}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <ErrorMessage role="alert" id="email-error">
                      {errors.email.message}
                    </ErrorMessage>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="password">Password</Label>
                  <InputWithError
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Enter password"
                    aria-describedby={
                      errors.password ? "password-error" : undefined
                    }
                    $hasError={!!errors.password}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                  />
                  {errors.password && (
                    <ErrorMessage role="alert" id="password-error">
                      {errors.password.message}
                    </ErrorMessage>
                  )}
                </FormGroup>

                {error && <FormError>{error}</FormError>}

                <ButtonWrapper>
                  <button className="button" type="submit">
                    Sign In
                  </button>
                </ButtonWrapper>
              </form>
            </FormContainer>
          </FormSection>
        </Grid>
      </Card>
    </Container>
  );
};

export default LoginForm;
