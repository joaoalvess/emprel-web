import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import { Input, Label } from '../../components/Input/styles';
import { Button } from '../../components/Button/styles';
import api from '../../services/api';

const Visitante: React.FC = () => {
  const [selectUser, setSelectUser] = useState('');
  const [selectEmail, setSelectEmail] = useState('');
  const [selectSenha, setSelectSenha] = useState('');
  const [selectCpf, setSelectCpf] = useState('');
  const [selectMatricula, setSelectMatricula] = useState<number>();
  const [selectNumero, setSelectNumero] = useState<number>();

  useEffect(() => {
    console.log(selectUser.toLowerCase());
  }, [selectUser]);

  async function handleSubmit() {
    const nome = selectUser;
    const email = selectEmail;
    const cpf = selectCpf;
    const matricula = selectMatricula;
    const numero = selectNumero;

    const formData = {
      nome,
      email,
      cpf,
      matricula,
      numero,
    };

    await api
      .post('/createuser', formData)
      .then(() => {
        alert('sucess');
        setSelectUser('');
        setSelectEmail('');
        setSelectSenha('');
        setSelectCpf('');
        setSelectMatricula(0);
        setSelectNumero(0);
      })
      .catch(() => {
        alert('fail');
      });
  }

  return (
    <Container>
      <Label>Nome</Label>
      <Input
        value={selectUser}
        onChange={(e: any) => setSelectUser(e.target.value)}
      />
      <Label>email</Label>
      <Input
        value={selectEmail}
        onChange={(e: any) => setSelectEmail(e.target.value)}
      />
      <Label>senha</Label>
      <Input
        value={selectSenha}
        onChange={(e: any) => setSelectSenha(e.target.value)}
      />
      <Label>cpf</Label>
      <Input
        value={selectCpf}
        onChange={(e: any) => setSelectCpf(e.target.value)}
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

export default Visitante;
