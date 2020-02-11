import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Wrap from './wrap'
import Scrollbar from './Scrollbar'
import MainLogo from '../MainLogo/MainLogo'
import Menu from '../Menu/Menu'
import constants from '../../constants.json'

const index = props => {
    return (
        <>
            <Wrap width={constants.bodyToMenu}>
                <Link to="/start">
                    <MainLogo />
                </Link>
                <Scrollbar />
                <Menu />
            </Wrap>
        </>
    )
}

index.propTypes = {

}

export default index
