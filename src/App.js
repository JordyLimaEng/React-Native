import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'

import FlexboxV3 from './components/layout/FlexboxV3'

export default () =>  (

    <SafeAreaView style={style.App}>

        <FlexboxV3/>


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