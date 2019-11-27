import React from 'react';
import styled from 'styled-components';


const NavContainer = styled.div`
`;

const SideNav = props => {
  const { location: { pathname ='' } } = window;
  console.log(pathname)
  return (
    <NavContainer>
      Side Nav
    </NavContainer>
  );
};


export default SideNav;
