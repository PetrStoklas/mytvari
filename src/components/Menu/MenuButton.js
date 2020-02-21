import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const Circle =  styled.div`
    width: 8px;
    height: 8px;
    border: 1px solid black;
    border-radius: 8px;
    margin: 5px;
    position: relative;
    z-index: 5;
    right: .5vw;
    bottom: 0;
    transition: bottom 1s;
    left: 25%;
    bottom: -10%;
    ${props => props.drop && css`
        bottom: -150%
  `}
`

const Wrap = styled.div`
    width: 50px;
    height: 70px;
    position: relative;
    z-index: 2;
`

export default ({open, ...props}) => {
    return (
        <Wrap {...props} opened={open}>
            <Circle first/>
            <Circle second/>
            <Circle drop={open}/>
        </Wrap>
)}