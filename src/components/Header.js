import React, {Component} from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

export const Header = props => {
  const {onPress} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{width: 30, height: 30, margin: 10}}>
      <Text style={{fontSize: 25}}>←</Text>
    </TouchableOpacity>
  );
};

export default Header;
