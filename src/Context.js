import React, { useState, createContext } from 'react'

export const CountContext = createContext();

export const CountProvider = props => {
    const [state, setState]  = useState({
        count: 1
    })
    return (
        <CountContext.Provider value={[state, setState]}>
            {props.children}
        </CountContext.Provider>
    )
}
