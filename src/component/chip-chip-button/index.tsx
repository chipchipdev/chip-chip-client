import React from 'react';
import {
  Button, ButtonProps, styled, useMediaQuery, useTheme,
} from '@mui/material';

const StyledButton = styled(Button)`
  background: transparent;
  
  border-radius: 45px;

  color: #000;
  font-family: comic-bold, "Helvetica Neue", "PingFang HK", "Heiti TC", "Lantinghei SC", sans-serif;
  
  &.MuiButton-sizeSmall {
    width: 280px;
    height: 56px;
    border: solid 2px #000;
  }
  
  &.MuiButton-textSizeSmall {
    font-size: 30px;
    line-height: 40px;
  }

  &.MuiButton-sizeMedium {
    width: 350px;
    height: 75px;
    border: solid 3px #000;
  }

  &.MuiButton-textSizeMedium {
    font-size: 35px;
    line-height: 45px;
  }

  &.MuiButton-sizeLarge {
    width: 450px;
    height: 85px;
    border: solid 4px #000;
  }

  &.MuiButton-textSizeLarge {
    font-size: 40px;
    line-height: 50px;
  }
`;

export const ChipChipButton = (props: ButtonProps) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up('sm'));
  const xs = useMediaQuery(theme.breakpoints.up('xs'));
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const lg = useMediaQuery(theme.breakpoints.up('lg'));
  const xl = useMediaQuery(theme.breakpoints.up('xl'));

  const innerProps: ButtonProps = {};

  if (sm || xs) innerProps.size = 'small';
  if (md) innerProps.size = 'medium';
  if (lg || xl) innerProps.size = 'large';

  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledButton {...{
      ...props,
      ...innerProps,
    }}
    />
  );
};
