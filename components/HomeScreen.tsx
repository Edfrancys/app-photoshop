import React from 'react';
import { StyleSheet, Image, View, Text, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({ navigation } )  => {
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image
          source={require('../public/img/logoPhotoshop.png')}
          style={{
            resizeMode: "contain",
            height: 100,
            width: 200
          }}
        />
      </View>
      <View style={styles.img}>

        <Text>Um Mundo de Soluções Para Você!</Text>
        
        <Button 
          title='REVELAR FOTO' 
          style={styles.button}
          onPress={() => {
          navigation.push('FormScreen')
        }}
        ></Button>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEC82F',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    textAlign: 'center'
  },
  img: {
    
  },
  logoPhoto: {
    resizeMode: "contain",
    height: 100,
    width: 200
  }
});

export default HomeScreen