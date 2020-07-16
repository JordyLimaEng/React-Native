import React from 'react'
import {Button} from 'react-native'

export default props =>{

    function gerarNumero (min, max){
        const factor = max - min + 1 
        return parseInt(Math.random() * factor) + min
    }


    return (
        <Button 
            title = "Executar"
            onPress ={function(){
                const n = gerarNumero(props.min, props.max)
                props.funcao(n)
            }}
            
        />
    )
}