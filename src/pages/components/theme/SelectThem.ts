import { createTheme, Theme } from '@mui/material/styles';
const rootStyle = getComputedStyle(document.documentElement);
const mainFont = rootStyle.getPropertyPriority('--font-ibm-regular').trim();
const mainColor = rootStyle.getPropertyValue('--supporting-color-2').trim();
const hoverOption = rootStyle.getPropertyValue('--supporting-color-5').trim();

const SelectTheme: Theme = createTheme({
    typography: {
        fontFamily: mainFont,
    },
    palette: {
        primary: {
            main: mainColor,
        },
    },
    components: {
        MuiSelect: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '18px',
                    backgroundColor: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '18px 10px 16px 10px',
                    '&:hover fieldset': {
                        border: '1px solid #ccc !important',
                    },
                    '&.Mui-focused': {
                        border: 'none !important',
                    },
                },
                select: {
                    padding: '1px',
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: hoverOption,
                    },
                },
            },
        },
    },
});

export default SelectTheme;