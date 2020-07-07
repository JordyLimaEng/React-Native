import React from 'react'
import { View, StyleSheet } from 'react-native'

import Pai from './components/indireta/pai'
export default () =>  (

    <View style={style.App}>
        <Pai></Pai>
    </View>

)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        backgroundColor: '#FFF',
        justifyContent: "center", //horizontal
        alignItems: "center", //vertical
        padding: 20
    }
})