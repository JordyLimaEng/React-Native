import React, {Component} from 'react'
import {Text, TextInput} from 'react-native'
import Estilo from '../estilo'

export default class Mega extends Component{

    state = {
        qtdeNumeros: this.props.qtdeNumeros
    }
    
    state = {
        qtdeNumeros: this.props.qtdeNumeros
    }

    // constructor(props){
    //     super(props)

    //     this.alterarQtdeNumero = this.alterarQtdeNumero.bind(this)
    // }

    alterarQtdeNumero = (qtde) => {//aponta sempre para a instancia da classe
        this.setState({qtdeNumeros:qtde})
    }

    render(){
        return (
        <>

        <Text style={Estilo.fontG}>
            Gerador de Mega-Sena 
            {this.state.qtdeNumeros}
        </Text>

        <TextInput 
            keyboardType={"numeric"}
            style={{borderBottomWidth: 1}}
            placeholder="Qtd de numeros" 
            value = {this.state.qtdeNumeros}            
            onChangeText = {this.alterarQtdeNumero}
        />

        </>
        )
    }
}
