import React, { ChangeEvent, useState } from 'react';
import LeftBar from '../leftBar/LeftBar';
import './registerstep1.css';
import MockUpUserImage from '../../../assets/images/example-image-register.png';
import InputText from '../../components/inputcomponent/InputText/inputText';
import InputPassword from '../../components/inputcomponent/inputPassword/inputPassword';
// import Button from '../../core/components/button/Button'
import Image from '../../components/imagecomponent/Image';
import { Button, MenuItem, Select, ThemeProvider } from '@mui/material';
import SelectTheme from '../../components/theme/SelectThem';
import { ExpandMoreOutlined } from '@mui/icons-material';
import ButtonTheme from '../../components/theme/ฺButtonTheme';

interface Step1Props {

}

const options = [
  { value: 'นาย', label: 'นาย' },
  { value: 'นาง', label: 'นาง' },
  { value: 'นางสาว', label: 'นางสาว' },
];

const RegisterStep1: React.FC<Step1Props> = ({}) => {
  // Selected Title
  const [titleName, setTitleName] = useState<string>('');
  const handleChangeTitleName = (event: any) => {
    setTitleName(event.target.value);
    console.log(`title name: ${titleName}`);
  }

  // Input name
  const [inputName, setInputName] = useState<string>('');
  const [inputLastName, setInputLastName] = useState<string>('');
  const [inputEmail, setInputEmail] = useState<string>('');
  const [inputPhoneNumber, setInputPhoneNumber] = useState<string>('');
  const [errorInputName, setErrorInputName] = useState<string | undefined>(undefined);
  const [errorInputLastName, setErrorInputLastName] = useState<string | undefined>(undefined);
  const [errorInputEmail, setErrorInputEmail] = useState<string | undefined>(undefined);
  const [errorInputPhoneNumber, setErrorInputPhoneNumber] = useState<string| undefined>(undefined);

  // Input password
  const [inputUsername, setInputUsername] = useState<string>('');
  const [inputPassword, setInputPassword] = useState<string>('');
  const [inputConfirmPassword, setInputConfirmPassword] = useState<string>('');
  const [errorInputUsername, setErrorInputUsername] = useState<string | undefined>(undefined)
  const [errorMessageInputPassword, setErrorMessageInputPassword] = useState<string | undefined>(undefined);
  const [errorMessageInputConfirmPassword, setErrrorMessageInputConfirmPassword] = useState<string | undefined>(undefined);

  const handleRegisterNextStep = () => {
      if (inputName === '' || undefined) {
        // setErrorInputName('*กรุณากรอกชื่อ');
      } else {
        console.log("ชื่อ: ", inputName);
        setErrorInputName(undefined);

      }

      if (inputLastName === '' || undefined) {
        // setErrorInputLastName('*กรุณากรอกนามสกุล');
      } else {
        console.log("นามสกุล: ", inputLastName);
        setErrorInputLastName(undefined);
      }

      if (inputEmail === '' || undefined) {
        // setErrorInputEmail('*กรุณากรอกอีเมล')
      } else {
        console.log("อีเมล: ", inputEmail)
        setErrorInputEmail(undefined)

      }

      if (inputPhoneNumber === '' || undefined) {
        // setErrorInputPhoneNumber('*กรุณากรอกเบอร์โทรศัพท์')
      } else {
        console.log("เบอร์โทรศัพท์: ", inputPhoneNumber)
        setErrorInputPhoneNumber(undefined)

      }

      if (inputUsername === '' || undefined) {
        // setErrorInputUsername('*กรุณากรอก username')
      } else {
        console.log("username: ", inputUsername)
        setErrorInputUsername(undefined)
      }

      if (inputPassword === '') {
        // setErrorMessageInputPassword('*กรุณากรอกรหัสผ่าน')
      } else {
        setErrorMessageInputPassword(undefined) 
      }

      if (inputConfirmPassword === '') {
        // setErrrorMessageInputConfirmPassword('*กรุณา confirm รหัสผ่าน')
      } else {
        if (inputPassword !== inputConfirmPassword) {
          // setErrrorMessageInputConfirmPassword('รหัสผ่านไม่ตรงกัน')
        } else {
          setErrrorMessageInputConfirmPassword(undefined)
        }
      }

    window.location.href = 'register/step2';
  };

  return (
    <div className="main-register-step-1">
      <div className="row m-0 p-0 d-flex">
        {/* Left content */}
        <div className="register-left-content col-4 d-none d-lg-block">
          <LeftBar step="1"/>
        </div>

        {/* Right content */}
        <div className="register-right-content col-12 col-lg-8">
          <div className="form-input-register w-100">

            {/* Row 1: Upload image */}
            <div className="row m-0 p-4 d-flex justify-content-center">
              <Image
                src={MockUpUserImage}
                alt={'user'}
                width={'172px'}
                height={'172px'}
              />
            </div>

            {/* Row 2: Personal information */}
            <div className="row m-0 p-0">
              <div className="form-personal-information-register">
                <div className="header-register col-12 d-flex text-start">
                  <h4 className="header-2">ข้อมูลส่วนตัว</h4>
                </div>

                <div className="col-12">
                  <div className="personal-information-register">
                    <div className="title-name-input-register">
                      <label className='label-input-text'>คำนำหน้า</label>
                      {/* <SelectDropdown
                        options={options}
                        onChange={handleCountryChange}
                        width={'132px'}
                        height={'40px'}
                      /> */}
                      <ThemeProvider theme={SelectTheme}>
                        <Select
                          value={titleName}
                          onChange={handleChangeTitleName}
                          displayEmpty
                          inputProps={{ 'aria-label': 'Without label' }}
                          sx={{
                            width: '132px',
                            height: '40px',
                          }}
                          IconComponent={ExpandMoreOutlined}
                        >
                          <MenuItem value="" disabled>กรุณาเลือก**</MenuItem>
                          {options.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                          
                        </Select>
                      </ThemeProvider>
                    </div>

                    <div className="name-input-register">
                      <InputText
                        label='ชื่อ'
                        width='276px'
                        height='40px'
                        value={inputName}
                        placeholder='Name'
                        errorMessage={errorInputName}
                        onValueChange={setInputName}
                      />
                    </div>

                    <div className="last-name-input-register">
                      <InputText
                        label='นามสกุล'
                        width='276px'
                        height='40px'
                        value={inputLastName}
                        placeholder='Last Name'
                        errorMessage={errorInputLastName}
                        onValueChange={setInputLastName}
                      />
                    </div>
                  </div>

                  <div className="contact-information-register">
                    <div className="email-input-register">
                      <InputText
                        label='อีเมล'
                        width='352px'
                        height='40px'
                        value={inputEmail}
                        placeholder='Example@gmail.com'
                        errorMessage={errorInputEmail}
                        onValueChange={setInputEmail}
                      />
                    </div>

                    <div className="phone-number-input-register">
                      <InputText
                        label='เบอร์โทรศัพท์'
                        width='352px'
                        height='40px'
                        value={inputPhoneNumber}
                        placeholder='xx-xxx-xxxxx'
                        errorMessage={errorInputPhoneNumber}
                        onValueChange={setInputPhoneNumber}
                      />
                    </div>
                  </div>

                </div>

                <div className="col-12">
                  <div className='username-input-register'>
                    <InputText
                      label='Username'
                      width='352px'
                      height='40px'
                      value={inputUsername}
                      placeholder='Username'
                      errorMessage={errorInputUsername}
                      onValueChange={setInputUsername}
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="password-input-register">
                    <div>
                      <InputPassword
                        label='รหัสผ่าน'
                        onPasswordChange={setInputPassword}
                        errorMessage={errorMessageInputPassword}
                        placeholder='กรอกรหัสผ่าน'
                        width='352px'
                        height='40px'
                      />
                    </div>
                    <div>
                      <InputPassword
                        label='ยืนยันรหัสผ่าน'
                        onPasswordChange={setInputConfirmPassword}
                        errorMessage={errorMessageInputConfirmPassword}
                        placeholder='กรอกรหัสผ่าน'
                        width='352px'
                        height='40px'
                      />
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <span className="header-2">
                    ข้อแนะนำเกี่ยวกับกาตั้งรหัสผ่าน
                  </span>
                  <ul>
                    <li>ต้องมีตั้งแต่ 8 ตัวอักษรขึ้น</li>
                    <li>ต้องมีอักขระพิเศษ เช่น !, @, # เป็นต้นไป</li>
                    <li>มีตัวเลขอย่างน้อย 1 ตัว</li>
                  </ul>
                </div>

                <div className="col-12 d-flex justify-content-end mt-3 mb-4">
                  <div className="button-submit-register-next-step">
                    <ThemeProvider theme={ButtonTheme}>
                      <Button 
                        variant="outlined" 
                        sx={{ 
                          // width: '100%',
                          width: '298px', 
                          height: '52px' 
                        }}
                        onClick={handleRegisterNextStep}
                      >
                        ถัดไป
                      </Button>
                    </ThemeProvider>
                    {/* <Button
                      label={'ถัดไป'}
                      width={'298px'}
                      height={'52px'}
                      onClick={handleRegisterNextStep}
                    /> */}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default RegisterStep1