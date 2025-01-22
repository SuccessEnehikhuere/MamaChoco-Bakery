import { IoIosArrowForward } from 'react-icons/io'
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
    icon: IoIosArrowDown,
    primarySubMenu: [
      {
        name: 'By Type',
        icon: IoIosArrowForward,
        secondarySubMenu: [
          {
            name: 'All Cakes',
            href: '/cakes',
          },
          {
            name: "Children's Cake",
            href: '/children',
          },
          {
            name: "Men's Cake",
            href: "/men's cake",
          },
          {
            name: "Women's Cake",
            href: "/women's cake",
          },
          {
            name: 'Tier Cake',
            href: '/Tier',
          },
        ],
      },
      {
        name: 'By Flavour',
        href: '/cakeflavour',
        icon: IoIosArrowForward,
        secondarySubMenu: [
          {
            name: 'Red Velvet Cake',
            href: '/red-velvet-cakes',
          },
          {
            name: 'Vanilla Cake',
            href: '/vanilla-cake',
          },
          {
            name: 'Chocolate Cake',
            href: '/choco-cake',
          },
        ],
      },
    ],
  },
  {
    name: 'CupCakes',
    href: '/cupcake',
  },
  {
    name: 'Combos',
    href: '/combos',
  },
  {
    name: 'Occasion',
    icon: IoIosArrowDown,
    primarySubMenu: [
      {
        name: 'Birthday',
        href: '/birthday',
      },
      {
        name: 'Wedding',
        href: '/wedding',
      },
      {
        name: 'Anniversary',
        href: '/anniversary',
      },
      {
        name: 'Christmas - Dec 25th',
        href: '/christmas',
      },
      {
        name: "Mother's Day",
        href: "/mother'sCake",
      },
      {
        name: "Father's Day",
        href: "/father'sCake",
      },
      {
        name: 'Engagement',
        href: '/Engagement',
      },
      {
        name: 'Bridal Shower',
        href: '/bridal shower',
      },
      {
        name: 'Graduation',
        href: '/graduation',
      },
    ],
  },
  {
    name: 'FAQs',
    href: '/faqs',
  },
]
