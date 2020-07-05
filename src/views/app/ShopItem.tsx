import {
  Dimensions,
  StyleSheet,
  View
} from 'react-native';
import {
  Image,
  Text
} from 'react-native-elements';
import React,
{ ComponentProps } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';

import Icon from '../../config/AdicticIcons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import globals from '../../config/globals';

const screen = Dimensions.get('screen')

interface ItemProps {
  id: number
  name: string
  price: number
  image: string
  gallery?: string[]
}

interface ShopItemProps {
  item: ItemProps
}

const ShopItem: ShopItemProps = (props) => {
  const { item } = props
  const { navigate } = useNavigation()

  return (
    <TouchableWithoutFeedback style={styles.container} onPress={() => navigate('Product', { item })}>
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
            color={globals.Colors.font.light}
            size={25}
            name='save' />
        </View>
        <Text h4 style={styles.itemPrice}>${item.price}</Text>
      </>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
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
    color: globals.Colors.font.dark,
    fontFamily: 'Muli-ExtraBold',
    textTransform: 'capitalize',
    fontWeight: 'normal',
    fontSize: 18,
  },
  itemPrice: {
    width: '100%',
    color: globals.Colors.font.light,
  }
})

export default ShopItem