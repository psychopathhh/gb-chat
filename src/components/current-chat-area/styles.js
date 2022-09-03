import styled from '@emotion/styled'
import { keyframes } from '@emotion/react';
import { Input as DefaultInput } from '@mui/material';
import { Send } from '@mui/icons-material'

export const Input = styled(DefaultInput)`
    font-size: calc(10px + 2vmin);
    box-sizing: border-box;
    padding: calc(7px + 1vmin) calc(15px + 1vmin);
    width: 100%;
    border-radius: 25px;
    background: rgb(180, 180, 180);
    border: 0;
    outline: transparent;
    color: #000;
`
export const SendIcon = styled(Send)`
    cursor: pointer;
    color: #fff;
    width: calc(20px + 1vmin) ;
    height: calc(20px + 1vmin) ;
    background: #00a884;
    border-radius: 50%;
    padding: calc(10px + 1vmin);
    transition: animation 100ms ease-in-out;
    animation: ${keyframes`
        from {
            transform: scale(0)
        }
        to {
            transform: scale(1)
        }
        `} 100ms ease-in-out;
    &:hover {
        filter: brightness(0.5);
    }
  &:active {
    filter: brightness(0.7);
  }

`
export const Msg = styled.div`
  color: #000;
  max-width: 49%;
  word-break: break-all;
  margin: 10px;
  padding: 5px;
  border-radius: 10px;
  box-sizing: border-box;
  text-align: left;
  line-height: 1.5;
  margin: ${(props) => props.isUser ? '0 0 calc(30px + 1vmin) auto' : 'margin: auto 0 calc(30px + 1vmin) 0;'};
`

export const Time = styled.span`
    color: rgb(158, 158, 158);
    font-size: calc(10px + 1vmin);
    display: flex;
    padding: 5px 0 0 0;
    box-sizing: border-box;
    justify-content: ${(props) => props.isUser ? 'end' : 'start'};
`