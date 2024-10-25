import React, { ChangeEvent, InputHTMLAttributes, useState } from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './inputLogin.css'

interface InputFieldLoginProps extends InputHTMLAttributes<HTMLInputElement> {
    icon: IconDefinition;
    iconError: IconDefinition;
    placeholder?: string;
    type?: string;
    error?: boolean;
    errorMessage?: string;
    onValueChange: (value: string) => void;
}

const InputLogin: React.FC<InputFieldLoginProps> = ({ 
    icon,
    iconError, 
    placeholder, 
    type, 
    error, 
    errorMessage,
    onValueChange,
    value,
    ...rest
}) => {
    const [text, setText] = useState<string>('');
    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newText = e.target.value;
        setText(newText);
        onValueChange(newText);
    }

    const currentIcon = error && iconError ? iconError : icon;
    return (
      <div className="input-field-login-container">
        <div className={`input-group ${error ? 'input-error' : ''}`}>
          <FontAwesomeIcon icon={currentIcon} className={`icon ${error ? 'icon-error' : ''}`} />
          <input 
            type={type} 
            placeholder={placeholder} 
            onChange={handleTextChange}
            />
        </div>
        {error && <span className="error-message">{errorMessage}</span>}
      </div>
  )
}

export default InputLogin