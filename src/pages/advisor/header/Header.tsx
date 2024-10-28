import React, { useEffect, useRef, useState } from 'react';
import './header.css';
import Image from '../../components/imagecomponent/Image';
import Logo from '../../../assets/images/header-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import ImgUser from '../../../assets/images/example-image-register.png';


const Header = () => {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isHeaderMenuOpen, setIsHeaderMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleUserMenu = () => {
        setIsUserMenuOpen((prev) => !prev);
        if (isHeaderMenuOpen === true) {
            setIsHeaderMenuOpen(false);
        }
        
    };

    const toggleHeaderMenu = () => {
        setIsHeaderMenuOpen((prev) => !prev);
        if (isUserMenuOpen === true) {
            setIsUserMenuOpen(false);
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsUserMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="main-header">
            <div className="header-logo">
                <Image src={Logo} alt="logo" width={'224px'} height={'48px'} />
            </div>
            <div className={`header-menu ${isHeaderMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <a href="advisor" className="header-3">หน้าหลัก</a>
                    </li>
                    <li>
                        <a href="usage" className="header-3">วิธีการใช้งาน</a>
                    </li>
                </ul>
            </div>

            <div className="header-user" ref={menuRef}>
                <div className="user-group" onClick={toggleUserMenu}>
                    <div className="icon-user">
                        <Image src={ImgUser} alt="img" width={'44px'} height={'44px'} borderRadius='50%' />
                    </div>
                    <div className="name-user">ไพศาล</div>
                    <div className="icon-dropdown">
                        <FontAwesomeIcon icon={faAngleDown} style={{ color: "#c1c1c1", fontSize: "24px" }} />
                    </div>
                </div>

                <div className={`user-group-menu ${isUserMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <a href="register-step1">
                            <li>Setting Profile</li>
                        </a>
                        <a href="login">
                            <li>How to use</li>
                        </a>
                    </ul>
                </div>
            </div>

            <div className="ham-menu" onClick={toggleHeaderMenu}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        </div>
    );
};

export default Header;