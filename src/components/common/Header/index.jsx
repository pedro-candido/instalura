import { MenuWrapper } from './style'
import { Logo } from '../../../theme/Logo'

import Link from 'next/link'

import { Button } from '../Button'

import Text from '../../foundations/Text'

export const Header = () => {
  const links = [
    {
      text: 'Home',
      url: '/'
    },
    {
      text: 'Perguntas Frequentes',
      url: '/faq'
    },
    {
      text: 'Sobre',
      url: '/sobre'
    }
  ]

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((item, index) => (
          <li key={index}>
            <Text variant="smallestException" tag='a' href={item.url}>
              {item.text}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button ghost variant='secondary'>
          Entrar
        </Button>
        <Button variant='primary'>
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}
