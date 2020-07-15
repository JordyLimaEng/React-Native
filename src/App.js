import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'

import ListaProdutosV2 from './components/produtos/ListaProdutosV2'

export default () =>  (

    <SafeAreaView style={style.App}>

        <ListaProdutosV2/>


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