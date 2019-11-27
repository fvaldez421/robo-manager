import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GridCol, GridContainer, FlexItem } from './StyleHelpers';
import { lightGrey, darkGrey } from './Colors';
import PepperIcon from '../images/Pepper_Icon.png';

const SideNavWrapper = styled(FlexItem)`
  background-color: ${lightGrey};
  height: 100%;
  max-width: 350px;
  min-width: 250px;
`;

const PepperLogo = styled(Link)`
  display: block;
  height: 98px;
  background-color: ${darkGrey};
  background-image: url(${PepperIcon});
  background-repeat: no-repeat;
  background-position: 30px 55%;
`;

const ContentWrapper = styled.div`
  padding: 0 15px;
`;

const SideNav = props => {
  const { location: { pathname ='' } } = window;
  console.log(pathname)
  return (
    <SideNavWrapper grow={3}>  
      <PepperLogo to='/dashboard' />
      <ContentWrapper>
      </ContentWrapper>
    </SideNavWrapper>
  );
};


export default SideNav;
