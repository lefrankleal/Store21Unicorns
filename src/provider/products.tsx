import {
  Image
} from 'react-native-elements'

const shoes1 = Image.resolveAssetSource(require('../assets/images/shoes1.png'))
const shoes2 = Image.resolveAssetSource(require('../assets/images/shoes2.png'))
const shoes3 = Image.resolveAssetSource(require('../assets/images/shoes3.png'))
const shoes4 = Image.resolveAssetSource(require('../assets/images/shoes4.png'))
const shoes5 = Image.resolveAssetSource(require('../assets/images/shoes5.png'))
const shoes6 = Image.resolveAssetSource(require('../assets/images/shoes6.png'))

const products = [
  {
    id: 1,
    name: 'test all the title for this item',
    price: 220,
    image: shoes1.uri,
    gallery: [
      shoes1.uri,
      shoes1.uri,
      shoes1.uri,
      shoes1.uri,
      shoes1.uri,
    ]
  },
  {
    id: 1,
    name: 'Item 2',
    price: 220,
    image: shoes2.uri,
    gallery: [
      shoes2.uri,
      shoes2.uri,
      shoes2.uri,
      shoes2.uri,
      shoes2.uri,
    ]
  },
  {
    id: 1,
    name: 'Item 3',
    price: 220,
    image: shoes3.uri,
    gallery: [
      shoes3.uri,
      shoes3.uri,
      shoes3.uri,
      shoes3.uri,
      shoes3.uri,
    ]
  },
  {
    id: 1,
    name: 'Item 4',
    price: 220,
    image: shoes4.uri,
    gallery: [
      shoes4.uri,
      shoes4.uri,
      shoes4.uri,
      shoes4.uri,
      shoes4.uri,
    ]
  },
  {
    id: 1,
    name: 'Item 5',
    price: 220,
    image: shoes5.uri,
    gallery: [
      shoes5.uri,
      shoes5.uri,
      shoes5.uri,
      shoes5.uri,
      shoes5.uri,
    ]
  },
  {
    id: 1,
    name: 'Item 6',
    price: 220,
    image: shoes6.uri,
    gallery: [
      shoes6.uri,
      shoes6.uri,
      shoes6.uri,
      shoes6.uri,
      shoes6.uri,
    ]
  },
]

export default products