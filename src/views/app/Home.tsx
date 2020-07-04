import { ComponentProps } from 'react'
import React from 'react'
import { ScrollView } from 'react-native'
import { Text } from 'react-native-elements'

interface HomeProps extends ComponentProps {

}

const Home = (props: HomeProps) => {

  console.log(props.navigation)
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow:1 }}
      contentInsetAdjustmentBehavior="automatic">
        <Text>Home</Text>
    </ScrollView>
  )
}

export default Home