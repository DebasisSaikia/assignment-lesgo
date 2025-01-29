import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { EditDetailsInput } from "../../../types";
import { ErrorMessage, Label } from "../../../auth/login/styles";
import { AVATAR_IMG } from "../../../constant/authConstant";
import {
  AvatarContainer,
  ButtonContainer,
  InputContainer,
  InputWithError,
  ProfileCard,
  ProfileWrapper,
  SaveButton,
  StyledFormGroup,
} from "./styles";

const Profile: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<EditDetailsInput>();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const { name, email } = JSON.parse(userData);
      setValue("name", name);
      setValue("email", email);
    }
  }, [setValue]);

  const onSubmit = async (data: EditDetailsInput) => {
    try {
      localStorage.setItem("user", JSON.stringify(data));
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  return (
    <ProfileWrapper>
      <ProfileCard>
        <AvatarContainer>
          <img alt="avatar" src={`${AVATAR_IMG}`} className="img" />
        </AvatarContainer>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <InputContainer>
            <StyledFormGroup>
              <Label>Name</Label>
              <InputWithError
                id="name"
                type="text"
                autoComplete="name"
                placeholder="Enter your name"
                $hasError={!!errors.name}
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Name should only contain letters",
                  },
                })}
              />
              {errors.name && (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
              )}
            </StyledFormGroup>

            <StyledFormGroup>
              <Label>Email</Label>
              <InputWithError
                id="email"
                type="email"
                autoComplete="email"
                placeholder="Enter email address"
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
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              )}
            </StyledFormGroup>
          </InputContainer>

          <ButtonContainer>
            <SaveButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Edit Details"}
            </SaveButton>
          </ButtonContainer>
        </form>
      </ProfileCard>
    </ProfileWrapper>
  );
};

export default Profile;
