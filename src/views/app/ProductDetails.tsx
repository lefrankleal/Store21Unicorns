import { Dimensions, ScrollView, StyleSheet } from 'react-native'
import { Image, Text } from 'react-native-elements'

import { ProductProps } from '../../types';
import React from 'react'
import { useRoute } from '@react-navigation/native'

const screen = Dimensions.get('screen')

const ProductDetails = (props) => {
  const item: ProductProps = props.route.params.item

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <ScrollView pagingEnabled horizontal >
        {item.gallery.map((v, i) => {
          const image = Image.resolveAssetSource(v)
          console.log(image, i, 'image');

          return <Image
            style={{
              width: screen.width,
              aspectRatio: screen.width / image?.height
             }}
            key={i}
            source={{ uri: image.uri }} />
        })}
      </ScrollView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1
  },
  galleryImage: {
    width: screen.width
  }
})

export default ProductDetails