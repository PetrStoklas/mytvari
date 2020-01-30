import React from 'react'
import PropTypes from 'prop-types'

const Section = ({ text, imgSrc }) => {
    return (
        <div style={{ padding: '5%', paddingRight: '0', borderRadius: '0 15px 0 0', backgroundColor: 'white', height: 'calc(100% + 2px)',  }}>
            <h2>Grafika</h2>
            <div style={{ width: '60%', margin: 'auto' }}>
                <img src={imgSrc} alt="graphic design" style={{ width: '100%' }} />
            </div>
            <br />
            <p style={{ textAlign: 'justify', textJustify: 'inter-word', margin: 'auto' }}>{text}</p>
        </div>
    )
}

Section.propTypes = {
    text: PropTypes.string.isRequired,
    imgSrc: PropTypes.node.isRequired,
}

export default Section
