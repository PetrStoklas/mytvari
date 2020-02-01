import React from 'react'
import PropTypes from 'prop-types'
import GraphicDesignImage from '../../images/graphicDesign.png'
import Section from './Section'

const Main = props => {
    const text = 'máme rádi tvary. tvoříme vlastní designy z obrázků a fotek, které pak umisťujeme do světa okolo nás. zatím je můžete pověsit na stěnu nebo je najít na oblečení a na dekorativních předmětech...'

    return (
        <Section
            imgSrc={GraphicDesignImage}
            text={text}
        />
    )
}

Main.propTypes = {

}

export default Main
