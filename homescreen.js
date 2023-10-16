
import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Touchable} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import logo from './img/logo.png'
import pr from './img/pr.png'
import barcode from './img/barcode.png'
import avatar from './img/avatar.jpg'
//screens

const home = () => {
  return (
    <View style={[styles.container]}>

      {/* Header */}
      <View style={styles.header}>
        <View style={{marginLeft: 15}}>
          <Text style={{fontSize:25, fontWeight:'bold'}}>Hello 👋🏻</Text>
          <Text>Nhat Kha</Text>
        </View>
        <Image source={avatar} style={{width: 50, height: 50, borderRadius: 10, marginRight: 15}}/>
      </View>
      <Text style={{fontSize: 20, marginLeft: 15, marginVertical: 30}}>Your Insights</Text>

      {/* MAIN */}
      <View style={styles.main}>
        <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', flexDirection:'row'}}>
          <View style={[styles.marginScan,{flexDirection:'column', justifyContent:'center', alignItems: 'center', backgroundColor: '#F8F8FB', borderRadius: 10, padding: 20}]}>
            <AntDesign name="barcode" style={{borderRadius: 10, backgroundColor:'#DBDAF7', padding: 10}} size={24} color="black" />
            <Text style={{fontSize: 15, fontWeight:'normal'}}>Scan New</Text>
            <Text style={{fontSize: 10, fontWeight: '100'}}>Scanned 483</Text>
          </View>
          <View style={[styles.marginCou,{flexDirection:'column', justifyContent:'center', alignItems: 'center', backgroundColor: '#F8F8FB', borderRadius: 10, padding: 20}]}>
            <FontAwesome name="warning" style={{borderRadius: 10, backgroundColor:'#F6E3DB', padding: 10}} size={24} color="#F08F5F" />
            <Text style={{fontSize: 15, fontWeight:'normal'}}>Counterfeits</Text>
            <Text style={{fontSize: 10, fontWeight: '100'}}>Counterfeited 32</Text>
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', flexDirection:'row'}}>
          <View style={[styles.marginSuccess,{flexDirection:'column', justifyContent:'center', alignItems: 'center', backgroundColor: '#F8F8FB', borderRadius: 10, padding: 20}]}>
            <AntDesign name="checkcircle" style={{borderRadius: 10, backgroundColor:'#D8F3F1', padding: 10}} size={24} color="#5CE1CD" />
            <Text style={{fontSize: 15, fontWeight:'normal'}}>Success</Text>
            <Text style={{fontSize: 10, fontWeight: '100'}}>Checkouts 8</Text>
          </View>
          <View style={[styles.marginDic,{flexDirection:'column', justifyContent:'center', alignItems: 'center', backgroundColor: '#F8F8FB', borderRadius: 10, padding: 20}]}>
            <AntDesign name="calendar" style={{borderRadius: 10, backgroundColor:'#D0EDFB', padding: 10}} size={24} color="#2DC0FF" />
            <Text style={{fontSize: 15, fontWeight:'normal'}}>Directory</Text>
            <Text style={{fontSize: 10, fontWeight: '100'}}>History 26</Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical: 20}}>
        <Text style={{fontSize: 20, marginLeft: 15}}>Explore More</Text>
        <AntDesign name="arrowright" size={24} color="black" />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <AntDesign name="home" style={{backgroundColor: '#D0EDFB',marginLeft: 15, borderRadius: 10, padding: 10}} size={32} color="#2DC0FF" />
        <FontAwesome name="bell-o" size={32} color="#BBBBBB" />
        <MaterialCommunityIcons name="barcode-scan" size={30} color="#BBBBBB" />
        <MaterialCommunityIcons name="history" size={28} color="#BBBBBB" />
        <AntDesign name="shoppingcart" style={{marginRight: 15}} size={28} color="#BBBBBB" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  header: {
    backgroundColor: "#F8F7F1",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingVertical: 20
  },
  main: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  marginScan: {
    marginLeft: 20,
    width: 158.16,
    height : 176.82
  },
  marginSuccess: {
    marginLeft: 20,
    width: 158.16,
    height : 176.82
  },
  marginCou: {
    marginRight: 20,
    width: 158.16,
    height : 176.82
  },
  marginDic: {
    marginRight: 20,
    width: 158.16,
    height : 176.82
  },
  footer: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems:"center",

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    height: 100,

    backgroundColor: "#F8F7F1",
  }
});

export default home;

