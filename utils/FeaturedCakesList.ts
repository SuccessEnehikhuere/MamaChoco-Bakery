interface FeaturedListTypes {
  id: number,
  name: string,
  price: string,
  image: string,
  image2?: string
}


export const FeaturedList: FeaturedListTypes[] = [
  {
    id: 1,
    name: 'simple buttercream cake',
    price: 'starting from #10,000',
    image: '/images/cream1.jpg',
    image2: '/images/flowercake1.jpg',
  },
  {
    id: 2,
    name: 'chocolate cake',
    price: 'starting from #25,000',
    image: '/images/chco2.jpg',
    image2: '/images/chocolate2.jpg',
  },
  {
    id: 3,
    name: 'Kids Cake',
    price: 'starting from #35,000',
    image: '/images/kid1.jpg',
    image2: '/images/kid2.jpg',
  },
  {
    id: 4,
    name: 'white Wedding Cake',
    price: 'starting from #150,000',
    image: '/images/white1.jpg',
    image2: '/images/white2.jpg',
  },
  {
    id: 5,
    name: 'Cup Cakes',
    price: 'starting from #8,000',
    image: '/images/cupcake1.jpeg',
    image2: '/images/cupcake2.jpeg',
  },
  {
    id: 6,
    name: 'Traditional Wedding Cake',
    price: 'starting from #80,000',
    image: '/images/trad1.jpg',
    image2: '/images/trad3 (1).jpg',
  },
  {
    id: 7,
    name: 'Simple Fondant Cake',
    price: 'starting from #28,000',
    image: '/images/fondant1.jpg',
    image2: '/images/fondant3.jpg',
  },
  {
    id: 8,
    name: "Men's cake",
    price: 'starting from #35,000',
    image: '/images/men1.jpg',
    image2: '/images/men2.jpg',
  },
  {
    id: 9,
    name: "Women's Cake",
    price: 'starting from #35,000',
    image: '/images/mine1.jpg',
    image2: '/images/women2.jpg',
  },
]