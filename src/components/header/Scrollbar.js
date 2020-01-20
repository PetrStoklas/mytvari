import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Bar = styled.div`
    width: 1px;
    height: 250px;
    background-color: black;
`

const Handle = styled.div`
    background-color: red;
    width: 17px;
    height: 12px;
    border-radius: 50%;

    position: relative;
    top: 100%;
    right: 8px;
`

const Scrollbar = props => {
    return (
        <div>
            <Handle />
            <Bar />
         </div>
    )
}

Scrollbar.propTypes = {

}

export default Scrollbar
