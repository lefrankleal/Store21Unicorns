import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  View
} from 'react-native'
import {
  Image,
  Text
} from 'react-native-elements'
import React, { ComponentProps } from 'react'

import Icon from '../../config/AdicticIcons'
import ShopItem from './components/ShopItem'
import globals from '../../config/globals'
import products from '../../provider/products'

const screen = Dimensions.get('screen')

const bannerAR = Image.resolveAssetSource(require('../../assets/images/banner.png'))

const Home = () => {
  return (
    <View
      style={styles.scrollView}>
      <FlatList
        contentContainerStyle={styles.itemsList}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.bannerContainer}>
            <Image
              resizeMode='contain'
              style={styles.banner}
              source={{ uri: bannerAR.uri }} />
            <Text h4 style={styles.subTitle}>Las mejores zapatillas de Madrid</Text>
          </View>
        }
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => <ShopItem key={index} item={item} />} />
    </View>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20
  },
  title: {
    fontFamily: 'Muli-ExtraBold',
    fontWeight: 'normal',
    fontSize: 32,
    alignSelf: 'center'
  },
  bannerContainer: {
    paddingVertical: 20
  },
  banner: {
    width: '100%',
    aspectRatio: bannerAR.width / bannerAR.height,
    borderRadius: 10
  },
  subTitle: {
    fontFamily: 'Muli-Regular',
    fontWeight: 'normal',
    alignSelf: 'center',
    color: globals.Colors.font.light,
    marginVertical: 10
  },
  itemsList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  }
})

export default Home