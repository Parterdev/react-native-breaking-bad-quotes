import React, { useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useCounter } from '../hooks/useCounter'
import { useFetch } from '../hooks/useFetch'
import { BackgroundScreen } from './BackgroundScreen'

export const HomeScreen = () => {

  const {counter, incrementValue} = useCounter(1);
  
  const uri = `https://www.breakingbadapi.com/api/quotes/${counter}`;

  const {isLoading, data} = useFetch(uri);
  
  return (
    <BackgroundScreen>
      {/** The rest of the flex: 50 */}

      {
        (isLoading) ? 
        <View testID="loading" style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator
            color='#369457'
            size={70}
          />
        </View> 
        :
        <View testID="dataContainer" style={styles.container}>
          {
            data.map(value => (
              <View style={{alignItems: 'center'}} 
                key={value.quote_id}>
                <Text style={{ fontSize: 25, color: 'white', marginTop: 100, textAlign: 'center'}}>{value.quote}</Text>
                <Text style={{ fontSize: 17, color: 'white', marginTop: 10 }}>{value.author}</Text>
              </View>
            ))
          }
          <TouchableOpacity testID="incrementButton" 
            style={styles.buttonContainer}
            onPress={incrementValue}
          >
            <Text style={{fontSize: 15, color: 'white'}}>Generate</Text>
          </TouchableOpacity>
        </View>
      }
    </BackgroundScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    //backgroundColor: '#660000'
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 50,
    backgroundColor: '#369457'
  }
})
