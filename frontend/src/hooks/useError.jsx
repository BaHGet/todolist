import { useContext } from "react"
import { ErrorsContext, ErrorsUpdateContext } from "../Context/ErrorContext"

export const useErrors = () => {
    const error = useContext(ErrorsContext)
    if(error === undefined){
        throw new Error('useError must be used within a ErrorContext Provider')
    }
    return {
        isThereIsError: error.isThereIsError,
        error: error.error,
        isLoading: error.isLoading
    }
}

export const useErrorUpdateContext = () => {
    const error = useContext(ErrorsUpdateContext)
    if(error === undefined){
        throw new Error('useErrorUpdateContext must be used within a ErrorContext Provider')
    }
    return {
        setIsThereIsError: error.updateSetIsThereIsError,
        setError: error.updateError,
        setLoading: error.updateLoading
    }
}