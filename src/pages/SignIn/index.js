import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function SignIn() {
  return (
    <>
      <h1>SignIn</h1>
      <Link to="/register">Criar conta gratuita</Link>
    </>
  );
}

export default SignIn;
