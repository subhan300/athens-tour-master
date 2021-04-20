import React, { createContext, useReducer,useState } from 'react';
import AppReducer from './AppReducer';
const initialState={value:false}
export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({ children }) => {
    // const [state, dispatch] =useReducer(AppReducer, initialState);
    const initial_value=useState(false)
    
        // function Load_more() {
        //     dispatch({
        //         type: 'LOAD_MORE',
        //         payload:true
        //     });
        // }

    return (
        <GlobalContext.Provider value={
            {
             initial_value 
            }
        }>
            {children}
        </GlobalContext.Provider>
    );

}
