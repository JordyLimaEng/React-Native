import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'

export default(props) => 
        <Text style={Estilo.fontP}>
            Max = {props.max}, Min = {props.min}, Aleatorio = {Random(props.max,props.min)}
        </Text>

function Random(max, min){   
    let d = max - min + 1
    return Math.floor(Math.random() * d) + min
}