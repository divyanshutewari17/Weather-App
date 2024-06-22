import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 0.25rem solid #f3f3f3;
  border-top: 0.25rem solid #3498db;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  animation: ${spin} 1s linear infinite;
  margin-top: 2rem;
`;

const Loading = () => {
  return <Spinner />;
};

export default Loading;
