import React from 'react'

import Filho from './filho'

export default props =>{
    let x = 13
    let y = 100
    return (
        <>
            <Filho a={x} b={y}/>
            <Filho a={x+100} b={x+200}/>
        </>
    )
}