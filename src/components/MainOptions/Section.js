import React from 'react'
import PropTypes from 'prop-types'
import StyledLink from '../styled/StyledLink'
import styled from 'styled-components'

const StyledSectionWrap = styled.div`
    padding: 5%;
    margin: 5% 5%;
    border-radius: 5px;
    border: 1px solid;
    background-color: white;
    border-color: lightgray;
    height: calc(100% + 2px);
    max-width: 500px;
    box-shadow: 3px 2px 20px -6px rgba(0,0,0,0);
    font-size: 1em;
    transition: box-shadow .5s, max-width .5s, font-size .5s, margin .5s, border-color .5s;

    &:hover {
        border-color: black;
        max-width: 530px;
        position: relative;
        z-index: 5;
        box-shadow: 3px 2px 20px -6px rgba(0,0,0,0.75);
        font-size: 1.09em;
        margin: 2% 5%;
    }
`

const ImgWrap = styled.div`
    width: 60%;
    margin: auto;
`

const StyledParagraph = styled.p`
    font-family: 'Helvetica Neue';
    text-align: justify;
    text-justify: inter-word;
`

const Section = ({ header, text, imgSrc, linkTo, right, setDim }) => {
    return (
        <StyledLink to={linkTo} >
            <StyledSectionWrap 
                onMouseEnter={() => setDim(true)}
                onMouseLeave={() => setDim(false)}
            >
                <h2 style={{ fontFamily: 'Helvetica Neue' }}>{header}</h2>
                {imgSrc && (
                    <ImgWrap>
                        <img src={imgSrc} alt="graphic design" style={{ width: '100%' }} />
                    </ImgWrap>
                )}
                <br />
                {text && <StyledParagraph>{text}</StyledParagraph>}
                </StyledSectionWrap>
        </StyledLink>
    )
}

Section.propTypes = {
    text: PropTypes.string,
    right: PropTypes.bool,
    header: PropTypes.string.isRequired,
    imgSrc: PropTypes.node.isRequired,
    linkTo: PropTypes.string.isRequired,
    dimBackground: PropTypes.func.isRequired,
}

Section.defaultProps = {
    right: false,
    text: '',
}

export default Section
