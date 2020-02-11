import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MenuContentItem from './MenuContentItem'

// TODO: make color constant

const MenuBackground = styled.div`
    position: absolute;
    background-color: rgb(105, 105, 105);
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

const menuConfig = [
    {
        "title": "start",
        "linkTo": "/start"
    },
    {
        "title": "pro tisk",
        "linkTo": "/prints"
    },
    {
        "title": "něco na sebe",
        "linkTo": "/clothes"
    },
    {
        "title": "o nás",
        "linkTo": "about"
    }
]

const MenuContent = ({ open }) => {
    return (
        <MenuBackground open={open}>
            {menuConfig.map(item => (
                <MenuContentItem
                    title={item.title}
                    linkTo={item.linkTo}
                />
            ))}
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
