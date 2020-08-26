import React from 'react';
import { Container, Image, Links } from './styles';
import Logo from '../../assets/menulogo.png';

const Menu: React.FC = () => (
  <Container>
    <Links to="/dashboard">
      <Image src={Logo} alt="logo" />
    </Links>
    <Links to="/dashboard">
      <p>Questionários</p>
    </Links>
    <Links to="/visitante">
      <p>Cadastrar Visitante</p>
    </Links>
    <Links to="/dashboard">
      <p>Documentação</p>
    </Links>
  </Container>
);

export default Menu;
