import React from 'react'
import { View, StyleSheet } from 'react-native'

import Diferenciar from './components/diferenciar'
export default () =>  (

    <View style={style.App}>
        <Diferenciar/>
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