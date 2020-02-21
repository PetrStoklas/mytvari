import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Bar = styled.div`
    width: 1px;
    height: 300px;
    background-color: #707070;
    margin-right: 10px;
`

const Scrollbar = props => {
    return (
        <div>
            <Bar />
         </div>
    )
}

Scrollbar.propTypes = {

}


// 6644322/0100

// 5231001000
export default Scrollbar
