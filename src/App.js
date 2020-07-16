import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'

import FlexboxV4 from './components/layout/FlexboxV4'

export default () =>  (

    <SafeAreaView style={style.App}>

        <FlexboxV4/>


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