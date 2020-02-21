import React from 'react'
import styled from 'styled-components'
import StyledLink from '../styled/StyledLink'
import PropTypes from 'prop-types'

const Title = styled.p`
    color: gray;
    -webkit-text-stroke: white .5px;
    font-size: 2.5em;
    font-family: 'Helvetica Neue';
    text-decoration: none;
    transition: color .5s linear;
    /* margin-top: auto;
    margin-bottom: auto; */
    /* transition: font-size 1.5s linear;
    transition: margin-top 1.5s linear;
    transition: margin-bottom 1.5s linear; */

    &:hover {
        color: white;
        /* font-size: 2.6em;
        margin-top: calc(auto - .25em);
        margin-bottom: calc(auto - .25em); */
    }
`

const MenuItemWrap = styled.div`
    text-align: center;
`

const MenuContentItem = ({ linkTo, title }) => {
    return (
        <MenuItemWrap>
            <StyledLink to={linkTo}>
                <Title>{title}</Title>
            </StyledLink>
        </MenuItemWrap>
    )
}

MenuContentItem.propTypes = {
    linkTo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default MenuContentItem
