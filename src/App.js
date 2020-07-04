import React from 'react'
import { View, StyleSheet } from 'react-native'

import Contador from './components/Contador'

export default () =>  (

    <View style={style.App}>
        <Contador inicial={100} />
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