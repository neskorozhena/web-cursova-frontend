import React from 'react';
import * as Styled from './CustomToggle.styles';

interface CustomToggleProps {
  title?: string;
  onChange: (value: boolean) => void;
  id: string;
  checked: boolean;
  variant: 'green' | 'standart';
}

const CustomToggle = ({
  onChange,
  id,
  title,
  checked,
  variant,
}: CustomToggleProps) => {
  return (
    <Styled.CustomToggleContainer>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        className={`toggle-button ${
          variant === 'green' && 'toggle-button-green'
        }`}
        onChange={(e) => {
          onChange(e.target.checked);
        }}
      />
      {title && (
        <label
          htmlFor={id}
          className={`toggle-title ${
            variant === 'green' && 'toggle-title-green'
          }`}
        >
          {title}
        </label>
      )}
    </Styled.CustomToggleContainer>
  );
};

export default CustomToggle;
