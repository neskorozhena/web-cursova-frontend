import React, { useState } from 'react';
import * as Styled from './Accordion.styles';
import bottomArrow from '../../global/media/bottom-arrow.svg';

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion = ({ title, content }: AccordionProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () => setIsCollapsed((prev) => !prev);

  return (
    <Styled.AccordionWrapper>
      <div
        onClick={handleCollapse}
        className={` accordionHeader ${
          isCollapsed && 'accordionHeaderCollapsed'
        }`}
      >
        <Styled.HeaderTitle>{title}</Styled.HeaderTitle>
        <Styled.ImgBlock>
          <img
            className={`headerIcon ${isCollapsed && 'headerIconCollapsed'}`}
            src={bottomArrow}
            alt="bottom arrow"
          />
        </Styled.ImgBlock>
      </div>
      <div
        className={`accordionBody ${isCollapsed && 'accordionBodyCollapsed'}`}
      >
        {content}
      </div>
    </Styled.AccordionWrapper>
  );
};

export default Accordion;
