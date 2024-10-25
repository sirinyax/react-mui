import React, { useState } from 'react';
import './components.css';
import { ThemeProvider } from '@mui/material/styles';
import { Button, InputAdornment, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import ButtonTheme from './theme/ฺButtonTheme';
import SelectTheme from './theme/SelectThem';
import { ExpandMoreOutlined, EastOutlined, AccountCircle } from '@mui/icons-material';
import InputText from './input/inputtext/inputText';

const Components = () => {
    // Input text
    const [txt, setTxt] = useState<string>('');
    const [errorTxt, setErrorTxt] = useState<string>('');

    // Select Dropdown
    const [number, setNumber] = useState<string>('');

    const handleChange = (event: SelectChangeEvent) => {
        setNumber(event.target.value);
    };

    return (
        <div className='container'>
            <div className="m-3">
                <h4>Example Components.</h4>
            </div>

            <div className="m-2">
                <h5>Button</h5>

                <div className="mt-2">
                    <ThemeProvider theme={ButtonTheme}>
                        <Button variant="contained" sx={{ width: '426px', height: '48px' }}>Contained</Button>
                    </ThemeProvider>
                </div>
                <div className="mt-2">
                    <ThemeProvider theme={ButtonTheme}>
                        <Button variant="outlined" sx={{ width: '426px', height: '48px' }}>Outlined</Button>
                    </ThemeProvider>
                </div>
                <div className="mt-2">
                <ThemeProvider theme={ButtonTheme}>
                        <Button 
                            variant="outlined" 
                            sx={{ 
                                width: '426px', 
                                height: '48px',
                                borderColor: '#1E1E1E',
                                color: '#1C1C1C',
                                '&:hover': {
                                    backgroundColor: '#F4F4F4',
                                    borderColor: '#1E1E1E',
                                    color: '#1C1C1C',
                                },
                            }}
                        >
                            Cancel
                        </Button>
                    </ThemeProvider>
                </div>
                <div className="mt-3">
                    <span>button with icon "for go to register"</span>
                    <ThemeProvider theme={ButtonTheme}>
                        <Button id='register-button' variant="outlined" sx={{ width: '426px', height: '48px' }}>
                            <div className="d-flex justify-content-center align-items-center w-100">
                                <div style={{ marginTop: '2px', marginRight: '15px' }}>BUTTON</div>
                                <div className='icon-in-button'>
                                    <EastOutlined />
                                </div>
                            </div>

                        </Button>
                    </ThemeProvider>
                </div>
            </div>
            <div className="m-2">
                <h5>Select Dropdown</h5>
                <ThemeProvider theme={SelectTheme}>
                    <Select
                        value={number}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        sx={{
                            width: '426px',
                            height: '48px',
                        }}
                        IconComponent={ExpandMoreOutlined}
                    >
                        <MenuItem value="" disabled>Dropdown List</MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </ThemeProvider>
            </div>
            <div className="m-2">
                <h5>Input</h5>
                <h4>Input text</h4>
                    <InputText
                        label="Text"
                        value={txt}
                        onValueChange={setTxt}
                        errorMessage={errorTxt}
                        placeholder="Please input something..."
                    />
            </div>

        </div>
    )
}

export default Components;