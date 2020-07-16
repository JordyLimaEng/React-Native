import React, {Component} from 'react'
import {Text, TextInput, Button} from 'react-native'
import Estilo from '../estilo'
import MegaNumero from './MegaNumero'

export default class Mega extends Component{

    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }
    
    state = {
        qtdeNumeros: this.props.qtdeNumeros
    }

    alterarQtdeNumero = (qtde) => {//aponta sempre para a instancia da classe
        this.setState({qtdeNumeros: +qtde /*o sinal de + aqui serve para ter certeza que está recebendo valor numerico*/})
    }

    gerarNumeroNaoContido = nums => { //função recursiva para gerar numeros que já não existam no vetor
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros)
                        .fill()
                        .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
                        .sort((a,b)=>a-b)//ordenar em forma crescente
        this.setState({numeros})
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero num = {num}/>
        })
    }

    // gerarNumeros = () => {
    //     const {qtdeNumeros} = this.state
    //     const numeros = []

    //     for (let i=0; i<qtdeNumeros;i++){
    //         const n = this.gerarNumeroNaoContido(numeros)
    //         numeros.push(n)
    //     }

    //     numeros.sort((a,b) => a-b)
    //     this.setState({numeros})
    // }

    render(){
        return (
        <>

        <Text style={Estilo.fontG}>
            Gerador de Mega-Sena 
        </Text>

        <TextInput 
            keyboardType={"numeric"}
            style={{borderBottomWidth: 1}}
            placeholder="Qtd de numeros" 
            value = {`${this.state.qtdeNumeros}`}         
            onChangeText = {this.alterarQtdeNumero}
        />
        
        <Button
            title="Gerar"
            onPress={this.gerarNumeros}
        />

        <Text>
            {`${this.state.numeros} `}
        </Text>
        {/* {this.exibirNumeros()} */}
        </>
        )
    }
}
