import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'

import Familia from './components/relacao/Familia'
import Membro from './components/relacao/Membro'

export default () =>  (

    <SafeAreaView style={style.App}>

        
        <Familia>
            <Membro nome="Bia" sobrenome="Arruda"/>    
            <Membro nome="Flávia" sobrenome="Arruda"/>    
        </Familia>

        <Familia>
            <Membro nome="Carlos" sobrenome="Silva"/>    
            <Membro nome="José" sobrenome="Silva"/>    
        </Familia>


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