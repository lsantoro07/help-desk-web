import React from 'react';

import { FaHome, FaUser } from 'react-icons/fa';
import { Container } from './styles';
import MenuItem from '../MenuItem';

const Menu: React.FC = () => {
  return (
    <Container>
      <MenuItem name="Dashboard" icon={FaHome} />
      <MenuItem name="Profile" icon={FaUser} />
    </Container>
  );
};

export default Menu;
