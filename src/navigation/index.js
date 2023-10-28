import React from 'react';
import { AuthProvider } from './AuthProvider.ios';
import Routes from './Routes';

const Providers = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default Providers;