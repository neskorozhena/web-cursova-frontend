import React, { useEffect, useState } from 'react';
import * as Styled from './Counter.styles';
import MinusIcon from '../../global/media/minus-icon.svg';
import PlusIcon from '../../global/media/plus-icon.svg';

export interface CounterProps {
  value: number;
  increaseCount: () => void;
  decreaseCount: () => void;
  setCountInCart: (count: number) => void;
  isAddedToCart?: boolean | undefined;
  colorCount?: string | null;
  analogCounter?: boolean;
}

const Counter = ({
  value,
  increaseCount,
  decreaseCount,
  isAddedToCart,
  setCountInCart,
  colorCount,
  analogCounter,
}: CounterProps) => {
  const [count, setCount] = useState<number | string>(value);

  useEffect(() => {
    setCount(value);
  }, [value]);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setCount(event.currentTarget.value);
    setCountInCart(Number(event.currentTarget.value));
  };

  const content = (
    <>
      <div className="countIcon" onClick={decreaseCount}>
        <img src={MinusIcon} alt="minus" />
      </div>
      <div className="count">{value}</div>
      <div className="countIcon" onClick={increaseCount}>
        <img src={PlusIcon} alt="plus" />
      </div>
    </>
  );

  return (
    // eslint-disable-next-line
    <>
      {!analogCounter ? (
        <Styled.CountContainer>{content}</Styled.CountContainer>
      ) : (
        <Styled.AnalogCountContainer>{content}</Styled.AnalogCountContainer>
      )}
    </>
  );
};

export default Counter;
