import React from "react";
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledInput } from "./Login.style";


const Login = () => {
  return (
    <LoginContainer>
      <FormContainer>
        <StyledForm>
        <Header>Logi Here</Header>
          <StyledInput type="text" placeholder="username" />
          <StyledInput type="password" placeholder="password" />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
