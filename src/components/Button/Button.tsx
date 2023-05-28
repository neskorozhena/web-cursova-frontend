import React from 'react';
import { useHistory } from 'react-router-dom';
import * as Styled from './Button.styles';

interface ButtonProps {
  onClick: () => void;
  text: string;
  href?: string;
  disabled?: boolean;
  variant?: 'contained' | 'outlined' | 'dark';
  img?: string | null;
  first?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  disabled,
  href,
  variant,
  children,
  img,
  first,
}) => {
  const history = useHistory();
  const handleClick = () => {
    if (!disabled) {
      if (href) {
        history.push(href);
      } else if (onClick) {
        onClick();
      }
    }
  };

  const buttonContent = (
    <>
      {children && <div className="children-content">{children}</div>}
      {text && img ? (
        <div className="content-with-img">
          {first && <img src={img} alt="icon" className="first-icon" />}
          <div className="text-link">{text}</div>
          {!first && <img src={img} alt="icon" />}
        </div>
      ) : (
        <div className="text-link">{text}</div>
      )}
    </>
  );

  // eslint-disable-next-line
  return variant === 'contained' ? (
    <Styled.ContainedButtonContainer>
      <Styled.ContainedLink
        aria-disabled={disabled}
        onClick={handleClick}
        className={`${disabled && 'disabled'}`}
      >
        {buttonContent}
      </Styled.ContainedLink>
    </Styled.ContainedButtonContainer>
  ) : variant === 'outlined' ? (
    <Styled.OutlinedButtonContainer>
      <Styled.OutlinedLink
        aria-disabled={disabled}
        onClick={handleClick}
        className={`${disabled && 'disabled'}`}
      >
        {buttonContent}
      </Styled.OutlinedLink>
    </Styled.OutlinedButtonContainer>
  ) : (
    <Styled.ContainedButtonContainer>
      <Styled.DarkLink
        aria-disabled={disabled}
        onClick={handleClick}
        className={`${disabled && 'disabled'}`}
      >
        {buttonContent}
      </Styled.DarkLink>
    </Styled.ContainedButtonContainer>
  );
};

Button.defaultProps = {
  disabled: false,
  variant: 'contained',
  img: null,
};

export default Button;
