import React, { useState } from 'react';
import styled from 'styled-components';
import { darkGrey } from './Colors';


const DropDownContainer = styled.div`
  position: relative;
  > span {
    font-size: 13px;
    font-weight: 600;
    color: ${darkGrey};
  }
`;

const Options = styled.div`
  position: absolute;
  display: ${({ open = false }) => open ? 'initial' : 'none'};
`;

const DropDownOption = ({ id, name, onSelect }) => (
  <div onClick={() => onSelect(id)}>
    {name}
  </div>
);


export const DropDown = props => {
  const { label = '', options = [], activeOption = null, onSelect } = props;
  const [open = false, toggleOpen] = useState(false);
  return (
    <DropDownContainer>
      <span>{label}</span>
      
      <Options open={open}>
        {options.map(option => (
          <DropDownOption {...option} onSelect={onSelect} />
        ))}
      </Options>
    </DropDownContainer>
  )
}