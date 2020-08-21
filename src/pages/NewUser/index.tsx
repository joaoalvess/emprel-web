import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import { Input, Label } from '../../components/Input/styles';
import { Button } from '../../components/Button/styles';
import api from '../../services/api';

const NewUser: React.FC = () => {
  const [selectUser, setSelectUser] = useState('');
  const [selectEmail, setSelectEmail] = useState('');
  const [selectSenha, setSelectSenha] = useState('');
  const [selectCpf, setSelectCpf] = useState('');
  const [selectMatricula, setSelectMatricula] = useState(0);
  const [selectNumero, setSelectNumero] = useState(0);

  useEffect(() => {
    console.log(selectUser.toLowerCase());
  }, [selectUser]);

  async function handleSubmit() {
    const nome = selectUser;
    const email = selectEmail;
    const senha = selectSenha;
    const cpf = selectCpf;
    const matricula = selectMatricula;
    const numero = selectNumero;

    const formData = {
      nome,
      email,
      senha,
      cpf,
      matricula,
      numero,
    };

    await api
      .post('/createuser', formData)
      .then((response: any) => {
        alert('sucess');
        console.log(response);
        setSelectUser('');
        setSelectEmail('');
        setSelectSenha('');
        setSelectCpf('');
        setSelectMatricula(0);
        setSelectNumero(0);
      })
      .catch((response: any) => {
        alert('fail');
        console.log(response);
      });
  }

  return (
    <Container>
      <Label>Nome</Label>
      <Input
        value={selectUser}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSelectUser(e.target.value);
        }}
      />
      <Label>email</Label>
      <Input
        value={selectEmail}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSelectEmail(e.target.value);
        }}
      />
      <Label>senha</Label>
      <Input
        value={selectSenha}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSelectSenha(e.target.value);
        }}
      />
      <Label>cpf</Label>
      <Input
        value={selectCpf}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSelectCpf(e.target.value);
        }}
      />
      <Label>matricula</Label>
      <Input
        value={selectMatricula}
        onChange={(e: any) => setSelectMatricula(e.target.value)}
      />
      <Label>numero</Label>
      <Input
        value={selectNumero}
        onChange={(e: any) => setSelectNumero(e.target.value)}
      />
      <Button onClick={() => handleSubmit()}>enviar</Button>
    </Container>
  );
};

export default NewUser;
