import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
// eslint-disable-next-line object-curly-newline
import { Container, Body, Form, Title, ImageLogo } from './styles';
import { Input, Label } from '../../components/Input/styles';
import { Button } from '../../components/Button/styles';
import api from '../../services/api';

import Logo from '../../assets/logo.png';

const Login: React.FC = () => {
  const [selectCpf, setSelectCpf] = useState<any>();
  const [selectSenha, setSelectSenha] = useState<any>();

  const history = useHistory();

  async function handleToLogin(event: FormEvent) {
    event.preventDefault();
    await api
      .get(`userauth?cpf=${selectCpf}&senha=${selectSenha}`)
      .then((response: any) => {
        console.log(response.data);
        history.push('/dashboard');
      })
      .catch(() => {
        alert('Usuario ou senha incorreto');
      });
  }

  return (
    <Body>
      <Container>
        <Form>
          <ImageLogo src={Logo} alt="Logo" />
          <Title>Questionário Diário de Sintomas</Title>
          <Label>Seu CPF*</Label>
          <Input
            type="numberpad"
            name="numberpad"
            placeholder="somente numeros"
            value={selectCpf}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSelectCpf(e.target.value);
            }}
          />
          <Label>Sua senha*</Label>
          <Input
            type="password"
            name="password"
            placeholder="sua senha"
            value={selectSenha}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSelectSenha(e.target.value);
            }}
          />
          <Button onClick={handleToLogin}>Entrar</Button>
        </Form>
      </Container>
    </Body>
  );
};

export default Login;
