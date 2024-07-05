import React, { useEffect, useState } from "react";
import './login-form.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from "./login";
import TodoPage from "./../main/todosPage";
import SignUp from "./signup";
import { createUser, getUser } from "../../APIs/userApi";


const Form = ({setSigned, setUser}) => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');
    const [page, setPage] = useState('login');
    const [validated, setValidated] = useState(false);
    const [isThereIsError, setIsThereIsError] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

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
        if(page === 'signup'){
            if(userName && email && password ){
                const data = {
                    username: userName.toLowerCase(),
                    email: email,
                    password: password
                }
                if(await createUser(data,setError)){
                    setIsThereIsError(false)
                    window.location.reload();
                }else{
                    setIsThereIsError(true)
                }
                setLoading(false)
            }else{
                setLoading(false)
            }
        }
        else if(page === 'login'){
            if(userName && password ){
                const data = {
                    username: userName.toLowerCase(),
                    password: password
                }
                let res = await getUser(data,setError)
                if(res){
                    setSigned(true);
                    localStorage.setItem('user', JSON.stringify({ username: res.username, email: res.email, created_at: res.created_at }));
                    setUser({ username: res.username, email: res.email, created_at: res.created_at })
                    setIsThereIsError(false)
                }else{
                    setIsThereIsError(true)
                }
                setLoading(false)
            }else{
                setLoading(false)
            }
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
                        <Login  
                            setUserName={setUserName} 
                            setPassWord={setPassWord} 
                            setPage={setPage} 
                            handleSubmit={handleSubmit}  
                            validated={validated} 
                            isLoading={isLoading}
                        /> 
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