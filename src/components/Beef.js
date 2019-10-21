import React, {Component} from 'react';;
import {SafeAreaView, TouchableOpacity, View, Text} from 'react-native';;
import styles from './styles';

export const Beef = props => {
  const {beef} = props;;

  // beef_identificationNum: 8000
  // beef_origin: "호주산"
  // beef_part: "채끝"
  // beef_pricePerUnitWeight: 6000
  // beef_rate: "1++"
  // beef_usage: "국"
  // isSale: 0
  // product_id: 2

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>아이디</Text>
        <Text style={styles.content}>{beef?.product_id}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>세일 여부</Text>
        <Text style={styles.content}>{beef?.isSale}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>식별번호</Text>
        <Text style={styles.content}>{beef?.beef_identificationNum}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>원산지</Text>
        <Text style={styles.content}>{beef?.beef_origin}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>부위</Text>
        <Text style={styles.content}>{beef?.beef_part}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>단위 당 가격</Text>
        <Text style={styles.content}>{beef?.beef_pricePerUnitWeight}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>등급</Text>
        <Text style={styles.content}>{beef?.beef_rate}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>용도</Text>
        <Text style={styles.content}>{beef?.beef_usage}</Text>
      </View>
    </View>
  );;
};;

export default Beef;
