import React from 'react';
import { StyleSheet, Image, View, Text, Button } from 'react-native';

const FormScreen = ()  => {
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image
          source={require('../public/img/logoPhotoshop.png')}
          style={{
            resizeMode: "contain",
            height: 50,
            width: 50
          }}
        />
        <Text>FORM SCREEN</Text>
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
  img: {
    
  },
  logoPhoto: {
    resizeMode: "contain",
    height: 100,
    width: 200
  }
});

export default FormScreen