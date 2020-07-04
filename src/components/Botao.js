import React from 'react'
import {Button} from 'react-native'

export default props =>{
    
    function executar(){
        console.warn("#1")
    }    
 
    return(
        <>
            <Button 
            title="Exec1"
            onPress = {executar}
            />
            <Button 
            title="Exec2"
            onPress = {function(){console.warn("#2")}}
            />
            <Button 
            title="Exec3"
            onPress = {()=>console.warn("#3")}
            />
        </>
    )
}