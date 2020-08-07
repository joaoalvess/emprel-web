import React from 'react';
import { Container, Image, Links } from './styles';
import Logo from '../../assets/menulogo.png'

const Menu: React.FC = () => {
  return (
    <Container>
      <Links to="/Dashboard">
        <Image src={Logo} alt="logo" />
      </Links>
      <Links to="/Dashboard">
        <p>Questionarios</p>
      </Links>
      <Links to="/Dashboard">
        <p>Relatorios</p>
      </Links>
      <Links to="/Dashboard">
        <p>Cadastra Visitante</p>
      </Links>
      <Links to="/Dashboard">
        <p>Documentação</p>
      </Links>
    </Container>
  );
}

export default Menu;