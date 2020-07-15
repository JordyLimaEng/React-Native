import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'

import UsuarioLogado from './components/UsuarioLogado'

export default () =>  (

    <SafeAreaView style={style.App}>

        {/* exibe */}
        <UsuarioLogado usuario={  {nome: "Gui", email: "Gui@gmail.com"}  }/>
        {/* Não exibe */}
        <UsuarioLogado usuario={  {nome: "Gui"}  }/>


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