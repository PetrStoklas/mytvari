import styled, { css } from 'styled-components'

export default styled.div`
    display: flex;
    ${({direction}) => direction && css`flex-direction: ${direction};`}
    ${({justify}) => justify && css`justify-content: ${justify};`}
    ${({align}) => align && css`align-items: ${align};`}
`