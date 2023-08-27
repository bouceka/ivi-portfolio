import * as React from 'react';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  placeholder?: string;
}

export const Textarea = ({ label, ...props }: Props) => {
  return (
    <div className='form-item'>
      <textarea id={props.name} className='form-input' placeholder={label} {...props} />
      <label className='font-light' htmlFor={props.name}>
        {label}
      </label>
    </div>
  );
};
