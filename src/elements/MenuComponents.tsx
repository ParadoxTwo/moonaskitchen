import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Box } from '@mui/material';

export const ItemHeader = ({ children }: { children?: React.ReactNode[] }) => {
  return (
    <Header sx={{ width: '100%' }}>
      {children[0]}
      <Line />
      {children[1]}
    </Header>
  );
};

export const ItemDescription = styled.div`
  width: 100%;
  font-size: 0.9rem;
  text-align: left;
`;

const Header = styled(Box)`
  font-family: 'Courier New', Courier, monospace;
  display: flex;
  font-weight: 600;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  span:first-child {
    width: 100%;
    text-align: left;
  }
  span:last-child {
    width: fit-content;
  }
`;

const Line = styled.span`
  border-bottom: solid 1px #1f1e23;
  display: flex;
  position: relative;
  height: 2px;
  width: 80%;
`;
