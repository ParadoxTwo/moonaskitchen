import React from 'react';
import { Box } from '@mui/material';

export default (props: any) => {
  const { sx, ...otherProps } = props;
  return (
    <Box
      {...otherProps}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        ...sx,
      }}
    />
  );
};
