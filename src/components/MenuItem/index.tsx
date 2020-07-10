import React from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface MenuItemProps {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, icon: Icon, ...rest }) => {
  return (
    <Container>
      <Icon />
      <span>{name}</span>
    </Container>
  );
};

export default MenuItem;
