import { Dimensions, Platform } from 'react-native'

export default Globals = (() => {

  const width = Dimensions.get('screen').width
  const height = Dimensions.get('screen').height

  const Colors = {
    background: '#FD9595',
    primary: '#FEA0A8',
    gradient: {
      light: '#FE9FA7',
      dark: '#FF7783'
    },
    font: {
      light: '#8A97AD',
      dark: '#000000',
      red: '#FEA0A8'
    }
  }

  return {
    Colors: Colors,
    Theme: {
      colors: {
        primary: Colors.primary,
      },
      Button: {
        containerStyle: {
          borderRadius: 10
        },
        buttonStyle: {
          height: 50,
        },
      },
      ButtonGroup: {
        containerStyle: {
          marginLeft: 0,
          marginRight: 0,
          borderWidth: 0
        },
        buttonStyle: {
          backgroundColor: 'transparent'
        },
        selectedButtonStyle: {
          backgroundColor: 'transparent'
        },
        selectedTextStyle: {
          color: Colors.font.dark
        },
        textStyle: {
          fontSize: 20,
          fontFamily: 'Muli-ExtraBold',
          color: Colors.font.light
        },
        innerBorderStyle: {
          color: 'transparent'
        }
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
        color: Colors.font.dark
      },
      Input: {
        underlineColorAndroid: 'transparent',
        inputContainerStyle: {
          height: 50,
          borderWidth: 1,
          borderColor: Colors.font.light,
          borderRadius: 10
        },
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
          fontFamily: 'Muli-Regular',
          fontWeight: 'normal',
        },
        h1Style: {
          fontSize: 30,
          fontFamily: 'Muli-Regular',
          fontWeight: 'normal'
        },
        h2Style: {
          fontSize: 26,
          fontFamily: 'Muli-Regular',
          fontWeight: 'normal'
        },
        h3Style: {
          fontSize: 22,
          fontFamily: 'Muli-Regular',
          fontWeight: 'normal'
        },
        h4Style: {
          fontSize: 18,
          fontFamily: 'Muli-Regular',
          fontWeight: 'normal',
        },
      },
    }
  }
})()