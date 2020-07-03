import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'

export default({max,min}) => {        
        return (
        <Text style={Estilo.fontP}>
            Max = {max}, Min = {min}, Aleatorio = {Random(max,min)}
        </Text>
        )
}
function Random(max, min){   
    let d = max - min + 1
    return Math.floor(Math.random() * d) + min
}