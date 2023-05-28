import React, { ChangeEvent, useState, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';
import * as Styled from './SearchModal.styles';
import ModalWindow from '../ModalWindow';

interface Props {
  onClose: () => void;
  data: { name: string; code: string }[] | undefined;
  dataArray?: { name: string; code: string }[];
  setData: (code: string, name: string) => void;
  variant: 'networks' | 'statuses';
}

const SearchModal = ({ onClose, data, setData, dataArray, variant }: Props) => {
  const { t } = useTranslation();
  const [sortedData, setSortedData] = useState<
    { name: string; code: string }[] | undefined
  >(data);
  const [value, setValue] = useState('');

  const isNetworks = variant === 'networks';
  const isStatuses = variant === 'statuses';

  const handleSearchData = () => {
    if (value) {
      setSortedData(
        (data &&
          data?.filter((el: { name: string; code: string }) =>
            el.name.toLowerCase().includes(value.toLowerCase())
          )) ||
          []
      );
    } else {
      setSortedData(data);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSetData = (data: { code: string; name: string }) => {
    setData(data.code, data.name);
    (isNetworks || (isStatuses && data.code === '')) && onClose();
  };

  useEffect(() => {
    handleSearchData();
  }, [value]);

  const name = isNetworks ? 'Все сети' : 'Все статусы';

  return (
    <ModalWindow onClose={onClose} zIndex>
      <Styled.SearchContainer>
        <Styled.SearchBarInput>
          <input
            placeholder={t('ProductsPage.NETWORKS_MODAL.PLACEHOLDER')}
            value={value}
            onChange={handleInputChange}
            type="text"
            /* eslint-disable-next-line jsx-a11y/no-autofocus */
            autoFocus
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSearchData();
              }
            }}
          />
        </Styled.SearchBarInput>
        <Styled.SearchBlock>
          <div
            className="name-container"
            onClick={() => handleSetData({ name, code: '' })}
          >
            <div className="name">{name}</div>
          </div>
          {sortedData ? (
            sortedData.map((data: { name: string; code: string }) => (
              <div
                className="name-container"
                onClick={() => handleSetData(data)}
                key={data.code}
              >
                <div
                  className={` name ${
                    data.code ===
                      dataArray?.find((el) => el.code === data.code)?.code &&
                    'active'
                  }`}
                >
                  {data.name}
                </div>
              </div>
            ))
          ) : (
            <CircularProgress size={10} />
          )}
        </Styled.SearchBlock>
      </Styled.SearchContainer>
    </ModalWindow>
  );
};

export default SearchModal;
