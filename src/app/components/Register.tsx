"use client";

import React, { useState } from "react";
import styled from "styled-components";
//FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUser,
  faLock,
  faEye,
  faEyeSlash,
  faCodeCompare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const RegisterContainer = styled.div`
  background-color: rgba(116, 164, 220, 0.7);
  height: 550px;
  width: 500px;
  margin-top: 150px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

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

const PaddingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Text = styled.p`
  margin: 0;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 13px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 5px;
`;

const InputField = styled.input`
  background-color: transparent;

  &::placeholder {
    color: white;
  }
`;

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const CheckBox = styled.input`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

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

const Icon = styled.div`
  width: 20px;
  height: 20px;
  background-color: gray; //
`;

const Register = () => {
  const addOne = () => {
    getData();
  };

  const fintoDato = {
    username: "idwadawd",
    first_name: "John",
    last_name: "Doe",
    email: "dwadawwdadaw@gmail.com",
    password: "Password123!",
  };

  const getData = async () => {
    const url = "http://localhost:3001/api/v1/auth/local/signup";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fintoDato),
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <RegisterContainer>
      <CenteredContainer>
        <PaddingContainer>
          <TitleContainer>
            <button onClick={addOne}>sex</button>
            <Text>Welcome User!</Text>
            <Text>Registration</Text>
          </TitleContainer>
          <FormContainer>
            <InputGroup>
              <FontAwesomeIcon icon={faEnvelope} />
              <InputField type="email" placeholder="email" />
            </InputGroup>
            <InputGroup>
              <FontAwesomeIcon icon={faUser} />
              <InputField type="text" placeholder="username" />
            </InputGroup>
            <InputGroup>
              <FontAwesomeIcon icon={faLock} />
              <InputField type="password" placeholder="password" />
              <FontAwesomeIcon icon={faEye} />
            </InputGroup>
            <InputGroup>
              <FontAwesomeIcon icon={faLock} />
              <InputField type="password" placeholder="confirm password" />
              <FontAwesomeIcon icon={faEye} />
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
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faGoogle} />
          <FontAwesomeIcon icon={faTwitter} />
        </div>
      </CenteredContainer>
    </RegisterContainer>
  );
};

export default Register;
