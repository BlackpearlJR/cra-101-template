import styled, { css } from 'styled-components';
import { colorLighten } from '@/views/styles/functions';
import { borderRadius, delay, font } from '../variables';

const buttons = ['primary', 'info', 'warning', 'danger', 'success', 'secondary'];

interface ButtonInterface{
  color: 'primary' | 'info' | 'warning' | 'danger' | 'success' | 'secondary';
}

const Button = styled.button<ButtonInterface>`
  display: inline-block;
  background-color: transparent;
  padding: 0.5rem 1.5rem;
  height: 40px;
  font-size: ${font.size.default};
  font-weight: ${font.weight.normal};
  line-height: 1.43;
  border: 1px solid transparent;
  border-radius: ${borderRadius.default};
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: ${delay};

  &:focus, &:active{
    outline: none;
    box-shadow: none;
  }

  &:disabled{
    cursor: not-allowed;
    box-shadow: none;
  }

  ${buttons.map(button => props => props.color === button && css`
    color: ${({ theme }) => theme.colors[button].contrastText};
    background-color: ${({ theme }) => theme.colors[button].default};
    &:hover{
      background-color: ${({ theme }) => colorLighten(`${theme.colors[button].default}`, 20)};
    }
    &:active{
      background-color: ${({ theme }) => theme.colors[button].focus};
    }
  `)}
`;

export default Button;
