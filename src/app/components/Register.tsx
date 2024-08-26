"use client";

import React from "react";
import styled from "styled-components";
// debugger

const RegisterContainer = styled.div`
  background-color: grey;
  height: 450px;
  width: 400px;
`;

// full boxed

//TODO 
//cercare di utilizzare il minor numero di componenti stylizzati possibile
//se due input hanno uno styling identico utilizzare lo stesso styling o estendere il componente
// box title
const PaddingContainer = styled.div``;
const TitoloBenvenutoUser = styled.p``;
const TitoloRegistrazione = styled.p``;
// form
const FormContainer = styled.form``;
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
const CheckBoxCookie = styled.input``;
const ParagrafoCookie = styled.p``;
// checkboxnewsletter
const CheckBoxNewsletter = styled.input``;
const ParagrafoNewsletter = styled.p``;
// button register
const ButtonRegister = styled.button``;
const WordRegister = styled.p``;
// full boxed
// scritta se hai gia un account
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
      <PaddingContainer>
        <div>
          <TitoloBenvenutoUser>Welcome User!</TitoloBenvenutoUser>
          <TitoloRegistrazione>Registration</TitoloRegistrazione>
        </div>
        <FormContainer>
          <div>
            <IconEmail />
            <InputEmail placeholder="email" />
          </div>
          <div>
            <IconUsername />
            <InputUsername placeholder="username" />
          </div>
          <div>
            <IconPassword />
            <InputPassword placeholder="password" />
          </div>
          <div>
            <IconPassword />
            <InputPasswordConfirm placeholder="confirm password" />
            <IconShowPassword />
          </div>
          <div>
            <CheckBoxCookie />
            <ParagrafoCookie>
              accetto tutte le robe brutte che possono fare con i miei dati
            </ParagrafoCookie>
          </div>
          <div>
            <CheckBoxNewsletter />
            <ParagrafoNewsletter>
              Voglio ricevere le newsletter e notifiche sui nuovi post{" "}
            </ParagrafoNewsletter>
          </div>
          <div>
            <ButtonRegister />
            <WordRegister>Register</WordRegister>
          </div>
        </FormContainer>
        <div>
          <ParagrafoDomandaAccount>
            You have already an account?
          </ParagrafoDomandaAccount>
          <ParagrafoSignIn>Sign in </ParagrafoSignIn>
        </div>
      </PaddingContainer>
      <ParagrafoOath>or Sign Up Using</ParagrafoOath>
      <div>
        <IconGitHub />
        <IconGoogle />
        <IconTwitter />
      </div>
    </RegisterContainer>
  );
};

export default Register;
