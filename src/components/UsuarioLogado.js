import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'
import If from './if'

export default props =>{
    const usuario = props.usuario || {}
    return (
        <>       
        <If teste = {usuario && usuario.nome && usuario.email}>
            <Text style={Estilo.fontP}>
            Usuário Logado:
            {usuario.nome} - {usuario.email}
            </Text>
        </If>     
        </>
    )
}