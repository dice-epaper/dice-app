import React, {Component} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';

;

export const Beef = props => {
  const {beef, editProduct, editSale} = props;

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
      {beef?.sale_info && (
        // sale_enddate: "2019-10-20"
        // sale_eventtype: "B2G1"
        // sale_percent: 10
        // sale_startdate: "2019-10-15"
        // sale_type: 1
        <View>
          <View style={{borderWidth: 0.5, borderColor: 'red'}} />
          <View style={styles.wrapper}>
            <Text style={styles.title}>세일 타입</Text>
            <Text>{beef?.sale_info?.sale_type}</Text>
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.title}>start date</Text>
            <Text>{beef?.sale_info?.sale_startdate}</Text>
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.title}>end date</Text>
            <Text>{beef?.sale_info?.sale_enddate}</Text>
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.title}>이벤트 타입</Text>
            <Text>{beef?.sale_info?.sale_eventtype}</Text>
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.title}>할인 퍼센트</Text>
            <Text>{beef?.sale_info?.sale_percent}</Text>
          </View>
          <TouchableOpacity
            onPress={editSale}
            style={{backgroundColor: 'yellow', width: 50, height: 30}}>
            <Text>수정</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity
        onPress={() => editProduct(beef)}
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
} ;

export default Beef;
