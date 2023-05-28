import * as Styled from './CustomTextarea.styles';

interface CustomInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  isError?: boolean;
  isResizable?: boolean;
  disabled?: boolean;
  rows?: number;
}

const CustomTextarea = ({
  value,
  onChange,
  placeholder,
  isError,
  isResizable,
  rows,
  disabled,
}: CustomInputProps) => {
  return (
    <Styled.CustomTextareaContainer>
      <textarea
        value={value}
        placeholder={placeholder}
        className={`textarea ${isError && 'error'} ${
          !isResizable && 'nonResizable'
        } ${disabled && 'disabled'}`}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
      />
    </Styled.CustomTextareaContainer>
  );
};

CustomTextarea.defaultProps = {
  placeholder: '',
  isError: false,
  isResizable: false,
  disabled: false,
  rows: 2,
};

export default CustomTextarea;
