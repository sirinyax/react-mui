import React from 'react';
import './mainpage.css';
import Header from '../header/Header';
import ResumeIcon from '../../../assets/icons/resume.svg';
import { Button, ThemeProvider } from '@mui/material';
import ButtonTheme from '../../components/theme/ฺButtonTheme';

const Mainpage = () => {
  return (
    <div>
        <Header />
        <div className="main-page">
            <div className="row m-0 p-0">
                <div className="col-12 col-md-6">
                    <div className="card-manage-profile">
                       <div className="card-content">
                            <div>
                                <input type="radio" name="" id="" />
                            </div>
                            <div 
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <img src={ResumeIcon} alt="" width={"96px"} height={"96px"} />
                            </div>
                            <div className="header-2" style={{color: '#12CB84', marginTop: "28px", fontSize: '24px'}}>จัดการข้อมูลส่วนตัว</div>
                            <div className="header-1" style={{fontSize: "20px"}}>เพิ่ม หรือแก้ไขข้อมูล รายละเอียด ส่วนตัว ให้ครบถ้วน</div>
                       </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">2</div>
            </div>
            <div className="row m-0 p-0 d-flex justify-content-end">
                    <ThemeProvider theme={ButtonTheme} >
                    <Button 
                          variant="contained" 
                          sx={{ 
                            width: '100%',
                            maxWidth: '240px', 
                            height: '40px' 
                          }}
                        //   onClick={handleRedirectToLogin}
                        >
                          ถัดไป
                        </Button>
                    </ThemeProvider>
            </div>
        </div>
    </div>
  )
}

export default Mainpage