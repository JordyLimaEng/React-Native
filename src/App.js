import React from 'react'
import { View, StyleSheet } from 'react-native'

import Botao from './components/Botao'

export default () =>  (

    <View style={style.App}>
        <Botao />
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