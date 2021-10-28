import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const BackgroundScreen = ({children}:Props) => {

  const {width, height} = Dimensions.get('window');


  return (
    <View style={styles.container}>
      <Image
          style={{ width: width, height: height, position: 'absolute' }}
          resizeMode='stretch'
          source={require('../assets/breakingBadBackground.jpg')}
        >
      </Image>
      <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
        <Text style={{fontSize: 50, color: 'white', marginTop: 25, fontFamily: 'Heart-Breaking-Bad'}}>Breaking Bad Phrases</Text>
      </View>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green'
  },
})
