"use client";

import React from "react";
import styled from "styled-components";

// Main container for the registration form
const RegisterContainer = styled.div`
  background-color: rgba(116, 164, 220, 0.7);
  height: 550px;
  width: 500px;
  margin-top: 150px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

// Centering container
const CenteredContainer = styled.div`
  margin: 0 auto;
  width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  .icons_group {
    display: flex;
  }
`;

// Padding container to wrap components
const PaddingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

// Title container
const TitleContainer = styled.div`
  display: flex;
  gap: 10px;
`;

// Text component
const Text = styled.p`
  margin: 0;
`;

// Form container for input fields and buttons
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 13px;
`;

// Input and icon wrapper
const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 5px; // added a gap for spacing between icon and input
`;

// Input field styling
const InputField = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

// Checkbox and paragraph container
const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

// Checkbox styling
const CheckBox = styled.input`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

// Button styling
const ButtonRegister = styled.button`
  background-color: rgba(0, 128, 0, 0.5);
  color: white;
  border: 2px solid green;
  border-radius: 10px;
  text-align: center;
  font-size: 15px;
  height: 35px;
  width: 180px;
  cursor: pointer;
`;

// Icon placeholder styling
const Icon = styled.div`
  width: 20px;
  height: 20px;
  background-color: gray; // Placeholder color
`;

const Register = () => {
  return (
    <RegisterContainer>
      <CenteredContainer>
        <PaddingContainer>
          <TitleContainer>
            <Text>Welcome User!</Text>
            <Text>Registration</Text>
          </TitleContainer>
          <FormContainer>
            <InputGroup>
              <Icon />
              <InputField type="email" placeholder="email" />
            </InputGroup>
            <InputGroup>
              <Icon />
              <InputField type="text" placeholder="username" />
            </InputGroup>
            <InputGroup>
              <Icon />
              <InputField type="password" placeholder="password" />
              <Icon />
            </InputGroup>
            <InputGroup>
              <Icon />
              <InputField type="password" placeholder="confirm password" />
              <Icon />
            </InputGroup>
            <CheckBoxContainer>
              <CheckBox type="checkbox" />
              <Text>
                accetto tutte le robe brutte che possono fare con i miei dati
              </Text>
            </CheckBoxContainer>
            <CheckBoxContainer>
              <CheckBox type="checkbox" />
              <Text>
                Voglio ricevere le newsletter e notifiche sui nuovi post
              </Text>
            </CheckBoxContainer>
            <ButtonRegister>Register</ButtonRegister>
          </FormContainer>
          <CheckBoxContainer>
            <Text>You have already an account?</Text>
            <Text>Sign in</Text>
          </CheckBoxContainer>
        </PaddingContainer>
        <Text>or Sign Up Using</Text>
        <div className="icons_group">
          <Icon /> {/* Placeholder for GitHub icon */}
          <Icon /> {/* Placeholder for Google icon */}
          <Icon /> {/* Placeholder for Twitter icon */}
        </div>
      </CenteredContainer>
    </RegisterContainer>
  );
};

export default Register;
