import React, { useState } from "react";

export const UserContext = React.createContext(undefined);
export const UserUpdateContext = React.createContext(undefined);


export const UserProvider = ({ children }) => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');

    const updateUsername = (userName) => {
        setUserName(userName)
    }
    const updateEmail = (email) => {
        setEmail(email)
    }
    const updatePassword = (password) => {
        setPassWord(password)
    }

    return (
        <UserContext.Provider value={{userName, email, password}}>
            <UserUpdateContext.Provider value={{updateUsername, updateEmail, updatePassword}}>
                {children}
            </UserUpdateContext.Provider>
        </UserContext.Provider>
    );
}