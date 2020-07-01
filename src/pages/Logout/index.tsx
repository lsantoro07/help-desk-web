import React, { useEffect } from 'react';
import { useAuth } from '../../hooks/auth';

const Logout: React.FC = () => {
  const { signOut } = useAuth();

  useEffect(() => {
    signOut();
  }, [signOut]);

  return <div />;
};

export default Logout;
