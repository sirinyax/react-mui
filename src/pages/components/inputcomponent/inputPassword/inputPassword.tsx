import React, { ChangeEvent, InputHTMLAttributes, useState } from 'react'
import './inputPassword.css'
import CheckIcon from '../../../../assets/icons/check.svg'
import CheckIconActive from '../../../../assets/icons/check-active.svg'

interface InputPasswordProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    width?: string;
    height?: string;
    onPasswordChange: (password: string) => void;
    errorMessage?: string;
}

const InputPassword: React.FC<InputPasswordProps> = ({
    label,
    value,
    width,
    height,
    onPasswordChange,
    errorMessage,
    ...res
}) => {
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        onPasswordChange(newPassword);
    };
    
    return (
        <div  style={{ marginBottom: '1rem' }}>
            {label && (
                <label className={errorMessage ? 'label-input-text-error' : 'label-input-text'}>
                    {label}
                </label>
            )}
            <div className="password-input-container" style={{ height: height, width: width }}>
                <input
                    type={showPassword ? 'text' : 'password'}
                    className={errorMessage ? 'password-input-error' : 'password-input'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChange}
                    
                    {...res}
                />
                <img
                    src={showPassword ? CheckIcon : CheckIconActive}
                    alt={showPassword ? 'Hide password' : 'Show password'}
                    className="toggle-icon"
                    onClick={togglePasswordVisibility}
                />
            </div>   
            {errorMessage && (
                <p className='error-message-text'>{errorMessage}</p>
            )}
        </div>

    )
}

export default InputPassword