import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const Circle =  styled.div`
    width: 8px;
    height: 8px;
    border: 1px solid black;
    border-radius: 8px;
    // margin: 5px;
    position: absolute;
    right: .5vw;
    bottom: 10px;
    transition: bottom 1s;
    ${props => props.first && css`
        bottom: 50px;
  `}
    ${props => props.second && css`
        bottom: 30px;
  `}
    ${props => props.drop && css`
        bottom: -40px
  `}
`

const Wrap = styled.div`
    position: absolute;
    bottom: 30px;
    right: 13px;
    width: 30px;
    height: 70px;
`

export default ({open, ...props}) => {
    return (
        <Wrap {...props}>
            <Circle first/>
            <Circle second/>
            <Circle drop={open}/>
        </Wrap>
)}