import React from 'react'
import PropTypes from 'prop-types'
import Wrap from './wrap'
import Scrollbar from './Scrollbar'
import MainLogo from '../MainLogo/MainLogo'
import Menu from '../Menu/Menu'

const index = props => {
    return (
        <>
            <Wrap>
            <MainLogo />
            <Scrollbar />
            <Menu />
            </Wrap>
        </>
    )
}

index.propTypes = {

}

export default index
