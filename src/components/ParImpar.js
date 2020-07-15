import React from 'react'
import {Text, View} from 'react-native'
import Estilo from './estilo'

export default ({num=0}) =>{
    
        return (
            <View>
                <Text style={Estilo.fontM}> O resultado é: </Text>
                {num % 2 === 0 //if ternario
                    ? <Text style={Estilo.fontM}> Par </Text>
                    : <Text style={Estilo.fontM}> Impar </Text>
                }
            </View>
        )
}