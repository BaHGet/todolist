import React, { useEffect, useState } from "react";
import './login-form.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from "./login";
import { Button } from "react-bootstrap";
import TodoPage from "./../main/todosPage";
import SignUp from "./signup";
import { createUser } from "./../../userApi";


const Form = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');
    const [page, setPage] = useState('login');
    const [validated, setValidated] = useState(false);
    const [isThereIsError, setIsThereIsError] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        setLoading(true)
        if(page === 'signup'){
            const data = {
                username: userName,
                email: email,
                password: password
            }
            if(await createUser(data,setError)){
                window.localStorage.setItem('user', JSON.stringify({
                    username: data.username,
                    email: data.email
                }))
                setIsThereIsError(false)
                window.location.reload();
            }else{
                setIsThereIsError(true)
            }
            setLoading(false)
        }
        else{
            
            setLoading(false)
        }
    }
    
    return (
        <>
            <h1 className="text-343d46 my-5 head-line">Todo List</h1>
            <>
                {
                    page === 'login' ?
                        <Login  setUserName={setUserName} setPassWord={setPassWord} setPage={setPage} handleSubmit={handleSubmit}  validated={validated} setValidated={setValidated}/> 
                    :
                        page === 'signup' ?
                            <SignUp  
                                setUserName={setUserName} 
                                setEmail={setEmail} 
                                setPassWord={setPassWord} 
                                setPage={setPage} 
                                handleSubmit={handleSubmit}  
                                validated={validated} 
                                setValidated={setValidated}
                                isLoading={isLoading}
                            />
                        :
                            <TodoPage />
                }
            </>
            <>
                {
                    isThereIsError ? 
                        <div className="alert alert-danger" role="alert">
                            <h5>
                                {error.match(/message/g) ? error : 
                                    `There is an error with 
                                        ${error.match(/password_hash/g) ? 'Password' : error.match(/email/g) ? 'Email' : 'User Name'},
                                    Please contact support`}
                            </h5>
                            
                        </div>
                    : ''
                }
            </>
        </>
    )
}

export default Form;