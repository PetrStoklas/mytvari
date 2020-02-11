import React from 'react'
import PropTypes from 'prop-types'
import StyledLink from '../styled/StyledLink'
import styled from 'styled-components'

const StyledSectionWrap = styled.div`
    padding: 5%;
    padding-right: 0;
    border-radius: 0 15px 0 0;
    background-color: white;
    height: calc(100% + 2px);
    max-width: 500px;
`

const ImgWrap = styled.div`
    width: 60%;
    margin: auto;
`

const StyledParagraph = styled.p`
    font-family: 'Helvetica Neue';
    text-align: justify;
    text-justify: inter-word;
    margin: auto;
`

const Section = ({ header, text, imgSrc, linkTo, right }) => {
    return (
        <StyledLink to={linkTo}>
            <StyledSectionWrap>
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
}

Section.defaultProps = {
    right: false,
    text: ''
}

export default Section
