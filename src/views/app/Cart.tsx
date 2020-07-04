import { ComponentProps } from 'react'
import { ScrollView } from 'react-native'
import { Text } from 'react-native-elements'

interface CartProps extends ComponentProps {

}

const Cart = (props: CartProps) => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic">
        <Text>Cart</Text>
    </ScrollView>
  )
}

export default Cart