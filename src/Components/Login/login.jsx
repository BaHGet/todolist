import { useState } from 'react';
import { FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Login = ({ setUserName, setPassWord, setPage, handleSubmet, validated }) => {
    const [Check, setChecked] = useState(false);
    
    return (
        <div className={`form-container align-items-center `}>
            <Form className="text-light" validated={validated} >
                <FloatingLabel controlId="floatingInputName" label="User Name" className="mb-3 w-100 text-dark">
                    <Form.Control required type="name" placeholder="Enter User Name" onChange={(e) => setUserName(e.target.value)}/>
                    <Form.Control.Feedback type="invalid">
                        Please choose a username.
                    </Form.Control.Feedback>
            
                </FloatingLabel>

                <FloatingLabel controlId="floatingInputPassword" label="Password" className="mb-3 w-100 text-dark">
                    <Form.Control required type={Check ? "text" : "password"} placeholder="Password"  autoComplete="off" onChange={(e) => setPassWord(e.target.value)}/>
                    <Form.Control.Feedback type="invalid">
                        Please choose a password.
                    </Form.Control.Feedback>
                </FloatingLabel>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check  type="checkbox" label="Show Password"  onClick={(e) => {setChecked(e.target.checked)} }/>
                </Form.Group>
                
                <Form.Group className='d-flex justify-content-between' >
                    <Button variant="dark" type="submit" onClick={(e) => handleSubmet(e)} style={{backgroundColor: '#65737e'}}>
                        Submit
                    </Button>
                    <Button onClick={() => {setPage('signup')}}>or Sign Up</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Login