import React, {Component} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from 'react-native';
import styles from './styles';

export class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: null,
    }
  }

  render() {
    const {display, setEpaperInfo} = this.props;
    const { value } = this.state

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
        <TextInput
          onChangeText={value => {
            this.setState({ value })
          }}
          placeholder={'바꿀 상품 아이디 입력'}
        />
        <TouchableOpacity
          onPress={() => {
            setEpaperInfo(value);
          }}>
          <Text>변경</Text>
        </TouchableOpacity>
      </View>
    );;
  }
}
