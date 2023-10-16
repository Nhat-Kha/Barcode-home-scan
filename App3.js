import { Text, View, Image } from 'react-native'
import React, { Component } from 'react'

import Avatar from './img/avatar.jpg'

const Menu = () => {
  return (
    <View style={[styles.container]}>
      <View style={styles.Header}>
            <Text style={{fontSize:20, fontWeight:'bold'}}>Hello 👋🏻</Text>
            <Text>Nhat Kha</Text>
        <Image source={Avatar}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex : 1
    }
}) 

export default Menu;
