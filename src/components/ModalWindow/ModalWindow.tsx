import React, { useEffect } from 'react';
import * as Styled from './ModalWindow.styles';
import closeIcon from '../../global/media/modal-close-icon.svg';

interface ModalWindowProps {
  onClose: () => void;
  noClose?: boolean;
  zIndex?: boolean;
}

const ModalWindow: React.FC<ModalWindowProps> = ({
  onClose,
  children,
  noClose,
  zIndex,
}) => {
  useEffect(() => {
    document.body.classList.add('no-scroll');

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <>
      <Styled.ModalWindowBackdrop onClick={!noClose ? onClose : () => {}} />
      {zIndex ? (
        <Styled.ModalWindowContainer100>
          <Styled.ModalWindowHeader>
            <Styled.ModalCloseIconContainer onClick={onClose}>
              {!noClose && <img src={closeIcon} alt="close icon" />}
            </Styled.ModalCloseIconContainer>
          </Styled.ModalWindowHeader>
          <Styled.ModalWindowContent>{children}</Styled.ModalWindowContent>
        </Styled.ModalWindowContainer100>
      ) : (
        <Styled.ModalWindowContainer>
          <Styled.ModalWindowHeader>
            <Styled.ModalCloseIconContainer
              onClick={!noClose ? onClose : () => {}}
            >
              {!noClose && <img src={closeIcon} alt="close icon" />}
            </Styled.ModalCloseIconContainer>
          </Styled.ModalWindowHeader>
          <Styled.ModalWindowContent>{children}</Styled.ModalWindowContent>
        </Styled.ModalWindowContainer>
      )}
    </>
  );
};

export default ModalWindow;
