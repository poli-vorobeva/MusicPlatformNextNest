import React, { PropsWithChildren, ReactElement } from 'react';
import NavBar from '../components/NavBar';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { Container } from '@mui/material';

const MainLayout: React.FC = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <NavBar/>
      <Container style={{ margin: '90px 0' }}>
        {children}
      </Container>
    </>
  );
};
export default MainLayout;