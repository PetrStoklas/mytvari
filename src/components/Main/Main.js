import React from 'react'
import GraphicDesignImage from '../../images/graphicDesign.png'
import Section from './Section'

const Main = () => {
    const text = 'máme rádi tvary. tvoříme vlastní designy z obrázků a fotek, které pak umisťujeme do světa okolo nás. zatím je můžete pověsit na stěnu nebo je najít na oblečení a na dekorativních předmětech...'

    return (
        <Section
            imgSrc={GraphicDesignImage}
            text={text}
        />
    )
}

export default Main
