import React, {Component} from 'react';;
import {SafeAreaView, TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';

export const Display = props => {
  const {display} = props;

  return (
    <View style={styles.container}>
        <View style={styles.wrapper}>
            <Text style={styles.title}>디스플레이 아이디</Text>
            <Text>{display?.display_id}</Text>
        </View>
        <View style={styles.wrapper}>
            <Text style={styles.title}>상품 아이디</Text>
            <Text>{display?.product_id}</Text>
        </View>
    </View>
  );
};
