import React, { useEffect, useState } from "react";
import LoginForm from "./loginForm";
import SignupForm from "./signupForm";
import { Login, Signup } from "../../Utils/HandelAuthentication";
import './login-form.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useUserContext } from "../../hooks/useUser";
import { useErrors, useErrorUpdateContext } from "../../hooks/useError";


const Form = ({setSigned, setUser}) => {
    const [page, setPage] = useState('login');
    const [validated, setValidated] = useState(false);
    const user = useUserContext();
    const {isThereIsError, error, isLoading} = useErrors();
    const {setIsThereIsError, setError, setLoading} = useErrorUpdateContext();

    useEffect(() => {
        let user = localStorage.getItem('user')
        if(user){
            user = JSON.parse(user)
            setUser(user)
            setSigned(true)
        }
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        setLoading(true)
        
        const userName = user.userName;
        const email = user.email;
        const password = user.password;
        if(page === 'signup'){
            Signup(
                userName, email, password,
                setIsThereIsError, setError, setValidated, setLoading
            )
        }

        else if(page === 'login'){
            Login(
                userName, password,
                setSigned, setUser, setIsThereIsError, setError, setValidated, setLoading
            )
        }
        else{
            setLoading(true)
        }
    }
    
    return (
        <>
            <h1 className="text-343d46 my-5 head-line">Todo List</h1>
                <>
                    {
                        page === 'login' ?
                            <LoginForm  
                                setPage={setPage} 
                                handleSubmit={handleSubmit}  
                                validated={validated} 
                                isLoading={isLoading}
                                setIsThereIsError={setIsThereIsError}
                            /> 
                        :
                        <SignupForm
                            setPage={setPage} 
                            handleSubmit={handleSubmit}  
                            validated={validated} 
                            setValidated={setValidated}
                            isLoading={isLoading}
                            setIsThereIsError={setIsThereIsError}
                        />
                    }
                </>
            <>
                {
                    isThereIsError ? 
                        <div className="alert alert-danger" role="alert">
                            <h5>
                                {error.match(/message/g) ? error : 
                                    `There is an error with 
                                        ${error.match(/password_hash/g) || error.match(/password/g) ? 'Password' : error.match(/email/g) ? 'Email' : 'Username'},
                                    ${error}`}
                            </h5>
                        </div>
                    : ''
                }
            </>
        </>
    )
}
export default Form;