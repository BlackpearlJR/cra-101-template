import React from 'react';
import styled from 'styled-components';

import useTheme from '@/application/hooks/useTheme';
import { Container } from '@/views/styles/ui-template/Grid';

const Wrapper = styled.div``;
const Main = styled.main``;

const Layout: React.FunctionComponent = ({ children }): React.ReactElement => {
  const theme = useTheme();

  console.log('theme', theme);

  return (<>
    <Main>
      <Container>
        {children}
      </Container>
    </Main>
  </>);
};

export default Layout;
