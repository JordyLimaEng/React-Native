import React from 'react'
import {StyleSheet, View} from 'react-native'
import Quadrado from './Quadrado'

export default props =>{
    return (
        <View style = {style.FlexV3}>
            <Quadrado cor='#F0F' lado={20}/>
            <Quadrado cor='#F00' lado={30}/>
            <Quadrado cor='#0F0' lado={40}/>
            <Quadrado cor='#00F' lado={50}/>
            <Quadrado cor='#0FF' lado={60}/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV3: {//manipulando o eixo horizontal como principal e o vertical como secundario
        flexDirection: "row",
        justifyContent: "space-between",//linha
        alignItems: "baseline",//coluna
        height: 300,
        width: "100%",
        backgroundColor: '#000'
    }
})