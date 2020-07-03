import React from 'react'
import { View, StyleSheet } from 'react-native'

import Titulo from './components/Titulo'
// import Aleatorio from './components/aleatorio'
// import MinMax from './components/MinMax'
// import CompPadrao, {Comp1,Comp2} from './components/Multi'
// import Primeiro from './components/Primeiro'

export default () =>  (

    <View style={style.App}>
        <Titulo principal = "Cadastro Produto"
                secundario = "Tela de Cadastro do produto" />
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