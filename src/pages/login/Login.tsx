import React, { useState } from 'react';
import LogoLogin from '../../assets/images/logo-login.png';
import './login.css';
// import Button from '../../core/components/Button'
import Image from '../components/imagecomponent/Image';
import InputLogin from './inputForLoginPage/inputLogin';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { Button, ThemeProvider } from '@mui/material';
import ButtonTheme from '../components/theme/ฺButtonTheme';



const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleRedirectToMainPage = () => {
        console.log(`username: ${username}, password: ${password}`);

        if (username === '' || username === undefined) {
            setUsernameError(true);
        } else {
            setUsernameError(false);
        }

        if (password === '' || password === undefined) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }

        if (usernameError === false && passwordError === false) {
            window.location.href = 'register';
        }
    };

    return (
        <div className="main-login">
            <div className="login-content row m-0 p-0 ">
                <div className="col-lg-7 d-none d-lg-block left-login">
                    <Image src={LogoLogin} alt='logo-login' height='100vh' width='100%' />
                </div>
                <div className="right-login col-12 col-lg-5">
                    <div className="right-form-login">
                        <div className="login-title">
                            <h1 className="header-1">เข้าสู่ระบบ</h1>
                        </div>
                        <div className="login-form">
                            <div className="login-form-content">
                                <div className="input-login-username">
                                    <InputLogin
                                        icon={faUser}
                                        iconError={faLock}
                                        placeholder="Username"
                                        error={usernameError}
                                        errorMessage="Please enter a valid username"
                                        value={username}
                                        onValueChange={setUsername}
                                    />
                                </div>
                                <div className="input-login-password">
                                    <InputLogin
                                        icon={faLock}
                                        iconError={faUser}
                                        placeholder="Password"
                                        type="password"
                                        error={passwordError}
                                        errorMessage="Password must be at least 6 characters long"
                                        value={password}
                                        onValueChange={setPassword}
                                    />
                                </div>
                                <div className="login-forgot-password">
                                    <span className='detail-text'>
                                        <a href="#">ลืมรหัสผ่าน</a>
                                    </span>
                                </div>
                                <div className="button-submit-form-login">
                                  <ThemeProvider theme={ButtonTheme}>
                                    <Button 
                                      variant="contained" 
                                      sx={{ 
                                        width: '100%', 
                                        maxWidth: '426px', 
                                        height: '48px' 
                                      }}
                                      onClick={handleRedirectToMainPage}
                                    >
                                      ลงชื่อเข้าใช้งาน
                                    </Button>
                                  </ThemeProvider>
                                    {/* <Button
                                        label='ลงชื่อเข้าใช้งาน'
                                        width="100%"
                                        height="52px"
                                        className='contained-button'
                                        onClick={handleRedirectToMainPage}
                                    /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login