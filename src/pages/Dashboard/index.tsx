import React, { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut, FiUser, FiHome, FiUsers, FiClipboard } from 'react-icons/fi';
import useSWR from 'swr';
import { Container, Header, Menu, Profile, Content, Tickets } from './styles';
import { useAuth } from '../../hooks/auth';

import profileDefault from '../../assets/profile.png';
import api from '../../services/api';

interface Ticket {
  id: string;
  title: string;
}

const Dashboard: React.FC = () => {
  // const { data: tickets } = useSWR<Ticket[]>('/dashboard/agent/tickets');

  // const openTickets = useMemo(() => {
  //   return tickets?.find((ticket) => ticket.status === 'open');
  // }, [tickets]);

  // console.log(tickets);

  const { user } = useAuth();
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    api.get<Ticket[]>('/dashboard/agent/tickets').then((response) => {
      const ticketFormatted = response.data.map((ticket) => {
        return { ...ticket };
      });
      setTickets(ticketFormatted);
    });
  }, []);

  console.log(tickets);

  return (
    <Container>
      <Header>
        <Profile>
          <img
            src={user.avatar_url ? user.avatar_url : profileDefault}
            alt={user.name}
          />

          <div>
            <span>Bem vindo, </span>
            <strong>{user.name}</strong>
          </div>
        </Profile>
      </Header>

      <Menu>
        <ul>
          <li>
            <Link to="/profile">
              <FiUser />
              Meu Perfil
            </Link>
          </li>
          <li>
            <Link to="/">
              <FiHome />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/">
              <FiUsers />
              Usuários
            </Link>
          </li>
          <li>
            <Link to="/">
              <FiClipboard />
              Tickets
            </Link>
          </li>
          <li>
            <Link to="/logout">
              <FiLogOut />
              Sair
            </Link>
          </li>
        </ul>
      </Menu>
      <Content>
        <section>
          <strong>Tickets em aberto</strong>
          <Tickets>
            <li>
              <Link to="/">
                <span>Leandro Mendonça</span>
                <span>Desenvolvimento de relatório</span>
                <span>20/05/2020</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span>Leandro Mendonça</span>
                <span>Desenvolvimento de relatório</span>
                <span>20/05/2020</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span>Leandro Mendonça</span>
                <span>Desenvolvimento de relatório</span>
                <span>20/05/2020</span>
              </Link>
            </li>
          </Tickets>
        </section>

        <section>
          <strong>Tickets em atendimento</strong>

          <Tickets>
            <li>
              <Link to="/">
                <span>Leandro Mendonça</span>
                <span>Desenvolvimento de relatório</span>
                <span>20/05/2020</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span>Leandro Mendonça</span>
                <span>Desenvolvimento de relatório</span>
                <span>20/05/2020</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span>Leandro Mendonça</span>
                <span>Desenvolvimento de relatório</span>
                <span>20/05/2020</span>
              </Link>
            </li>
          </Tickets>
        </section>
      </Content>
    </Container>
  );
};

export default Dashboard;
