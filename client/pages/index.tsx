import React from 'react';
import { Button } from '@mui/material';
import { style } from '@mui/system';
import NavBar from '../components/NavBar';
import MainLayout from '../layouts/MainLayout';

const Index = () => {
  return (
    <>
      <MainLayout>
        <div className="center">
          <h1>Welcome!!</h1>
          <h3>Here is tracks </h3>
        </div>
      </MainLayout>


      <style jsx>
        {`
          .center{
          margin-top:150px;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          }
          `}
      </style>
    </>
  );
};
export default Index;