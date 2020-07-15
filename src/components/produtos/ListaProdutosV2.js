import React from 'react'
import {Text, FlatList} from 'react-native'
import Estilo from '../estilo'
import Produtos from './produtos'
import produtos from './produtos'

export default props =>{
    
    const produtoRender = ({ item:p }) => {
        return <Text>{p.id}) {p.nome} - R${p.preco}</Text>
    }

    return (
        <>
            <Text style={Estilo.fontM}> Lista de Produtos V2 </Text>

            <FlatList 
                data = {produtos}
                keyExtractor={i => `${i.id}`}
                renderItem = {produtoRender}
            />
        </>
    )
}