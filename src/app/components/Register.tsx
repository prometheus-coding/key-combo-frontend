"use client";

import React from "react";
import styled from "styled-components";
// debugger

const RegisterContainer = styled.div`
  background-color: rgba(147, 147, 147, 0.8);
  height: 550px;
  width: 500px;
  margin-top: 150px;
`;

const MarginCentratoRegister = styled.div`
  margin: 0 auto;
  width: 250px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

// full boxed

//TODO
//cercare di utilizzare il minor numero di componenti stylizzati possibile
//se due input hanno uno styling identico utilizzare lo stesso styling o estendere il componente
// box title
const PaddingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const TitoloBenvenutoContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const TitoloBenvenutoUser = styled.p``;
const TitoloRegistrazione = styled.p``;
// form
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 13px;
`;

// form spaziatura
const InputMiniContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;
// email
const IconEmail = styled.div``;
const InputEmail = styled.input``;
//username
const IconUsername = styled.div``;
const InputUsername = styled.input``;
// password
const IconPassword = styled.div``;
const InputPassword = styled.input``;
const InputPasswordConfirm = styled.input``;
const IconShowPassword = styled.div``;
// checkbpx cookie
const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
const CheckBoxCookie = styled.input`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;
const ParagrafoCookie = styled.p``;
// checkboxnewsletter
const CheckBoxNewsletter = styled.input`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;
const ParagrafoNewsletter = styled.p``;
// button register
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
const WordRegister = styled.p``;
// full boxed
// scritta se hai gia un account
const ParagrafoDomandeContainer = styled.div``;
const ParagrafoDomandaAccount = styled.p``;
const ParagrafoSignIn = styled.p``;
// Fullboxed
// scritto se vuoi accedere con un oath
const ParagrafoOath = styled.p``;
const IconGitHub = styled.div``;
const IconGoogle = styled.div``;
const IconTwitter = styled.div``;
// fine

const Register = () => {
  return (
    <RegisterContainer>
      <MarginCentratoRegister>
        <PaddingContainer>
          <TitoloBenvenutoContainer>
            <TitoloBenvenutoUser>Welcome User!</TitoloBenvenutoUser>
            <TitoloRegistrazione>Registration</TitoloRegistrazione>
          </TitoloBenvenutoContainer>
          <FormContainer>
            <InputMiniContainer>
              <IconEmail />
              <InputEmail placeholder="email" />
            </InputMiniContainer>
            <InputMiniContainer>
              <IconUsername />
              <InputUsername placeholder="username" />
            </InputMiniContainer>
            <InputMiniContainer>
              <IconPassword />
              <InputPassword placeholder="password" />
              <IconShowPassword />
            </InputMiniContainer>
            <InputMiniContainer>
              <IconPassword />
              <InputPasswordConfirm placeholder="confirm password" />
              <IconShowPassword />
            </InputMiniContainer>
            <CheckBoxContainer>
              <CheckBoxCookie />
              <ParagrafoCookie>
                accetto tutte le robe brutte che possono fare con i miei dati
              </ParagrafoCookie>
            </CheckBoxContainer>
            <CheckBoxContainer>
              <CheckBoxNewsletter />
              <ParagrafoNewsletter>
                Voglio ricevere le newsletter e notifiche sui nuovi post{" "}
              </ParagrafoNewsletter>
            </CheckBoxContainer>
            <ButtonRegister>
              <WordRegister>Register</WordRegister>
            </ButtonRegister>
          </FormContainer>
          <ParagrafoDomandeContainer>
            <ParagrafoDomandaAccount>
              You have already an account?
            </ParagrafoDomandaAccount>
            <ParagrafoSignIn>Sign in </ParagrafoSignIn>
          </ParagrafoDomandeContainer>
        </PaddingContainer>
        <ParagrafoOath>or Sign Up Using</ParagrafoOath>
        <div>
          <IconGitHub />
          <IconGoogle />
          <IconTwitter />
        </div>
      </MarginCentratoRegister>
    </RegisterContainer>
  );
};

export default Register;
