import React from 'react'
import styled from 'styled-components'

const Circle =  styled.div`
    width: 8px;
    height: 8px;
    border: 1px solid black;
    border-radius: 8px;
    margin: 5px 0;
`

export default () => (
    <div>
        <Circle />
        <Circle />
        <Circle />
    </div>
)