import {
  Image
} from 'react-native-elements'

const shoes1 = Image.resolveAssetSource(require('store21Unicorns/src/assets/images/shoes1.png')).uri
const shoes2 = Image.resolveAssetSource(require('store21Unicorns/src/assets/images/shoes2.png')).uri
const shoes3 = Image.resolveAssetSource(require('store21Unicorns/src/assets/images/shoes3.png')).uri
const shoes4 = Image.resolveAssetSource(require('store21Unicorns/src/assets/images/shoes4.png')).uri
const shoes5 = Image.resolveAssetSource(require('store21Unicorns/src/assets/images/shoes5.png')).uri
const shoes6 = Image.resolveAssetSource(require('store21Unicorns/src/assets/images/shoes6.png')).uri

const products = [
  {
    id: 1,
    name: 'test all the title for this item',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laudantium eius reprehenderit iure. Voluptatibus perferendis eligendi explicabo eius eveniet dolore nostrum quas! Sit quae vel mollitia, quidem accusantium officiis neque?',
    price: 220,
    image: shoes1,
    color: [
      '#9FBCFF',
      '#FF7062',
      '#FFDF9B'
    ],
    size: [
      'XS',
      'S',
      'M',
      'L',
      'XL',
      'XXL'
    ],
    gallery: [
      shoes1,
      shoes1,
      shoes1,
      shoes1,
      shoes1,
    ],
    user: {
      id: 1,
      name: 'Massimo',
      lastName: 'Dutti'
    }
  },
  {
    id: 1,
    name: 'Item 2',
    price: 220,
    image: shoes2,
    gallery: [
      shoes2,
      shoes2,
      shoes2,
      shoes2,
      shoes2,
    ]
  },
  {
    id: 1,
    name: 'Item 3',
    price: 220,
    image: shoes3,
    gallery: [
      shoes3,
      shoes3,
      shoes3,
      shoes3,
      shoes3,
    ]
  },
  {
    id: 1,
    name: 'Item 4',
    price: 220,
    image: shoes4,
    gallery: [
      shoes4,
      shoes4,
      shoes4,
      shoes4,
      shoes4,
    ]
  },
  {
    id: 1,
    name: 'Item 5',
    price: 220,
    image: shoes5,
    gallery: [
      shoes5,
      shoes5,
      shoes5,
      shoes5,
      shoes5,
    ]
  },
  {
    id: 1,
    name: 'Item 6',
    price: 220,
    image: shoes6,
    gallery: [
      shoes6,
      shoes6,
      shoes6,
      shoes6,
      shoes6,
    ]
  },
]

export default products