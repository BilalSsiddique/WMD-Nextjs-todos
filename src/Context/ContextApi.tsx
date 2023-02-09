import React, { createContext, useState } from "react";



export const Context = createContext<any>('');

export const AppContext = (props: any) => {


    const [toggle, setToogle] = useState(false)
    const [arr, setArr] = useState<any>([])
    const [input, setInput] = useState<any>({
        id: '',
        title: '',
        description: '',
        date: '',
        completed: ''
    });

    return (
        <Context.Provider
            value={{
                setToogle,
                toggle,
                arr,
                setArr,
                input,
                setInput
            }}
        >
            {props.children}
        </Context.Provider>
    );
};