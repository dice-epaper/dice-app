import React, {Component} from 'react';;
import {SafeAreaView, TouchableOpacity, View, Text} from 'react-native';;
import styles from './styles';

export const Wine = props => {
  const {wine} = props;;

  // isSale: 0
  // product_id: 4
  // wine_brand: "matthias"
  // wine_capacity: 500
  // wine_frequency: 3
  // wine_name: "secco,semi-sparkling"
  // wine_origin: "Austria"
  // wine_price: 25000
  // wine_sugarContent: 0

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>id</Text>
        <Text style={styles.contenet}>{wine?.product_id}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>세일 여부</Text>
        <Text style={styles.contenet}>{wine?.isSale}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>브랜드</Text>
        <Text style={styles.contenet}>{wine?.wine_brand}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>용량</Text>
        <Text style={styles.contenet}>{wine?.wine_capacity}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>이름</Text>
        <Text style={styles.contenet}>{wine?.wine_name}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>원산지</Text>
        <Text style={styles.contenet}>{wine?.wine_origin}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>가격</Text>
        <Text style={styles.contenet}>{wine?.wine_price}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>도수</Text>
        <Text style={styles.contenet}>{wine?.wine_frequency}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>당도</Text>
        <Text style={styles.contenet}>{wine?.wine_sugarContent}</Text>
      </View>
    </View>
  );;
};;

export default Wine;
