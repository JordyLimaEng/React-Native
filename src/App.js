import React from 'react'
import { View, StyleSheet } from 'react-native'

import ContadorV2 from './components/contador/ContadorV2'
export default () =>  (

    <View style={style.App}>
        <ContadorV2 />
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