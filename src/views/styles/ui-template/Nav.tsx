import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { gutter } from '../variables';

export const Navbar = styled.div`
  display: block;
  padding: ${gutter.default} 0;
`;

export const Nav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin-bottom: 0;
`;

export const NavItem = styled.li`
`;

export const NavLink = styled(Link)`
  display: block;
  padding: ${gutter.small} ${gutter.default};
`;
