import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import PicturePart from './PicturePart'

const DimmedBackground = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(255, 255, 255, .85);
`

const Index = props => {
    return (
        <>
            {'logo animation will go here'}
            <DimmedBackground>
                <PicturePart />
            </DimmedBackground>
        </>
    )
}

Index.propTypes = {

}

export default Index
