import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('* Preencha um email válido')
    .required('* O email é obrihatório'),
  password: Yup.string().required('* A senha é obrigatória'),
});

function SignIn() {
  const loading = false;

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={() => {}}>
        <Input
          name="email"
          type="emial"
          placeholder="Seu email"
          autoComplete="off"
        />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}

export default SignIn;
