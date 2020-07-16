import React, {useState} from 'react'
import Filho from './filho'
import { Text } from 'react-native'
import Estilo from '../estilo'

export default props =>{

    const [num, setNum] = useState(0)

    function exibirValor(numero){
        setNum(numero)
    }

    return (
        <>
        <Text style={Estilo.fontM}>{num}</Text>
        <Filho 
            min = {1} 
            max = {60} 
            funcao = {exibirValor}
        />
        </>
    )
}