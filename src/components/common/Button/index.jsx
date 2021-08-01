import styled, { css } from 'styled-components'
import get from 'lodash/get'

const ButtonGhost = css`
    color: ${({theme, variant}) =>  get(theme, `colors.${variant}.main.color`)};
    background: transparent;
`

const ButtonDefault = css`
    color: #fff;
    background-color: ${({theme, variant}) => get(theme, `colors.${variant}.main.color`)};
    color: ${({theme, variant}) => get(theme, `colors.${variant}.main.contrastText`)};
`

export const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    border-radius: ${({theme}) => theme.borderRadius};
    transition: opacity ${({theme}) => theme.transition};
    ${({ ghost }) => ghost === undefined ? ButtonDefault : ButtonGhost}
    &:hover,
    &:focus {
        opacity: .5;
    }
`
