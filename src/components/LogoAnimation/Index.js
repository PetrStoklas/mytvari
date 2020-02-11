import React from 'react'
import styled from 'styled-components'
import Logo from '../../images/logo.png'

const DimmedBackground = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    line-height: 100vh;
    width: 100vw;
    background-color: rgba(255, 255, 255, .85);
    animation: fadeout 1s linear 2s;


    @keyframes fadeout {
        from { opacity: .85 }
        to { opacity: 0 }
    }
`

const PictureCover = styled.div`
    width: 12vw;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(255, 255, 255, .85);
    animation: slideWidth 2s ease-in-out;

    @keyframes slideWidth {
        from { width: 87vw; }
        to { width: 12vw; }
    };
`

const Picture = styled.img`
    width: 100%;
    margin: auto;
    vertical-align: middle;
`

const Index = () => {
    
    setTimeout(() => {
        if (typeof window !== `undefined`) window.location.replace(`/start`)
    }, 2700)

    return (
        <DimmedBackground>
            <PictureCover />
            <Picture src={Logo} />
        </DimmedBackground>
    )
}

export default Index
