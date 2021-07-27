import { MenuWrapper } from './style';
import { Logo } from '../../../theme/Logo';

import Link from 'next/link'

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
                        <Link href={item.url}>
                            {item.text}
                        </Link>
                    </li>
                ))}
            </MenuWrapper.CentralSide>
            <MenuWrapper.RightSide>
                Buttons Area
            </MenuWrapper.RightSide>
        </MenuWrapper>
    )
}