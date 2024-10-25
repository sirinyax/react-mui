import React from 'react';
import './homepage.css';
import Image from '../components/imagecomponent/Image';
import Logo from '../../assets/icons/Logo.svg';
import { Button, ThemeProvider } from '@mui/material';
import ButtonTheme from '../components/theme/ฺButtonTheme';
import { EastOutlined } from '@mui/icons-material';

interface HomepageProps {}

const Homepage: React.FC<HomepageProps> = ({}) => {
    const handleRedirectToLogin = () => {
        window.location.href = 'login';
    };
    const handleRedirectToRegister = () => {
        window.location.href = 'register-step1';
      };

  return (
    <div className="main-homepage">
        <div className="content-homepage">
            <div className="top-content">
                <div className="title">
                    <span className='header-1' style={{marginRight: '20px'}}>ยินดีต้อนรับเข้าสู่</span>
                    <span>
                    <Image 
                        src={Logo}
                        alt="Logo"
                        width="34px"
                        height="auto"
                    />
                    </span>
                </div>
                <div className="detail">
                    <p className='secondary-text'>
                        แพลตฟอร์มกรอกรายละเอียดและคำนวน Carbon credit
                        <br />
                        เพื่อให้เราเป็นส่วนหนึ่งในการลดการใช้พลังงาน ลดโลกร้อน 
                    </p>
                </div>
            </div>
            <div className="bottom-content">
                <div className="bottom-section">
                <ThemeProvider theme={ButtonTheme}>
                        <Button 
                          variant="contained" 
                          sx={{ 
                            width: '100%',
                            maxWidth: '426px', 
                            height: '48px' 
                          }}
                          onClick={handleRedirectToLogin}
                        >
                          เข้าสู่ระบบ
                        </Button>
                    </ThemeProvider>
                </div>
                <div className="bottom-section">
                  <ThemeProvider theme={ButtonTheme}>
                    <Button 
                      id='register-button' 
                      variant="outlined" 
                      sx={{ 
                        width: '100%',
                        maxWidth: '426px', 
                        height: '48px' 
                      }}
                      onClick={handleRedirectToRegister}
                    >
                      <div className="d-flex justify-content-center align-items-center w-100">
                        <div style={{ marginTop: '2px', marginRight: '15px' }}>ลงทะเบียน</div>
                        <div className='icon-in-button'>
                          <EastOutlined />
                        </div>
                      </div>

                    </Button>
                  </ThemeProvider>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage