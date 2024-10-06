import React from 'react';
import styled from 'styled-components';
import { currentTheme } from '../theme';
import Typography from '@mui/material/Typography';

const Logo: () => React.JSX.Element = () => {
  return (
    <LogoContainer>
      <Typography sx={{ fontSize: { xs: '24px', sm: '28px' } }}>
        <Name>Moona&apos;s</Name> <Type>Kitchen</Type>
      </Typography>
      <Tagline>#DILLIKAKHANA - Homecooked Indian Dishes</Tagline>
    </LogoContainer>
  );
};
export default Logo;

const LogoContainer = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  color: ${currentTheme.color.primary};
  font-family: ${currentTheme.fontFamily.logo};
  background-color: ${currentTheme.color.secondary};
  margin: 10px;
  padding: 3px 5px;
  border: 1px solid ${currentTheme.color.primary};
  min-width: 120px;
`;

const Name = styled.span`
  color: ${currentTheme.color.secondary};
  background-color: ${currentTheme.color.primary};
  padding: 3px 5px;
`;

const Type = styled.span`
  padding: 3px 5px;
`;

const Tagline = styled.span`
  font-family: Roboto Mono;
  font-size: 9px;
  color: ${currentTheme.color.primary};
`;
