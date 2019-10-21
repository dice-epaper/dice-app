import React, { Component } from 'react'
import {SafeAreaView, TouchableOpacity} from 'react-native'

export const Header = props => {
    const {
        onPress,
    } = props
    
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ width: 30, height: 30, backgroundColor: 'green' }}>
        </TouchableOpacity>
    )
}

export default Header;
