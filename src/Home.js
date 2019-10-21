import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {Common} from './components/Common'
import {Beef} from './components/Beef'
import {Wine} from './components/Wine'
import {Display} from './components/Display';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commons: null,
      beefs: null,
      wines: null,
      displays: null,
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
    //   console.log('responseJson');
    //   console.log(responseJson);
      this.setState({
        commons: responseJson?.common,
        beefs: responseJson?.beef,
        wines: responseJson?.wine,
      });;
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
  }

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
          body: JSON.stringify({
            display_id,
            product_id,
          }),
        },
      );

    // display: Array(8)
    // 0:
    // display_id: 2
    // product_id: 30
      const responseJson = await response.json();
      console.log('responseJson');
      console.log(responseJson.display);
    //   this.setState({
    //     commons: responseJson?.common,
    //     beefs: responseJson?.beef,
    //     wines: responseJson?.wine,
    //   });;
    } catch (err) {
      console.log('err in _setEpaperInfo');
      console.log(err);
    }
  };

  componentDidMount() {
    this._getAllProducts();
    this._getEpaperInfo();
  }

  render() {
    const {commons, beefs, wines, displays} = this.state;

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'pink', padding: 20}}>
        <ScrollView style={{flex: 1, padding: 20}}>
          <Text>디스플레이</Text>
          {displays ?.map(((display, index) => {
              return (
                <Display key={index + 3000} display={display} /> 
              )
          }))}
          <Text>Common</Text>
          {commons ?.map((common, index) => <Common key={index} common={common} />)} 
          <Text>Beef</Text>
          {beefs ?.map((beef, index) => <Beef key={index + 1000} beef={beef} />)} 
          <Text>Wine</Text>
          {wines ?.map((wine, index) => <Wine key={index + 2000} wine={wine} />)} 
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Home;
