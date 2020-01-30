import styled, { css } from 'styled-components'

export default styled.header`
    ${({ width }) => width && css`width: ${width}px;`}
    height: 100vh;
    position: fixed;
    right: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`