import * as React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helpText?: string;
  type?: React.HTMLInputTypeAttribute;
}
export const Input = ({ label, type = 'text', helpText, ...otherProps }: Props) => {
  return (
    <div className='form-item flex-1'>
      <input type={type} id={otherProps.name} placeholder={label} className='form-input' {...otherProps} />
      {label ? (
        <label className='font-light' htmlFor={otherProps.name}>
          {label}
        </label>
      ) : null}
      {helpText ? <span className='help-text text-sm'>{helpText}</span> : null}
    </div>
  );
};
