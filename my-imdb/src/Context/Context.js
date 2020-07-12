import React,{createContext} from 'react'
import Store from '../Store/Store'

export const Context=createContext();

export const Provider=(props)=> {
    return (
    <Context.Provider value={{...Store()}}>{props.children}
    </Context.Provider>
    )
}




