import React from 'react'
import {View,Text} from 'react-native'
import Estilo from './estilo'

export default props =>(
        <React.Fragment>
            <Text style={Estilo.fontG}> {props.principal}</Text>
            <Text style={Estilo.fontP}> {props.secundario}</Text>
        </React.Fragment>
)
