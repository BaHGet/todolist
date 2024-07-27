import React, { useState } from "react";


export const ErrorsContext = React.createContext(undefined);
export const ErrorsUpdateContext = React.createContext(undefined);

export const ErrorsProvider = ({ children }) => {
    const [isThereIsError, setIsThereIsError] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    const updateSetIsThereIsError = (value=false) =>{
        setIsThereIsError(value)
    }

    const updateError = (value) =>{
        setError(value)
    }
    const updateLoading = (value=false) =>{
        setLoading(value)
    }

    return (
        <ErrorsContext.Provider value={{isThereIsError, error, isLoading}}>
            <ErrorsUpdateContext.Provider value={{updateSetIsThereIsError, updateError, updateLoading}}>
                {children}
            </ErrorsUpdateContext.Provider>
        </ErrorsContext.Provider>
    );
}