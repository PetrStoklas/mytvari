import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MenuBackground = styled.div`
    position: absolute;
    background-color: darkgray;
    bottom: 0;
    right: 0;
    width: 100vw;
    height: 100vh;

    @keyframes openMenu {
        from { opacity: 0 }
        to { opacity: .9 }
    }

    @keyframes closeMenu {
        from { opacity: .9 }
        to { 
            opacity: 0;
            display: none;
        }
    }

    ${({ open }) => open && `
        animation: openMenu .5s;
        opacity: .9;
        display: block;
    `}

    ${({ open }) => !open && `
        animation: closeMenu .5s;
        opacity: 0;
        visibility: hidden;
        transition: visibility .5s;
    `}
    
`

const MenuContent = ({ open }) => {
    return (
        <MenuBackground open={open}>
            grafika
            foto
            weby a aplikace
            nabytek
        </MenuBackground>
    )
}

MenuContent.propTypes = {
    open: PropTypes.bool,
}

MenuContent.defaultProps = {
    open: false,
}

export default MenuContent
