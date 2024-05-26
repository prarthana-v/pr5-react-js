import { category } from "../category/category-data";

let data = [
  {
    id: 5,
    detail: 'Fresh organic apple 1kg simla marming',
    newprice: '$120',
    oldprice: '$125',
    img: '../img/pp1/fruits2.jpg',
    category: 'Fruits',
  },
  {
    id: 1,
    detail: 'Best snakes with hazel nut pack 200gm',
    newprice: '$145',
    oldprice: '$150',
    img: '../img/pp1/snacks1.jpg',
    category: 'Snacks',
  },
  {
    id: 6,
    detail: 'Organic fresh venila farm watermelon 5kg',
    newprice: '$145',
    oldprice: '$150',
    img: '../img/pp1/fruits1.jpg',
    category: 'Fruits',
  },
  , {
    id: 2,
    detail: 'Sweet crunchy nut mix 250gm pack',
    newprice: '$120.25',
    oldprice: '$123.25',
    img: '../img/pp1/snacks2.jpg',
    category: 'Snacks',
  },

  {
    id: 4,
    detail: 'Fresh organic villa farm lomon 500gm pack',
    newprice: '$120.5',
    oldprice: '$123.5',
    img: '../img/pp1/pp1.jpg',
    category: 'Vegetables',
  },

  {
    id: 7,
    detail: 'Delicious white baked fresh bread and toast',
    newprice: '$20',
    oldprice: '$22',
    img: '../img/pp1/bakery1.jpg',
    category: 'Bakery',
  },
  {
    id: 3,
    detail: 'Sweet crunchy nut mix 250gm pack',
    newprice: '$145',
    oldprice: '$150',
    img: '../img/pp1/snacks3.jpg',
    category: 'Snacks',
  },
  {
    id: 8,
    detail: 'Best snakes with hazel nut pack 200gm',
    newprice: '$20',
    oldprice: '$30',
    img: '../img/pp1/bakery1.jpg',
    category: 'Bakery',
  },
]

let productsCat = [
  {
    id: 0,
    category: 'View All',
  }
  , {
    id: 1,
    category: 'Snacks',
  },
  {
    id: 2,
    category: 'Vegetables',
  },
  {
    id: 3,
    category: 'Fruits',
  },
  {
    id: 4,
    category: 'Bakery',
  }
]

export {
  productsCat, data
}