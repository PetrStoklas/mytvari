import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Logo from '../../images/logo.png'

const PictureWrap = styled.div`
    width: 90%;
    margin: auto;
`

const PictureCover = styled.div`
    width: 90vw;
    height: 100vw;
    position: absolute;
    top: 0;
    right: 0;
    /* background-color: red; */
    background-color: rgba(255, 255, 255, .85);
`

const PicturePart = props => {
    return (
        <>
            <PictureCover />
            <img src={Logo} style={{ width: '100%' }} />
        </>
    )
}

PicturePart.propTypes = {

}

export default PicturePart
