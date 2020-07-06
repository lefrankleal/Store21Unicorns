import { Badge, Button, ButtonGroup, Image, Input, Text, Icon as UIcon } from 'react-native-elements'
import { Dimensions, FlatList, ScrollView, StyleSheet, View } from 'react-native'
import { Globals, Icon } from 'store21Unicorns/src/config'
import React, { useRef, useState } from 'react'

import LinearGradient from 'react-native-linear-gradient'
import { ProductProps } from 'store21Unicorns/src/types'
import ProductResumeLite from './components/ProductResumeLite'
import ViewPager from '@react-native-community/viewpager'
import products from 'store21Unicorns/src/provider/products';
import { useRoute } from '@react-navigation/native'

const screen = Dimensions.get('screen')

const ProductDetails = (props) => {

  const [page, setPage] = useState(1)

  const pagerRef = useRef()

  const getPagerWidth = (e) => {
    const { x, y, width, height } = e;
    console.log(x, y, width, height);

  }

  const item: ProductProps = props.route.params.item

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
      <View
        style={styles.imageGalleryContainer}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal>
          {item.gallery.map((v, i) => {
            return <Image
              style={styles.galleryImage}
              key={i}
              source={{ uri: v }} />
          })}
        </ScrollView>
      </View>
      <Text style={styles.productName}>{item.name}</Text>
      <View style={styles.productDescriptionContainer}>
        <View style={styles.rankingContainer}>
          <Icon size={20} name='star-selected' color='#FFF3D8' />
          <Icon size={20} name='star-selected' color='#FFF3D8' />
          <Icon size={20} name='star-selected' color='#FFF3D8' />
          <Icon size={20} name='star-selected' color='#FFF3D8' />
          <Icon size={20} name='star-selected' color='#F4F7FD' />
          <Text style={styles.rankingQntLbl}>(594)</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.productOriginalPrice}>$250</Text>
          <Text style={styles.productPrice}>$220</Text>
        </View>
      </View>
      <Text h3 style={styles.productDescription}>{item.description}</Text>
      <View style={{ marginVertical: 15 }}>
        <Text style={styles.colorLabel}>Elige un color</Text>
        <View style={styles.productColorsContainer}>
          {item.color.map((v, i) => {
            return <Button buttonStyle={{ ...styles.colorItem, backgroundColor: v }} />
          })}
        </View>
      </View>
      <View style={{ marginVertical: 15 }}>
        <Text style={styles.sizeLabel}>Elige una talla</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.productColorsContainer}>
          {item.size.map((v, i) => {
            return <Button title={v} titleStyle={{ ...styles.sizeLabel, fontSize: 17, color: Globals.Colors.font.light }} buttonStyle={styles.sizeItem} />
          })}
        </ScrollView>
      </View>
      <View style={styles.addToCartContainer}>
        <Input
          rightIcon={
            <UIcon name='plus' type='feather' size={25} color={Globals.Colors.font.light} />
          }
          errorStyle={{ display: 'none' }}
          containerStyle={{ width: '28%', paddingHorizontal: 0 }}
          inputStyle={{ textAlign: 'center', fontSize: 24 }}
          value={'2'}
          leftIcon={
            <UIcon name='minus' type='feather' size={25} color={Globals.Colors.font.light} />
          } />
        <Button
          title='Agregar'
          titleStyle={{ fontSize: 20 }}
          containerStyle={{ width: '68%' }}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: [Globals.Colors.gradient.light, Globals.Colors.gradient.dark],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 },
          }} />
      </View>
      <View style={{ marginVertical: 15 }}>
        <Text style={styles.partnerLabelTitle}>Gana un porcentaje por colaboración</Text>
        <View style={styles.partnerOfferContainer}>
          <Text style={{ fontFamily: 'Muli-Bold', fontSize: 22 }}>6% </Text>
          <Text style={{ fontSize: 22, color: Globals.Colors.font.light }}>equivalente a </Text>
          <Text style={{ fontSize: 26 }}>${item.price * 0.06}</Text>
        </View>
        <Text style={styles.partnerLabelDescription}>Cada vez que alguien compra este producto desde tus publicaciones guardadas.</Text>
      </View>
      <View style={{ marginVertical: 15 }}>
        <Text style={styles.moreFromLabel}>Mas productos de {item.user.name} {item.user.lastName}</Text>
        <FlatList
          contentContainerStyle={{ justifyContent: 'space-around' }}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={item => item.id}
          data={products}
          renderItem={({ item, index }) => <ProductResumeLite key={index} item={item} />} />
      </View>
      <ButtonGroup
        onPress={(e) => setPage(e)}
        selectedIndex={page}
        buttonContainerStyle={{
          textAlign: 'center'
        }}
        buttons={[
          'Preguntas',
          'Valoraciones'
        ]} />
      {
        [
          <View>
            <Text>Page1</Text>
            <Text>Page1</Text>
            <Text>Page1</Text>
            <Text>Page1</Text>
          </View>,
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>Valoraciones</Text>
              <Text>Ver Todo</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 60 }}>
                  4.1
                </Text>
                <Text>de 5</Text>
              </View>
              <View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <Icon name='star-selected' color={Globals.Colors.font.light} />
                  <Icon name='star-selected' color={Globals.Colors.font.light} />
                  <Icon name='star-selected' color={Globals.Colors.font.light} />
                  <Icon name='star-selected' color={Globals.Colors.font.light} />
                  <Icon name='star-selected' color={Globals.Colors.font.light} />
                  <View style={{ width: '50%', borderWidth: 0, borderRadius: 10, backgroundColor: '#F4F7FD', marginVertical: 5, overflow: 'hidden' }}>
                    <View style={{ backgroundColor: Globals.Colors.primary, width: '80%', borderRadius: 10, height: 8 }} />
                  </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                  <Icon name='star-selected' color={Globals.Colors.font.light} />
                  <Icon name='star-selected' color={Globals.Colors.font.light} />
                  <Icon name='star-selected' color={Globals.Colors.font.light} />
                  <Icon name='star-selected' color={Globals.Colors.font.light} />
                  <View style={{ width: '50%', borderWidth: 0, borderRadius: 10, backgroundColor: '#F4F7FD', marginVertical: 5, overflow: 'hidden' }}>
                    <View style={{ backgroundColor: Globals.Colors.primary, width: '30%', borderRadius: 10, height: 8 }} />
                  </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                  <Icon name='star-selected' color={Globals.Colors.font.light} />
                  <Icon name='star-selected' color={Globals.Colors.font.light} />
                  <Icon name='star-selected' color={Globals.Colors.font.light} />
                  <View style={{ width: '50%', borderWidth: 0, borderRadius: 10, backgroundColor: '#F4F7FD', marginVertical: 5, overflow: 'hidden' }}>
                    <View style={{ backgroundColor: Globals.Colors.primary, width: '20%', borderRadius: 10, height: 8 }} />
                  </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                  <Icon name='star-selected' color={Globals.Colors.font.light} />
                  <Icon name='star-selected' color={Globals.Colors.font.light} />
                  <View style={{ width: '50%', borderWidth: 0, borderRadius: 10, backgroundColor: '#F4F7FD', marginVertical: 5, overflow: 'hidden' }}>
                    <View style={{ backgroundColor: Globals.Colors.primary, width: '8%', borderRadius: 10, height: 8 }} />
                  </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                  <Icon name='star-selected' color={Globals.Colors.font.light} />
                  <View style={{ width: '50%', borderWidth: 0, borderRadius: 10, backgroundColor: '#F4F7FD', marginVertical: 5, overflow: 'hidden' }}>
                    <View style={{ backgroundColor: Globals.Colors.primary, width: '15%', borderRadius: 10, height: 8 }} />
                  </View>
                </View>
              </View>
            </View>
            <Text style={{ alignSelf: 'flex-end' }}>569 Calificaciones</Text>
          </View>
        ][page]
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    padding: 20,
    backgroundColor: 'white'
  },
  imageGalleryContainer: {
    height: screen.width - 40,
    marginBottom: 20
  },
  galleryImage: {
    borderRadius: 10,
    width: screen.width - 40,
    height: screen.width - 40
  },
  productName: {
    fontFamily: 'Muli-ExtraBold',
    fontSize: 22,
    textTransform: 'capitalize'
  },
  productDescriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rankingContainer: {
    flexDirection: 'row'
  },
  rankingQntLbl: {
    fontSize: 16,
    fontFamily: 'Muli-ExtraBold',
    color: Globals.Colors.font.light
  },
  productOriginalPrice: {
    fontSize: 20,
    color: Globals.Colors.font.light,
    textDecorationLine: 'line-through'
  },
  productPrice: {
    fontSize: 20,
    color: Globals.Colors.font.red,
    marginLeft: 10
  },
  productDescription: {
    color: Globals.Colors.font.light,
    marginVertical: 10
  },
  productColorsContainer: {
    flexDirection: 'row',
    marginVertical: 15
  },
  colorLabel: {
    fontFamily: 'Muli-ExtraBold',
    fontSize: 22
  },
  colorItem: {
    width: 50,
    height: 50,
    marginRight: 20,
    borderRadius: 50,
  },
  sizeLabel: {
    fontFamily: 'Muli-ExtraBold',
    fontSize: 22,
    color: Globals.Colors.font.dark,
    flexWrap: 'nowrap'
  },
  sizeItem: {
    width: 50,
    height: 50,
    margin: 10,
    backgroundColor: 'white',
    color: Globals.Colors.font.dark,
    shadowColor: "#fd3",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 15,

    elevation: 1,
  },
  addToCartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15
  },
  partnerLabelTitle: {
    fontFamily: 'Muli-ExtraBold',
    fontSize: 22,
    marginBottom: 10
  },
  partnerOfferContainer: {
    borderColor: Globals.Colors.font.light,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginBottom: 10,
    alignSelf: 'flex-start'
  },
  partnerLabelDescription: {
    color: Globals.Colors.font.light,
    fontSize: 22
  },
  moreFromLabel: {
    fontFamily: 'Muli-ExtraBold',
    fontSize: 22,
    marginBottom: 10
  },
})

export default ProductDetails