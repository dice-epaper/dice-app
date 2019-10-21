import React, { Component } from 'react'
import {View, TouchableOpacity, SafeAreaView} from 'react-native'
import {Header} from './components/Header'

class Edit extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'yellow' }}>
                <Header onPress={() => this.props.navigation.goBack()}/>
                {/* <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
                    style={{ width: 50, height: 50, backgroundColor: 'blue' }}>

                </TouchableOpacity> */}
            </SafeAreaView>
        )
    }
}

export default Edit