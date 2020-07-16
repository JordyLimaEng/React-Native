import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'

import Mega from './components/mega/Mega'

export default () =>  (

    <SafeAreaView style={style.App}>

        <Mega qtdeNumeros={7}/>

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