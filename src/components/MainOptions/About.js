import React from 'react'
import Section from './Section'

const About = () => {
    const text = 'máme rádi tvary. tvoříme vlastní designy z obrázků a fotek, které pak umisťujeme do světa okolo nás. zatím je můžete pověsit na stěnu nebo je najít na oblečení a na dekorativních předmětech...'

    return (
        <Section
            header="o nás"
            linkToto="/about"
            text={text}
        />
    )
}

export default About
