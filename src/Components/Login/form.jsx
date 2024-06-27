import React, { useEffect, useState } from "react";
import './login-form.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from "./login";
import { Button } from "react-bootstrap";
import TodoPage from "./../main/todosPage";
import SignUp from "./signup";


const Form = () => {
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');
    const [page, setPage] = useState('login');
    const [validated, setValidated] = useState(false);

    const handleSubmet = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        console.log(event)
    }
    
    return (
        <>
            <h1 className="text-343d46 my-5 head-line">Todo List</h1>
            {
                page === 'login' ?
                    <Login  setUserName={setUserName} setPassWord={setPassWord} setPage={setPage} handleSubmet={handleSubmet}  validated={validated} setValidated={setValidated}/> 
                :
                    page === 'signup' ?
                        <SignUp setName={setName} setUserName={setUserName} setEmail={setEmail} setPassWord={setPassWord} setPage={setPage} handleSubmet={handleSubmet}  validated={validated} setValidated={setValidated}/>
                    :
                        <TodoPage />
            }
            
        </>
    )
}

export default Form;