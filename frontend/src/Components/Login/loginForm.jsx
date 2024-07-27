import { useState } from 'react';
import { FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useUserUpdateContext } from '../../hooks/useUser';


const LoginForm = ({ setPage, handleSubmit, validated, isLoading, setIsThereIsError }) => {
    const [Check, setChecked] = useState(false);
    const userUpdate = useUserUpdateContext();

    return (
        <div className={`form-container align-items-center `}>
            <Form className="text-light" validated={validated} >
                <FloatingLabel controlId="floatingInputName" label="User Name" className="mb-3 w-100 text-dark">
                    <Form.Control required type="name" placeholder="Enter User Name" onChange={(e) => userUpdate.updateUsername(e.target.value)}/>
                    <Form.Control.Feedback type="invalid">
                        Please choose a username.
                    </Form.Control.Feedback>
            
                </FloatingLabel>

                <FloatingLabel controlId="floatingInputPassword" label="Password" className="mb-3 w-100 text-dark">
                    <Form.Control required type={Check ? "text" : "password"} placeholder="Password"  autoComplete="off" onChange={(e) => userUpdate.updatePassword(e.target.value)}/>
                    <Form.Control.Feedback type="invalid">
                        Please choose a password.
                    </Form.Control.Feedback>
                </FloatingLabel>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check  type="checkbox" label="Show Password"  onClick={(e) => {setChecked(e.target.checked)} }/>
                </Form.Group>
                
                <Form.Group className='d-flex justify-content-between' >
                    <Button onClick={() => {
                            setIsThereIsError(false);
                            setPage('signup')
                            setIsThereIsError(false);
                            userUpdate.updateUsername('');
                            userUpdate.updatePassword('');
                        }
                    }>or Sign Up</Button>
                    <Button variant="dark" type="submit" onClick={(e) => handleSubmit(e)} style={{backgroundColor: '#65737e'}}>
                        {!isLoading ? 'Login' : 'Loading...'}
                    </Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default LoginForm