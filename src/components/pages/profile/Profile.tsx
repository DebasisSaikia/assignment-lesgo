import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { EditDetailsInput } from "../../../types";
import { ErrorMessage, Label } from "../../login/styles";
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
import { useAuth } from "../../../hooks/useAuth";

const Profile: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<EditDetailsInput>();

  const { updateProfile } = useAuth();

  //setting prefill value from local storage
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const { name, email } = JSON.parse(userData);
      setValue("name", name);
      setValue("email", email);
    }
  }, [setValue]);

  /**
   * 
   * @param data   try {
      const { email, password } = data;
      const loginSuccessful = await login(email, password);

      if (!loginSuccessful) {
        setError("Invalid email or password");
      }
    } catch (err: unknown) {
      setError(`An error occurred during login. Please try again.${err}`);
    }
  };
   */

  const onSubmit = async (data: EditDetailsInput) => {
    try {
      const { email, name } = data;
      //
      const updatedData = {
        email,
        name,
      };
      await updateProfile(updatedData);
      // localStorage.setItem("user", JSON.stringify(data));
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
