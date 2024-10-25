import { createTheme, Theme } from '@mui/material/styles';
const rootStyle = getComputedStyle(document.documentElement);
const mainFont = rootStyle.getPropertyPriority('--font-ibm-regular').trim();
const mainColor = rootStyle.getPropertyValue('--primary-color-1').trim();
const hoverColor = rootStyle.getPropertyValue('--supporting-color-4').trim();
const hoverOutlineColor = rootStyle.getPropertyValue('--supporting-color-3').trim();



const ButtonTheme: Theme = createTheme({
  typography: {
    fontFamily: mainFont,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '15px 12px 12px 12px',
          borderRadius: '8px',
          lineHeight: 'normal',
          fontSize: '20px',
        },
        contained: {
          backgroundColor: mainColor,
          color: '#fff',
          '&:hover': {
            backgroundColor: hoverColor,
          },
        },
        outlined: {
          borderColor: mainColor,
          color: mainColor,
          '&:hover': {
            backgroundColor: hoverOutlineColor,
            borderColor: hoverColor,
            color: hoverColor,
          },
        },
        text: {
          color: 'black',
          '&:hover': {
            backgroundColor: 'rgba(0, 128, 0, 0.1)',
          },
        },
      },
    },
  },
});

export default ButtonTheme;
