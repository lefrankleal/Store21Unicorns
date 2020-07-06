import {
  Dimensions,
  StyleSheet,
  View
} from 'react-native'
import { Globals, Icon } from 'store21Unicorns/src/config'
import {
  Image,
  Text
} from 'react-native-elements'
import { useNavigation, useRoute } from '@react-navigation/native'

import ProductResumeProps from 'store21Unicorns/src/types'
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const screen = Dimensions.get('screen')

const ProductResumeLite: ProductResumeProps = (props) => {
  const { item } = props
  const { navigate } = useNavigation()

  return (
    <TouchableWithoutFeedback style={styles.container} onPress={() => navigate('ProductDetails', { item })}>
      <>
        <View style={styles.itemImageContainer}>
          <Image
            style={styles.itemImage}
            source={{ uri: item.image }}
            resizeMode='cover' />
        </View>
        <View style={styles.itemBody}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Icon
            color={Globals.Colors.font.light}
            size={25}
            name='save' />
        </View>
      </>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingRight: 10,
  },
  itemImageContainer: {
    width: (screen.width / 2) - 30,
    height: (screen.width / 2) - 30
  },
  itemImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10
  },
  itemBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 2,
    paddingVertical: 5,
  },
  itemName: {
    width: (screen.width / 2) - 57,
    color: Globals.Colors.font.dark,
    fontFamily: 'Muli-ExtraBold',
    textTransform: 'capitalize',
    fontWeight: 'normal',
    fontSize: 18,
  },
  itemPrice: {
    width: '100%',
    color: Globals.Colors.font.light,
  }
})

export default ProductResumeLite