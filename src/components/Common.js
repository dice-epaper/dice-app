import React, {Component} from 'react';;
import {SafeAreaView, TouchableOpacity, View, Text} from 'react-native';;
import styles from './styles';

export const Common = props => {
  const {common} = props;

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>id</Text>
        <Text style={styles.content}>{common?.product_id}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>세일 여부</Text>
        <Text style={styles.content}>{common?.isSale}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>브랜드</Text>
        <Text style={styles.content}>{common?.common_brand}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>수량</Text>
        <Text style={styles.content}>{common?.common_capacity}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>카테고리</Text>
        <Text style={styles.content}>{common?.common_category}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>디스플레이 타입</Text>
        <Text style={styles.content}>{common?.common_displayType}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>상품명</Text>
        <Text style={styles.content}>{common?.common_name}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>가격</Text>
        <Text>{common?.common_price}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>단위</Text>
        <Text>{common?.common_unit}</Text>
      </View>
    </View>
  );;
};;

export default Common;
