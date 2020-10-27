import styled from 'styled-components';
import { gutter, screen } from '../variables';

export const Container = styled.div`
  display: block;
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  @media(min-width: ${screen.sm.up}){
    max-width: 540px;
  }
  @media(min-width: ${screen.md.up}){
    max-width: 720px;
  }
  @media(min-width: ${screen.lg.up}){
    max-width: 960px;
  }
  @media(min-width: ${screen.xl.up}){
    max-width: 1140px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -${gutter.default};
  margin-left: -${gutter.default};
`;
