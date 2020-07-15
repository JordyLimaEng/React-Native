import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'

import ListaProdutos from './components/produtos/ListaProdutos'

export default () =>  (

    <SafeAreaView style={style.App}>

        <ListaProdutos/>


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