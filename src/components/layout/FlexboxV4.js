import React from 'react'
import {StyleSheet, View} from 'react-native'

export default props =>{
    return (
        <View style = {style.FlexV4}>
            <View style={style.V0}></View>
            <View style={style.V1}></View>
            <View style={style.V2}></View>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV4: {//manipulando o eixo horizontal como principal e o vertical como secundario
        flexGrow: 1,
        width: 100,
        backgroundColor: '#000'
    },
    V0:{
        backgroundColor: '#F0F',
        height: 300        
    },
    V1:{
        backgroundColor: '#FF0',
        flexGrow: 9
    },
    V2:{
        backgroundColor: '#0FF',
        flexGrow: 1
    }
})