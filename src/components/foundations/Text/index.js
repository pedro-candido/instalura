import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { propToStyle } from '../../../theme/utils/propToStyle'


export const TextStyleVariants = {
    smallestException: css`
        cursor: ${({ as }) => as === 'a' ? 'pointer' : 'normal'};
        font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
    `,
    paragraph1: css`
        cursor: ${({ as }) => as === 'a' ? 'pointer' : 'normal'};
        font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
    `,
    title: css`

    `
}

const TextBase = styled.span`
    ${({ variant }) => TextStyleVariants[variant]}
    ${(props) => propToStyle('textAlign', props)}
`

export default function Text({ tag, variant, children, ...rest }) {
    return (
        <TextBase variant={variant} as={tag} {...rest}>
            {children}
        </TextBase>
    )
}

Text.propTypes = {
    tag: PropTypes.string,
    variant: PropTypes.string,
    children: PropTypes.node.isRequired
}

Text.defaultProps = {
    tag: 'span',
    variant: 'paragraph1'
}