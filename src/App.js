import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'

import ParImpar from './components/ParImpar'
export default () =>  (

    <SafeAreaView style={style.App}>
        <ParImpar num={4}/>
    </SafeAreaView>

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