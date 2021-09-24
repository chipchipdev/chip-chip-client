import {
  styled, TextField,
} from '@mui/material';

export const ChipChipInput = styled(TextField)`
  background: transparent;

  color: #000;
  font-family: comic-bold, "Helvetica Neue", "PingFang HK", "Heiti TC", "Lantinghei SC", sans-serif;

  & .MuiInputBase-root {
    border-radius: 45px;
  }

  & .MuiInputBase-input {
    color: #000;
    font-family: comic-bold, "Helvetica Neue", "PingFang HK", "Heiti TC", "Lantinghei SC", sans-serif;
  }

  & .Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #000;
  }

  ${(props) => props.theme.breakpoints.up('xs')} {
    width: 280px;
    height: 56px;

    & .MuiInputBase-root {
      width: 280px;
      height: 56px;
      font-size: 22px;
      line-height: 25px;
      border: solid 2px #AEAEAE;
    }

  }


  ${(props) => props.theme.breakpoints.up('sm')} {
    width: 280px;
    height: 56px;

    & .MuiInputBase-root {
      width: 280px;
      height: 56px;
      font-size: 22px;
      line-height: 25px;
      border: solid 2px #AEAEAE;
    }
  }


  ${(props) => props.theme.breakpoints.up('md')} {
    width: 350px;
    height: 75px;

    & .MuiInputBase-root {
      width: 350px;
      height: 75px;
      font-size: 28px;
      line-height: 32px;
      border: solid 3px #AEAEAE;
    }
  }


  ${(props) => props.theme.breakpoints.up('lg')} {
    width: 450px;
    height: 85px;

    & .MuiInputBase-root {
      width: 450px;
      height: 85px;
      font-size: 32px;
      line-height: 35px;
      border: solid 4px #AEAEAE;
    }
  }


  ${(props) => props.theme.breakpoints.up('xl')} {
    width: 450px;
    height: 85px;

    & .MuiInputBase-root {
      width: 450px;
      height: 85px;
      font-size: 32px;
      line-height: 35px;
      border: solid 4px #AEAEAE;
    }
  }
`;
