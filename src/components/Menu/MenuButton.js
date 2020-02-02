import React from 'react'
import styled from 'styled-components'

const Circle =  styled.div`
    width: 8px;
    height: 8px;
    border: 1px solid black;
    border-radius: 8px;
    margin: 5px 0;
`

const Wrap = styled.div`
    position: absolute;
`

export default props => (
    <Wrap {...props} >
        <Circle />
        <Circle />
        <Circle />
    </Wrap>
)