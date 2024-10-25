import React from 'react'
import Image from '../../components/imagecomponent/Image';
import LogoLeftBarRegister from '../../../assets/images/logo-register-left-bar.png';
import './leftBar.css'
import CheckIcon from '../../../assets/icons/check.svg'
import CheckIconActive from '../../../assets/icons/check-active.svg'

interface LeftBarProps {
  step: string
}

const LeftBar: React.FC<LeftBarProps> = ({ step }) => {
  const getIcon = (currentStep: string) => {
    return   step === currentStep ? CheckIconActive : CheckIcon;
  };
  
  const isHeaderActiveStep = (currentStep: string) => {
    return step === currentStep ? "header-2 active-step" : "header-2";
  };

  const isDetailActiveStep = (currentStep: string) => {
    return step === currentStep ? "detail-text detail-text-active" : "detail-text";
  };
  
  return (
    <div className="left-bar-register">
      {/* Logo */}
      <div className="top-logo-left-bar-register">
        <Image src={LogoLeftBarRegister} alt='Logo' width='256px' height='auto' />
      </div>

      {/* Step 1 */}
      <div className="group-step-register">
        <div className="title-step-register">
          <div className="icon-check-step">
            <img src={getIcon("1")} alt="" className="icon-check" />
          </div>
          <div className="header-step-register">
            <span className={`${isHeaderActiveStep("1")}`}>ข้อมูลส่วนตัว</span>
          </div>
        </div>
        <div className="description-step-register">
          <span className={`${isDetailActiveStep("1")}`}>ชื่อ-นามสกุล, อีเมล, เบอร์โทรศัพท์</span>

        </div>
      </div>
      

      {/* Step 2 */}
      <div className="group-step-register">
        <div className="title-step-register">
          <div className="icon-check-step">
            <img src={getIcon("2")} alt="" className="icon-check" />
          </div>
          <div className="header-step-register">
            <span className={`${isHeaderActiveStep("2")}`}>ข้อมูลการประกอบอาชีพ</span>
          </div>
        </div>
        <div className="description-step-register">
          <span className={`${isDetailActiveStep("2")}`}>ประวัติการประกอบวิชาชีพ</span>

        </div>
      </div>
      

      {/* Step 3 */}
      <div className="group-step-register">
        <div className="title-step-register">
          <div className="icon-check-step">
            <img src={getIcon("3")} alt="" className="icon-check" />
          </div>
          <div className="header-step-register">
            {/* <span className="header-2">ข้อมูลที่ปรึกษา</span> */}
            <span className={`${isHeaderActiveStep("3")}`}>ข้อมูลที่ปรึกษา</span>
          </div>
        </div>
        <div className="description-step-register">
          <span className={`${isDetailActiveStep("3")}`}> ประวัติการเป็นที่ปรึกษา</span>

        </div>
      </div>
      

      {/* Step 4 */}
      <div className="group-step-register">
        <div className="title-step-register">
          <div className="icon-check-step">
            <img src={getIcon("4")} alt="" className="icon-check" />
          </div>
          <div className="header-step-register">
            <span className={`${isHeaderActiveStep("4")}`}>ยืนยันตัวตน</span>
          </div>
        </div>
        <div className="description-step-register">
          <span className={`${isDetailActiveStep("4")}`}>ผู้ใช้บริการจะต้องทำการยืนยันตัวบุคคลโดยการใช้เบอร์โทรศัพท์</span>
        </div>
      </div>
    </div>
  )
}

export default LeftBar