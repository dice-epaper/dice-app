import {
  Alert,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';

import {Beef} from './components/Beef';
import {Common} from './components/Common';
import {Display} from './components/Display';
import {Wine} from './components/Wine';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commons: null,
      beefs: null,
      wines: null,
      displays: null,
      productIdToChange: null,

      showCommons: true,
      showBeefs: true,
      showWines: true,
    };
  }
  _getAllProducts = async () => {
    try {
      const response = await fetch(
        'https://biw4gdguia.execute-api.ap-northeast-2.amazonaws.com/default/dice-allproduct',
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      const responseJson = await response.json();
      console.log('aaa');
      console.log(responseJson);
      this.setState({
        commons: responseJson?.common,
        beefs: responseJson?.beef,
        wines: responseJson?.wine,
      });
    } catch (err) {
      console.log('err in allproduct');
      console.log(err);
    }
  };

  _getEpaperInfo = async () => {
    try {
      const response = await fetch(
        'https://hjil39agh3.execute-api.ap-northeast-2.amazonaws.com/default/allDisplay',
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      const responseJson = await response.json();
      console.log('_getEpaperInfo');
      console.log(responseJson);
      this.setState({
        displays: responseJson?.display,
      });
    } catch (err) {
      console.log('err in _getEpaperInfo');
      console.log(err);
    }
  };

  _setEpaperInfo = async (display_id, product_id) => {
    try {
      const response = await fetch(
        'https://ip5ma7qo6l.execute-api.ap-northeast-2.amazonaws.com/default/selectDisplay',
        {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: `display_id=${display_id}&product_id=${product_id}`,
        },
      );
      await this._getEpaperInfo();
    } catch (err) {
      console.log('err in _setEpaperInfo');
      console.log(err);
    }
  };

  componentDidMount() {
    console.log('sdfsdf');
    this._getAllProducts();
    this._getEpaperInfo();
  }

  _addSale = async obj => {
    this.props.navigation.navigate('AddSale', {obj});
    // try {
    //   const response = await fetch(
    //     'https://43nmzzrgt9.execute-api.ap-northeast-2.amazonaws.com/default/saleFunction',
    //     {
    //       method: 'POST',
    //       headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         display_id: Number(display_id),
    //         product_id: Number(product_id),
    //       }),
    //     },
    //   );
    //   await this._getEpaperInfo();
    // } catch (err) {
    //   console.log('err in _setEpaperInfo');
    //   console.log(err);
    // }
  };

  _deleteSale = async product_id => {
    try {
      const response = await fetch(
        'https://43nmzzrgt9.execute-api.ap-northeast-2.amazonaws.com/default/saleFunction',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: `isSale=0&product_id=${product_id}`,
        },
      );

      const responseJson = await response.json();
      if (responseJson?.isSuccess) {
        await this._getAllProducts();
      } else {
        Alert.alert('알림', '할인 삭제 실패');
      }
    } catch (err) {
      console.log('err in _setEpaperInfo');
      console.log(err);
    }
  };

  render() {
    const {
      commons,
      beefs,
      wines,
      displays,
      productIdToChange,
      showCommons,
      showBeefs,
      showWines,
    } = this.state;

    return (
      <SafeAreaView style={{flex: 1, padding: 20}}>
        <ScrollView style={{padding: 20}}>
          <ScrollView horizontal={true}>
            {displays?.map((display, index) => {
              return (
                <Display
                  key={index + 3000}
                  display={display}
                  setEpaperInfo={productIdToChange =>
                    this._setEpaperInfo(display?.display_id, productIdToChange)
                  }
                />
              );
            })}
          </ScrollView>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={async () => await this._getAllProducts()}
              style={{
                width: 200,
                height: 30,
                backgroundColor: '#e1aafa',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  marginRight: 5,
                  textAlign: 'center',
                  color: 'white',
                }}>
                All Products Refresh
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{position: 'absolute', top: 0, right: 0}}
              onPress={() =>
                this.props.navigation.navigate('Add', {type: 'common'})
              }>
              <Text style={{textAlign: 'center'}}>+ 추가하기</Text>
            </TouchableOpacity>
          </View>

          {/* <TouchableOpacity
            onPress={() => this.setState({showCommons: !showCommons})}
            style={{width: 100, height: 30, backgroundColor: 'purple'}}>
            <Text style={{color: 'white'}}>
              {showCommons ? 'common 숨기기' : 'common 보기'}
            </Text>
          </TouchableOpacity> */}
          {showCommons &&
            commons?.map((common, index) => (
              <Common
                key={index}
                common={common}
                editProduct={c =>
                  this.props.navigation.navigate('Edit', {
                    type: 'common',
                    obj: c,
                  })
                }
                addSale={c => this._addSale(c)}
                editSale={() =>
                  this.props.navigation.navigate('EditSale', {obj: common})
                }
                deleteSale={product_id => this._deleteSale(product_id)}
              />
            ))}
          {/* <Text>Beef</Text>

          {/* <TouchableOpacity
            onPress={() => this.setState({showBeefs: !showBeefs})}
            style={{width: 100, height: 30, backgroundColor: 'purple'}}>
            <Text style={{color: 'white'}}>
              {showBeefs ? 'beef 숨기기' : 'beef 보기'}
            </Text>
          </TouchableOpacity> */}
          {/* {showBeefs &&
            beefs?.map((beef, index) => (
              <Beef
                key={index + 1000}
                beef={beef}
                editProduct={c =>
                  this.props.navigation.navigate('Edit', {
                    type: 'beef',
                    obj: c,
                  })
                }
                editSale={() =>
                  this.props.navigation.navigate('EditSale', {obj: beef})
                }
              />
            ))}
          <Text>Wine</Text> */}

          {/* <TouchableOpacity
            onPress={() => this.setState({showWines: !showWines})}
            style={{width: 100, height: 30, backgroundColor: 'purple'}}>
            <Text style={{color: 'white'}}>
              {showWines ? 'wine 숨기기' : 'wine 보기'}
            </Text>
          </TouchableOpacity> */}
          {/* {showWines &&
            wines?.map((wine, index) => (
              <Wine
                key={index + 2000}
                wine={wine}
                editProduct={c =>
                  this.props.navigation.navigate('Edit', {
                    type: 'wine',
                    obj: c,
                  })
                }
                editSale={() =>
                  this.props.navigation.navigate('EditSale', {obj: wine})
                }
              />
            ))} */}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Home;
