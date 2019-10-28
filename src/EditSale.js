import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import React, {Component} from 'react';

import {Header} from './components/Header';

class EditSale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: props.navigation.getParam('obj', null),
      isSale: props.navigation.getParam('obj', null)?.isSale,
      product_id: props.navigation.getParam('obj', null)?.product_id,
      sale_type: props.navigation
        .getParam('obj', null)
        ?.sale_info?.sale_type?.toString(),
      sale_percent: props.navigation
        .getParam('obj', null)
        ?.sale_info?.sale_percent?.toString(),
      sale_eventtype: props.navigation.getParam('obj', null)?.sale_info
        ?.sale_eventtype,
      sale_startdate: props.navigation.getParam('obj', null)?.sale_info
        ?.sale_startdate,
      sale_enddate: props.navigation.getParam('obj', null)?.sale_info
        ?.sale_enddate,
    };
  }

  // sale_enddate: "2019-10-20"
  // sale_eventtype: "B2G1"
  // sale_percent: 10
  // sale_startdate: "2019-10-15"
  // sale_type: 1

  _editSale = async () => {
    const {
      obj,
      product_id,
      sale_type,
      sale_percent,
      sale_eventtype,
      sale_startdate,
      sale_enddate,
    } = this.state;

    try {
      const response = await fetch(
        'https://43nmzzrgt9.execute-api.ap-northeast-2.amazonaws.com/default/saleFunction',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          // ① "isSale" : 1(고정값)
          // ② "product_id" : 상품아이디
          // ③ "saleType" : 0:정기세일 1:타임세일
          // ④ "percent" : 할인율
          // ⑤ "eventType" : percent B1G1 B1G2
          // ⑥ "startdate" : format( 2019-09-15 03:46:10 )
          // ⑦"enddate" : format( 2019-09-15 03:46:10 ) `
          body: `isSale=${1}&product_id=${
            obj.product_id
          }&saleType=${sale_type}&percent=${sale_percent}&eventType=${sale_eventtype}&startdate=${'2019-09-15'}&enddate=${'2019-09-15'}`,
        },
      );
      console.log(
        `isSale=${1}&product_id=${
          obj.product_id
        }&saleType=${sale_type}&percent=${sale_percent}&eventType=${sale_eventtype}&startdate=${'2019-09-15'}&enddate=${'2019-09-15'}`,
      );
      const responseJson = await response.json();
      if (responseJson.isSuccess) {
        this.props.navigation.navigate('Home');
      } else {
        Alert.alert('알림', '다시 시도해주세요!');
      }
    } catch (err) {
      console.log('err in _setEpaperInfo');
      console.log(err);
    }
  };

  render() {
    const {
      obj,
      isSale,
      product_id,
      sale_type,
      sale_percent,
      sale_eventtype,
      sale_startdate,
      sale_enddate,
    } = this.state;
    console.log('obj');
    console.log(obj);

    console.log(obj.sale_info);
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header onPress={() => this.props.navigation.goBack()} />

        {/* // isSale: 1,
            // product_id: ,
            // saleType: ,
            // percent: ,
            // eventType: ,
            // startdate: ,
            // enddate: , */}
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{marginRight: 5}}>product_id</Text>
            <Text>{product_id}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>sale_type</Text>
            <TextInput
              onChangeText={value => this.setState({sale_type: value})}
              value={sale_type}
              style={{
                width: 100,
                borderBottomWidth: 1,
                borderBottomColor: '#333',
              }}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>할인 퍼센트</Text>
            <TextInput
              onChangeText={value => this.setState({sale_percent: value})}
              value={sale_percent}
              style={{
                width: 100,
                borderBottomWidth: 1,
                borderBottomColor: '#333',
              }}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>eventType</Text>
            <TextInput
              onChangeText={value => this.setState({sale_eventtype: value})}
              value={sale_eventtype}
              style={{
                width: 100,
                borderBottomWidth: 1,
                borderBottomColor: '#333',
              }}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>sale_startdate</Text>
            <TextInput
              onChangeText={value => this.setState({sale_startdate: value})}
              value={sale_startdate}
              style={{
                width: 100,
                borderBottomWidth: 1,
                borderBottomColor: '#333',
              }}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>sale_enddate</Text>
            <TextInput
              onChangeText={value => this.setState({sale_enddate: value})}
              value={sale_enddate}
              style={{
                width: 100,
                borderBottomWidth: 1,
                borderBottomColor: '#333',
              }}
            />
          </View>
          <TouchableOpacity onPress={() => this._editSale()}>
            <Text>등록</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default EditSale;
