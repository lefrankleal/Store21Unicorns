import { Dimensions, Platform } from 'react-native'

export default globals = (() => {

  const width = Dimensions.get('screen').width
  const height = Dimensions.get('screen').height

  const Colors = {
    background: '#FD9595',
    primary: '#FEA0A8',
    font: {
      light: '#8A97AD',
      dark: '#000000'
    }
    // blueRGBA: ((opacity) => { return `rgba(35, 28, 104, ${opacity})` }),
  }

  return {
    Colors: Colors,
    Theme: {
      colors: {
        primary: Colors.primary,
      },
      Header: {
        barStyle: Platform.OS === 'ios' ? 'dark-content' : Colors.darkBlue,
        backgroundColor: Colors.darkBlue,
        containerStyle: {
          height: 50,
          paddingBottom: 5,
          paddingTop: 5,
          alignContent: 'center',
          justifyContent: 'center',
          elevation: 1
        }
      },
      Icon: {
        color: Colors.font
      },
      ListItem: {
        containerStyle: {
          marginVertical: 10,
          marginHorizontal: 10,
          borderRadius: 5
        },
      },
      Slider: {
        thumbTintColor: 'white',
        thumbStyle: {
          borderRadius: 50,
          borderWidth: 2,
          borderColor: Colors.darkBlue
        },
        trackStyle: {
          borderRadius: 50,
        }
      },
      Text: {
        style: {
          fontSize: 14,
          color: Colors.font,
          flexWrap: 'wrap'
        },
        h1Style: {
          fontSize: 16,
          fontWeight: 'normal'
        },
        h2Style: {
          fontSize: 18,
          fontWeight: 'normal'
        },
        h3Style: {
          fontSize: 20,
          fontWeight: 'normal'
        },
        h4Style: {
          fontSize: 22,
          fontWeight: 'normal'
        },
      },
    }
  }
})()