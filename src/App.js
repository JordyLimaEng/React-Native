import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'

import DigiteSeuNome from './components/DigiteSeuNome'

export default () =>  (

    <SafeAreaView style={style.App}>

        <DigiteSeuNome/>


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