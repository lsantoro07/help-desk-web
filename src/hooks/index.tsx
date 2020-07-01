import React from 'react';

import { SWRConfig } from 'swr';
import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import api from '../services/api';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <SWRConfig
        value={{
          fetcher: (url: string) => api(url).then((r) => r.data),
          refreshInterval: 60000,
        }}
      >
        <ToastProvider>{children}</ToastProvider>
      </SWRConfig>
    </AuthProvider>
  );
};

export default AppProvider;
