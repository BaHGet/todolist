import { useContext } from "react";
import { UserContext, UserUpdateContext } from "../Context/UserContext";

export const useUserContext = () => {
    const user = useContext(UserContext)
    if(user === undefined){
        throw new Error('useUserContext must be used within a UsersContext Provider')
    }
    return user
}

export const useUserUpdateContext = () => {
    const user = useContext(UserUpdateContext)
    if(user === undefined){
        throw new Error('useUserUpdateContext must be used within a UsersContext Provider')
    }
    return user
}