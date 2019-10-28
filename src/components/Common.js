import React, {Component} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import AddSale from '../AddSale';
import styles from './styles';

export const Common = props => {
  const {common, editProduct, editSale, deleteSale, addSale} = props;

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title2}>id</Text>
        <Text style={styles.content2}>{common?.product_id}</Text>
      </View>
      {common?.isSale ? (
        <View style={styles.wrapperSale}>
          <Text style={styles.titleSale}>세일 중</Text>
        </View>
      ) : null}
      <View style={styles.wrapper}>
        <Text style={styles.title2}>브랜드</Text>
        <Text style={styles.content2}>{common?.common_brand}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title2}>수량</Text>
        <Text style={styles.content2}>{common?.common_capacity}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title2}>카테고리</Text>
        <Text style={styles.content2}>{common?.common_category}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title2}>디스플레이 타입</Text>
        <Text style={styles.content2}>{common?.common_displayType}</Text>
      </View>
      <View style={styles.wrapper2}>
        <Text style={styles.title2}>상품명</Text>
        <Text style={styles.content2}>{common?.common_name}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title2}>가격</Text>
        <Text>{common?.common_price2}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>단위</Text>
        <Text>{common?.common_unit2}</Text>
      </View>
      <TouchableOpacity
        onPress={() => editProduct(common)}
        style={{
          width: 100,
          marginBottom: 5,
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
          상품 수정
        </Text>
      </TouchableOpacity>
      {common?.sale_info && (
        // sale_enddate: "2019-10-20"
        // sale_eventtype: "B2G1"
        // sale_percent: 10
        // sale_startdate: "2019-10-15"
        // sale_type: 1
        <View style={{marginTop: 10}}>
          <View style={styles.wrapper}>
            <Text style={styles.title}>세일 타입</Text>
            <Text>{common?.sale_info?.sale_type}</Text>
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.title}>start date</Text>
            <Text>{common?.sale_info?.sale_startdate}</Text>
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.title}>end date</Text>
            <Text>{common?.sale_info?.sale_enddate}</Text>
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.title}>이벤트 타입</Text>
            <Text>{common?.sale_info?.sale_eventtype}</Text>
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.title}>할인 퍼센트</Text>
            <Text>{common?.sale_info?.sale_percent}</Text>
          </View>
          {/* <TouchableOpacity
            onPress={editSale}
            style={{backgroundColor: 'yellow', width: 50, height: 30}}>
            <Text>할인 수정</Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => deleteSale(common.product_id)}
            style={{
              marginBottom: 5,
              backgroundColor: '#0EADFF',
              justifyContent: 'center',
              width: 100,
              height: 30,
              borderRadius: 20,
            }}>
            <Text style={{color: 'white', textAlign: 'center'}}>할인 삭제</Text>
          </TouchableOpacity>
        </View>
      )}
      {!common?.sale_info && (
        <TouchableOpacity
          onPress={() => addSale(common)}
          style={{
            width: 100,
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
            할인 등록
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Common;
