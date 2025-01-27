import { IoIosArrowDown } from 'react-icons/io'
import { IconType } from 'react-icons'

interface MenuItem {
  name: string
  href?: string
  icon?: IconType
  primarySubMenu?: MenuItem[] 
  secondarySubMenu?: MenuItem[] 
}

export const MenuItems: MenuItem[] = [
  {
    name: 'Home',
    href: '/',
  },

  {
    name: 'Valentine - Feb 14th',
    href: '/valentine',
  },
  {
    name: 'Cakes',
    href: '/cakes',
  },
  {
    name: 'CupCakes',
    href: '/cupcake',
  },
  {
    name: 'FoilCakes',
    href: '/foilcake',
  },
  {
    name: 'Combos',
    href: '/combos',
  },
  {
    name: 'Occasion',
    href: '/occasion',
  },
  {
    name: 'FAQs',
    href: '/faqs',
  },
]
