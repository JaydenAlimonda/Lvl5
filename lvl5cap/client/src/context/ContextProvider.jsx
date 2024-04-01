import { PromiseProvider } from "mongoose";
import React from "react";


export const Context = React.createContext()

export const  ContextProvider = (props) => {

const [test, setTest] = React.useState('test')

return (
    < Context.Provider value={{test}}>
    {props.children}


    </Context.Provider>
)




}