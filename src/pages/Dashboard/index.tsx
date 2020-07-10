import React from 'react';

import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

interface Ticket {
  id: string;
  title: string;
}

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Menu />
    </Layout>
  );
};

export default Dashboard;
