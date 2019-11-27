import React from 'react';
import styled, { css } from 'styled-components';
import { darkGrey, extraLightGrey } from './Colors';


export const FlexContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: ${({ dir='row' }) => dir };
  justify-content: ${({ justify='start' }) => justify};
  align-items: ${({ align='center' }) => align};
  > * {
    flex-grow: 8;
    flex-shrink: 8;
    flex-basis: 0;  
  }
`;

export const FlexItem = styled.div`
  flex-grow: ${({ grow=8 }) => grow};
  flex-shrink: ${({ shrink=8 }) => shrink};
  flex-basis: ${({ basis=8 }) => basis};
`;

export const GridContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const GridCol = styled.div`
  display: inline-block;
  width: ${({ col=3 }) => `${(col/12) * 100}%`};
  height: 100%;
`;

export const PageWrapper = ({ children }) => (
  <FlexItem grow={9}>
    {children}
  </FlexItem>
);

export const PageHeader = styled(FlexContainer)`
  height: 98px;
  padding-left: 30px;
  background-color: ${extraLightGrey};
  align-items: center;
  > h1 {
    display: inline-block;
    font-size: 28px;
    font-weight: 600;
    color: ${darkGrey};
  }
`;
