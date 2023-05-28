import { ChangeEvent } from 'react';
import { BsSearchHeart } from 'react-icons/bs';
import * as Styled from './SearchBar.styles';

interface SearchBarProps {
  value: string;
  placeholder: string;
  setValue: (value: string) => void;
  onSearchClick: () => void;
}

const OrderSearchModal = ({
  value,
  placeholder,
  setValue,
  onSearchClick,
}: SearchBarProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Styled.SearchBarWrapper>
      <Styled.SearchBarInput>
        <input
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          type="text"
          /* eslint-disable-next-line jsx-a11y/no-autofocus */
          autoFocus
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              onSearchClick();
            }
          }}
        />
      </Styled.SearchBarInput>
      <Styled.SearchBarButton>
        <div onClick={onSearchClick}>
          <BsSearchHeart />
        </div>
      </Styled.SearchBarButton>
    </Styled.SearchBarWrapper>
  );
};

export default OrderSearchModal;
