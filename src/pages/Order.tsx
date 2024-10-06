import React from 'react';
import styled from 'styled-components';
import { Box, Avatar } from '@mui/material';
import { currentTheme } from '../theme';
import { ItemDescription, ItemHeader } from '../elements/MenuComponents';
import menuItems from '../constants/menuItems';
import HeroSection from '../elements/HeroSection';
import nonVegImg from '../assets/nonVeg.jpeg';

export default function Order(): JSX.Element {
  const nonVegItems = menuItems.nonVeg;
  return (
    <Container>
      <HeroSection>
        <PageTitle>Our Menu</PageTitle>
      </HeroSection>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { sm: 'row', xs: 'column' },
          gap: '40px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h1>Non-Vegetarian</h1>
          {nonVegItems.map((item) => (
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
              <Avatar
                alt={item.title}
                src={item.src}
                sx={{ height: '85px', width: '85px' }}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  width: '60vw',
                }}
              >
                <ItemHeader>
                  <span>{item.title}</span>
                  <span>{item.price}</span>
                </ItemHeader>
                <ItemDescription>{item.description}</ItemDescription>
              </Box>
            </Box>
          ))}
        </Box>
        <Img src={nonVegImg} alt="non-veg image" />
      </Box>
    </Container>
  );
}

const Container = styled.div`
  padding: ${currentTheme.padding.body};
  min-height: 100vh;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  background-color: ${currentTheme.color.background};
`;

const PageTitle = styled.h1`
  font-size: 60px;
  font-family: ${currentTheme.fontFamily.arvo};
  font-weight: 400;
`;

const Image = styled.img`
  margin-top: 20px;
  width: 400px;
  height: 600px;
  object-fit: cover;
`;

const Img = (props: any) => {
  const { sx, ...otherProps } = props;
  return (
    <Box
      component="img"
      sx={{
        ...sx,
        height: 600,
        width: 400,
        objectFit: 'cover',
        marginTop: 10,
        alignSelf: 'center',
        display: { xs: 'none', sm: 'block', md: 'block' },
      }}
      {...otherProps}
    />
  );
};
