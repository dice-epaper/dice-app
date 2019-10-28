import React, {Component} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';



export const Wine = props => {
  const {wine, editProduct, editSale} = props;

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
      {wine?.sale_info && (
        // sale_enddate: "2019-10-20"
        // sale_eventtype: "B2G1"
        // sale_percent: 10
        // sale_startdate: "2019-10-15"
        // sale_type: 1
        <View>
          <View style={{borderWidth: 0.5, borderColor: 'red'}} />
          <View style={styles.wrapper}>
            <Text style={styles.title}>세일 타입</Text>
            <Text>{wine?.sale_info?.sale_type}</Text>
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.title}>start date</Text>
            <Text>{wine?.sale_info?.sale_startdate}</Text>
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.title}>end date</Text>
            <Text>{wine?.sale_info?.sale_enddate}</Text>
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.title}>이벤트 타입</Text>
            <Text>{wine?.sale_info?.sale_eventtype}</Text>
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.title}>할인 퍼센트</Text>
            <Text>{wine?.sale_info?.sale_percent}</Text>
          </View>
          <TouchableOpacity
            onPress={editSale}
            style={{backgroundColor: 'yellow', width: 50, height: 30}}>
            <Text>수정</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity
        onPress={() => editProduct(wine)}
        style={{
          width: 45,
          height: 30,
          backgroundColor: '#0EADFF',
          borderRadius: 20,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            padding: 2,
            textAlign: 'center',
            color: 'white',
          }}>
          수정
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Wine;
