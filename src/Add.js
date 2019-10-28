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
import styles from './components/styles';

var radio_props = [
  {label: 'common', value: 0},
  {label: 'beef', value: 1},
  {label: 'wine', value: 2},
];

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,

      product_type: 'common',

      common_brand: null,
      common_category: null,
      common_name: null,
      common_price: null,
      common_capacity: null,
      common_unit: null,
      common_displayType: null,

      // common_brand: 'brand~',
      // common_category: 'category~',
      // common_name: 'name~',
      // common_price: '1000',
      // common_capacity: '2000',
      // common_unit: 'kg',
      // common_displayType: 'A',

      beef_part: null,
      beef_pricePerUnitWeight: null,
      beef_origin: null,
      beef_usage: null,
      beef_identificationNum: null,
      beef_rate: null,

      wine_brand: null,
      wine_name: null,
      wine_price: null,
      wine_capacity: null,
      wine_origin: null,
      wine_sugarContent: null,
      wine_frequency: null,
    };
  }

  _addProduct = async () => {
    const {
      product_type,

      common_brand,
      common_category,
      common_name,
      common_price,
      common_capacity,
      common_unit,
      common_displayType,

      beef_part,
      beef_pricePerUnitWeight,
      beef_origin,
      beef_usage,
      beef_identificationNum,
      beef_rate,

      wine_brand,
      wine_name,
      wine_price,
      wine_capacity,
      wine_origin,
      wine_sugarContent,
      wine_frequency,
    } = this.state;

    try {
      const response = await fetch(
        'https://biw4gdguia.execute-api.ap-northeast-2.amazonaws.com/default/dice-allproduct',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body:
            product_type === 'common'
              ? `product_type=${product_type}&common_brand=${common_brand}&common_name=${common_name}&common_price=${common_price}&common_capacity=${common_capacity}&common_unit=${common_unit}&common_displayType=${common_displayType}&common_category=${common_category}`
              : product_type === 'beef'
              ? `product_type=${product_type}&beef_part=${beef_part}&beef_pricePerUnitWeight=${beef_pricePerUnitWeight}&beef_origin=${beef_origin}&beef_usage=${beef_usage}&beef_identificationNum=${beef_identificationNum}&beef_rate=${beef_rate}`
              : `product_type=${product_type}&wine_brand=${wine_brand}&wine_name=${wine_name}&wine_price=${wine_price}&wine_capacity=${wine_capacity}&wine_origin=${wine_origin}&wine_sugarContent=${wine_sugarContent}&wine_frequency=${wine_frequency}`,
        },
      );
      const responseJson = await response.json();
      if (responseJson?.isSuccess) {
        this.props.navigation.navigate('Home');
      } else {
        Alert.alert('알림', '다시 시도해주세요!');
      }
    } catch (err) {
      Alert.alert('알림', 'err in _setEpaperInfo!');
    }
  };

  render() {
    const {value} = this.state;
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header onPress={() => this.props.navigation.goBack()} />

        <RadioForm
          formHorizontal={true}
          animation={true}
          style={{marginLeft: 30}}>
          {/* To create radio buttons, loop through your array of options */}
          {radio_props.map((obj, i) => (
            <RadioButton labelHorizontal={true} key={i}>
              {/*  You can set RadioButtonLabel before RadioButtonInput */}
              <RadioButtonInput
                obj={obj}
                index={i}
                isSelected={value === obj.value}
                onPress={() =>
                  this.setState({value: obj.value, type: obj.label})
                }
                borderWidth={1}
                buttonInnerColor={'#0EADFF'}
                buttonOuterColor={
                  this.state.value3Index === i ? '#0EADFF' : '#0EADFF'
                }
                buttonSize={15}
                buttonOuterSize={20}
                buttonStyle={{}}
                buttonWrapStyle={{marginLeft: 10}}
              />
              <RadioButtonLabel
                obj={obj}
                index={i}
                isSelected={value === obj.value}
                onPress={() =>
                  this.setState({value: obj.value, type: obj.label})
                }
                buttonSize={25}
                buttonOuterSize={30}
                labelHorizontal={true}
                labelStyle={{fontSize: 20, color: '#333'}}
                labelWrapStyle={{}}
              />
            </RadioButton>
          ))}
        </RadioForm>

        {value === 0 && this._renderCommonAdd()}
        {value === 1 && this._renderBeefAdd()}
        {value === 2 && this._renderWineAdd()}
      </SafeAreaView>
    );
  }

  _renderCommonAdd = () => {
    const {
      type,
      common_brand,
      common_category,
      common_name,
      common_price,
      common_capacity,
      common_unit,
      common_displayType,
    } = this.state;
    return (
      <View style={{flex: 1, padding: 15, marginLeft: 20, marginRight: 20}}>
        <View style={styles.wrapper4}>
          <Text style={styles.text3}>브랜드</Text>
          <TextInput
            onChangeText={value => this.setState({common_brand: value})}
            value={common_brand}
            style={styles.textInput}
          />
        </View>
        <View style={styles.wrapper4}>
          <Text style={styles.text3}>카테고리</Text>
          <TextInput
            onChangeText={value => this.setState({common_category: value})}
            value={common_category}
            style={styles.textInput}
          />
        </View>
        <View style={styles.wrapper4}>
          <Text style={styles.text3}>상품명</Text>
          <TextInput
            onChangeText={value => this.setState({common_name: value})}
            value={common_name}
            style={styles.textInput}
          />
        </View>
        <View style={styles.wrapper4}>
          <Text style={styles.text3}>가격</Text>
          <TextInput
            onChangeText={value => this.setState({common_price: value})}
            value={common_price}
            style={styles.textInput}
          />
        </View>
        <View style={styles.wrapper4}>
          <Text style={styles.text3}>용량</Text>
          <TextInput
            onChangeText={value => this.setState({common_capacity: value})}
            value={common_capacity}
            style={styles.textInput}
          />
        </View>
        <View style={styles.wrapper4}>
          <Text style={styles.text3}>단위</Text>
          <TextInput
            onChangeText={value => this.setState({common_unit: value})}
            value={common_unit}
            style={styles.textInput}
          />
        </View>
        <View style={styles.wrapper4}>
          <Text style={styles.text3}>디스플레이타입</Text>
          <TextInput
            onChangeText={value => this.setState({common_displayType: value})}
            value={common_displayType}
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity
          style={{
            width: 200,
            height: 30,
            borderRadius: 20,
            backgroundColor: '#0EADFF',
            justifyContent: 'center',
            marginTop: 10,
            alignSelf: 'center',
          }}
          onPress={() => this._addProduct()}>
          <Text style={{color: 'white', textAlign: 'center'}}>등록</Text>
        </TouchableOpacity>
      </View>
    );
  };

  _renderBeefAdd = () => {
    const {
      type,
      beef_part,
      beef_pricePerUnitWeight,
      beef_origin,
      beef_usage,
      beef_identificationNum,
      beef_rate,
    } = this.state;
    return (
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <Text>beef 부위</Text>
          <TextInput
            onChangeText={value => this.setState({beef_part: value})}
            value={beef_part}
            style={{
              width: 100,
              borderBottomWidth: 1,
              borderBottomColor: '#333',
            }}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>단위별 가격</Text>
          <TextInput
            onChangeText={value =>
              this.setState({beef_pricePerUnitWeight: value})
            }
            value={beef_pricePerUnitWeight}
            style={{
              width: 100,
              borderBottomWidth: 1,
              borderBottomColor: '#333',
            }}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>원산지</Text>
          <TextInput
            onChangeText={value => this.setState({beef_origin: value})}
            value={beef_origin}
            style={{
              width: 100,
              borderBottomWidth: 1,
              borderBottomColor: '#333',
            }}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>용도</Text>
          <TextInput
            onChangeText={value => this.setState({beef_usage: value})}
            value={beef_usage}
            style={{
              width: 100,
              borderBottomWidth: 1,
              borderBottomColor: '#333',
            }}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>식별번호</Text>
          <TextInput
            onChangeText={value =>
              this.setState({beef_identificationNum: value})
            }
            value={beef_identificationNum}
            style={{
              width: 100,
              borderBottomWidth: 1,
              borderBottomColor: '#333',
            }}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>등급</Text>
          <TextInput
            onChangeText={value => this.setState({beef_rate: value})}
            value={beef_rate}
            style={{
              width: 100,
              borderBottomWidth: 1,
              borderBottomColor: '#333',
            }}
          />
        </View>
        <TouchableOpacity onPress={() => this._addProduct()}>
          <Text>등록</Text>
        </TouchableOpacity>
      </View>
    );
  };

  _renderWineAdd = () => {
    const {
      type,
      wine_brand,
      wine_name,
      wine_price,
      wine_capacity,
      wine_origin,
      wine_sugarContent,
      wine_frequency,
    } = this.state;
    return (
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <Text>wine 브랜드</Text>
          <TextInput
            onChangeText={value => this.setState({wine_brand: value})}
            value={wine_brand}
            style={{
              width: 100,
              borderBottomWidth: 1,
              borderBottomColor: '#333',
            }}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>상품명</Text>
          <TextInput
            onChangeText={value => this.setState({wine_name: value})}
            value={wine_name}
            style={{
              width: 100,
              borderBottomWidth: 1,
              borderBottomColor: '#333',
            }}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>가격</Text>
          <TextInput
            onChangeText={value => this.setState({wine_price: value})}
            value={wine_price}
            style={{
              width: 100,
              borderBottomWidth: 1,
              borderBottomColor: '#333',
            }}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>용량</Text>
          <TextInput
            onChangeText={value => this.setState({wine_capacity: value})}
            value={wine_capacity}
            style={{
              width: 100,
              borderBottomWidth: 1,
              borderBottomColor: '#333',
            }}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>원산지</Text>
          <TextInput
            onChangeText={value => this.setState({wine_origin: value})}
            value={wine_origin}
            style={{
              width: 100,
              borderBottomWidth: 1,
              borderBottomColor: '#333',
            }}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>당도</Text>
          <TextInput
            onChangeText={value => this.setState({wine_sugarContent: value})}
            value={wine_sugarContent}
            style={{
              width: 100,
              borderBottomWidth: 1,
              borderBottomColor: '#333',
            }}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>도수</Text>
          <TextInput
            onChangeText={value => this.setState({wine_frequency: value})}
            value={wine_frequency}
            style={{
              width: 100,
              borderBottomWidth: 1,
              borderBottomColor: '#333',
            }}
          />
        </View>
        <TouchableOpacity onPress={() => this._addProduct()}>
          <Text>등록</Text>
        </TouchableOpacity>
      </View>
    );
  };
}

export default Add;
