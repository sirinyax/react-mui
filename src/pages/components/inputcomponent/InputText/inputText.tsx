import React, { ChangeEvent, FC, InputHTMLAttributes, useState } from 'react';
import './inputText.css'

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  onValueChange: (value: string) => void;
  errorMessage?: string;
  className?: string;
  width?: string;
  height?: string;
}

const InputText: FC<InputTextProps> = ({
  label,
  value,
  onValueChange,
  errorMessage,
  className,
  width,
  height,
  ...rest
}) => {
    const [text, setText] = useState<string>('');
   
    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newText = e.target.value;
        setText(newText);
        onValueChange(newText);
    }
  return (
    <div style={{ marginBottom: '1rem' }}>
        {label && (
            <label className={errorMessage ? 'label-input-text-error' : 'label-input-text'}>
                {label}
            </label>
        )}
      <input
        type="text"
        value={value}
        onChange={handleTextChange}
        className={errorMessage ? 'input-text-field-error' : 'input-text-field'}
        style={{
            height: height,
            width: width
        }}
        {...rest}
      />
      {errorMessage && (
        <p className='error-message-text'>{errorMessage}</p>
      )}
    </div>
  );
};

export default InputText;