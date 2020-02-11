import React from 'react'
import GraphicDesignImage from '../../images/graphicDesign.png'
import Section from './Section'

const Clothes = () => {
    return (
        <Section
            imgSrc={GraphicDesignImage}
            header='něco na sebe'
            linkTo="/clothes/"
            right={true}
        />
    )
}

export default Clothes
