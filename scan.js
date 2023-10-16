
import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Touchable} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import logo from './img/logo.png'
import pr from './img/pr.png'
import barcode from './img/barcode.png'
import avatar from './img/avatar.jpg'
import { color } from "@rneui/base";
//screens

const scan = () => {
  return (
        <View style={styles.container}>
        {/* back home */}
            <View style={styles.backHome}>
                <AntDesign name="left" style={{borderRadius: 10, backgroundColor: '#f5f5f5', padding: 10}} size={24} color="#5A6CF3" />
            </View>
            <View style={[styles.scanBorder]}></View>
            <View style={styles.info}>
                <Image source={pr} style={{width: 100, height: 100, borderRadius: 10}}/>
                <View>
                    <Text style={{fontSize: 14, fontWeight: '10'}}>Lauren’s</Text>
                    <Text style={{fontsize: 20, fontWeight: 'Bold'}}>Orange Juice</Text>
                </View>
                <Ionicons name="add-outline" style={{borderRadius: 10, padding: 10, backgroundColor: '#5A6CF3'}} size={24} color="#FFFFFF" />
            </View>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  backHome:{
    alignSelf:'flex-start',

    width: 50, 
    height: 60, 
    marginLeft: 20, 
    marginTop: 20,

  },
  scanBorder: {

    marginVertical: 10,
    marginBottom: 20,

    
    width: 287.5,
    height: 478
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 25,
    width: '90%',
    borderRadius: 10,
    padding: 20,

    backgroundColor: '#f5f5f5'
  }
});

export default scan;

