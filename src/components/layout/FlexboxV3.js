import React from 'react'
import {StyleSheet, View} from 'react-native'
import Quadrado from './Quadrado'

export default props =>{
    return (
        <View style = {style.FlexV3}>
            <Quadrado cor='#F0F'/>
            <Quadrado cor='#F00'/>
            <Quadrado cor='#0F0'/>
            <Quadrado cor='#00F'/>
            <Quadrado cor='#0FF'/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV3: {//manipulando o eixo horizontal como principal e o vertical como secundario
        flexDirection: "row",
        justifyContent: "space-between",//linha
        alignItems: "center",//coluna
        height: 300,
        width: "100%",
        backgroundColor: '#000'
    }
})