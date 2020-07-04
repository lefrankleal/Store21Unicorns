import { ComponentProps } from 'react'
import { ScrollView } from 'react-native'
import { Text } from 'react-native-elements'

interface ProductProps extends ComponentProps {

}

const Product = (props: ProductProps) => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic">
        <Text>Product</Text>
    </ScrollView>
  )
}

export default Product