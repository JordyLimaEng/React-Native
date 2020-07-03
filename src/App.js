import React from 'react'
import { View, StyleSheet } from 'react-native'

import Aleatorio from './components/aleatorio'
import MinMax from './components/MinMax'
import CompPadrao, {Comp1,Comp2} from './components/Multi'
import Primeiro from './components/Primeiro'

export default () =>  (

    <View style={style.App}>
        {/* <MinMax min={3} max={30}/> */}
        <Aleatorio max={60} min={1}/>
        <Aleatorio max={60} min={1}/>
        <Aleatorio max={60} min={1}/>
        <Aleatorio max={60} min={1}/>
        <Aleatorio max={60} min={1}/>
        <Aleatorio max={60} min={1}/>
        {/* <CompPadrao/>
        <Comp1/>
        <Comp2/>
        <Primeiro />  */}
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