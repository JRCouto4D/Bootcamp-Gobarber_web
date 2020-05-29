import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('* O nome é obrigatório'),
  email: Yup.string()
    .email('* insira um email válido')
    .required('* O email é obrigatório'),
  password: Yup.string()
    .min(6, '* A senha deve ter no mínimo 6 caracteries')
    .required('* A senha é obrigatória'),
});

function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={() => {}}>
        <Input name="name" placeholder="Nome completo" autoComplete="off" />
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

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}

export default SignUp;
