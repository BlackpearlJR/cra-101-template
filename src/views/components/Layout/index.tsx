import React from 'react';
import styled from 'styled-components';

import useTheme from '@/application/hooks/useTheme';
import { Container } from '@/views/styles/ui-template/Grid';
import {
  Nav,
  Navbar,
  NavItem,
  NavLink
} from '@/views/styles/ui-template/Nav';

// const Wrapper = styled.div``;
const Main = styled.main``;

const Layout: React.FunctionComponent = ({ children }): React.ReactElement => {
  const theme = useTheme();

  console.log('theme', theme);

  return (<>
    <Navbar>
      <Container>
        <Nav>
          <NavItem>
            <NavLink to='/'>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/product/honda">
              Product honda
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/product/2">
              Product 2 (with error)
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
    <Main>
      <Container>
        {children}
      </Container>
    </Main>
  </>);
};

export default Layout;
