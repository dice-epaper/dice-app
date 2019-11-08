import {Agenda, Calendar, CalendarList} from 'react-native-calendars';
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
import InlineTimePicker from 'react-native-inline-timepicker';
import moment from 'moment';
import styles from './components/styles';

class AddSale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: props.navigation.getParam('obj', null),
      product_id: props.navigation.getParam('obj', null)?.product_id,
      sale_type: 0?.toString(),
      sale_percent: 0?.toString(),
      sale_eventtype: 0?.toString(),
      sale_startdate: null,
      sale_enddate: null,
      range: null,
      current: 1,

      hours1: 12,
      minutes1: 0,
      seconds1: 0,
      meridian1: 'AM',

      hours2: 12,
      minutes2: 0,
      seconds2: 0,
      meridian2: 'AM',
    };

    const timezoneOffset = new Date().getTimezoneOffset() * 60000;
    const timezoneDate = new Date(Date.now() - timezoneOffset); // toISOString: ISO 포맷은 타임존으로 UTC 타임존의 zero offset을 사용 -> 9시간 느린 날짜가 나온다. -> timezoneData만큼을 더해준 채로 toISOString을 해야한다.
    const dateArr = timezoneDate.toISOString().slice(0, 19).replace(/-/g, '/').replace("T", " ").split(' ')[0];
    const dateArr2 = dateArr.split('/');
    const dateArr3 = dateArr2[0] + '-' + dateArr2[1] + '-' + dateArr2[2];
    this.currentDate = dateArr3;
  }

  _addSale = async () => {
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
          body: `isSale=${1}&product_id=${
            obj.product_id
          }&saleType=${sale_type}&percent=${sale_percent}&eventType=${sale_eventtype}&startdate=${sale_startdate}&enddate=${sale_enddate}`,
          // ① "isSale" : 1(고정값)
          // ② "product_id" : 상품아이디
          // ③ "saleType" : 0:정기세일 1:타임세일
          // ④ "percent" : 할인율
          // ⑤ "eventType" : percent B1G1 B1G2
          // ⑥ "startdate" : format( 2019-09-15 03:46:10 )
          // ⑦"enddate" : format( 2019-09-15 03:46:10 )
        },
      );

      const responseJson = await response.json();
      if (responseJson?.isSuccess) {
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
      current,
      product_id,
      sale_type,
      sale_percent,
      sale_eventtype,
      sale_startdate,
      sale_enddate,
      hours1,
      minutes1,
      seconds1,
      meridian1,
      hours2,
      minutes2,
      seconds2,
      meridian2,
    } = this.state;

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
        <View style={{flex: 1, padding: 15, marginLeft: 20, marginRight: 20}}>
          <View style={styles.wrapper4}>
            <Text style={styles.text3}>product_id</Text>
            <Text style={styles.textInput}>{product_id}</Text>
          </View>
          <View style={styles.wrapper4}>
            <Text style={styles.text3}>sale_type</Text>
            <TextInput
              onChangeText={value => this.setState({sale_type: value})}
              value={sale_type}
              style={styles.textInput}
            />
          </View>
          <View style={styles.wrapper4}>
            <Text style={styles.text3}>할인 퍼센트</Text>
            <TextInput
              onChangeText={value => this.setState({sale_percent: value})}
              value={sale_percent}
              style={styles.textInput}
            />
          </View>
          <View style={styles.wrapper4}>
            <Text style={styles.text3}>eventType</Text>
            <TextInput
              onChangeText={value => this.setState({sale_eventtype: value})}
              value={sale_eventtype}
              style={styles.textInput}
            />
          </View>
          <View style={styles.wrapper4}>
            <Text style={styles.text3}>시작일</Text>
            <Text style={styles.textInput}>{sale_startdate}</Text>
            <Text style={styles.textInput}>{`${hours1}:${minutes1}:${seconds1}`}</Text>
          </View>
          <InlineTimePicker
            mode24hrs={true}
            onChangeTime={(h, m, s, mn) => {
              let newM;
              if (m >= 0 && m <= 9) {
                newM = `0${m}`;
              }
              this.setState({
                hours1: h,
                minutes1: newM,
                seconds1: s,
              });
            }}
            skinColor={'blue'}
          />
          <View style={styles.wrapper4}>
            <Text style={styles.text3}>마감일</Text>
            <Text style={styles.textInput}>{sale_enddate}</Text>
            <Text style={styles.textInput}>{`${hours2}:${minutes2}:${seconds2}`}</Text>
          </View>
          <InlineTimePicker
            mode24hrs={true}
            onChangeTime={(h, m, s, mn) => {
              let newM;
              if (m >= 0 && m <= 9) {
                newM = `0${m}`;
              }
              this.setState({hours2: h, minutes2: newM, seconds2: s});
            }}
            skinColor={'blue'}
          />
          {/* <View style={styles.wrapper4}> */}
          <Calendar
            // current={'2019-10-28'}
            minDate={this.currentDate}
            // maxDate={'2020-05-30'}
            onDayPress={day => {
              if (current === 1) {
                this.setState({sale_startdate: day.dateString, current: 2});
              } else if (current === 2) {
                this.setState({sale_enddate: day.dateString, current: 1});
              }
            }}
            onDayLongPress={day => {
              console.log('selected day', day);
            }}
            monthFormat={'yyyy-MM'}
            onMonthChange={month => {
              console.log('month changed', month);
            }}
            hideArrows={true}
            renderArrow={direction => <Arrow />}
            hideExtraDays={true}
            disableMonthChange={true}
            firstDay={1}
            hideDayNames={true}
            onPressArrowLeft={substractMonth => substractMonth()}
            onPressArrowRight={addMonth => addMonth()}
          />
          {/* </View> */}
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
            onPress={() => this._addSale(obj)}>
            <Text style={{color: 'white', textAlign: 'center'}}>등록</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default AddSale;
