import React from 'react';

import { Container, Profile, Logo } from './styles';

import logo from '../../assets/logo.svg';
import profile from '../../assets/profile.png';

const Header: React.FC = () => {
  return (
    <Container>
      <Profile>
        <img src={profile} alt="Avatar" />
        <span>Bem vindo, Leandro Santoro</span>
      </Profile>
      <Logo>
        <img src={logo} alt="Logotipo" />
      </Logo>
    </Container>
  );
};

export default Header;
