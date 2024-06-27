import { useEffect, useState } from 'react';
import { FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SignUp = ({setUserName, setEmail, setPassWord, setPage, handleSubmit, validated, setValidated, isLoading }) => {
    const [Check, setChecked] = useState(false);
    useEffect(() => {
        setValidated(false)
    }, [])

    return (
        <div className={`form-container align-items-center `}>
            <Form className="text-light" validated={validated} >
                <FloatingLabel
                    controlid="floatingInput"
                    aria-required="true"
                    label="User Name"
                    className="mb-3 w-100 text-dark"
                >
                    <Form.Control required type="name" placeholder="Enter User Name" onChange={(e) => setUserName(e.target.value)}/>
                    <Form.Control.Feedback type="invalid">
                        Please choose a username.
                    </Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel
                    controlid="floatingInput"
                    aria-required="true"
                    label="Email"
                    className="mb-3 w-100 text-dark"
                >
                    <Form.Control required type="email" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)}/>
                    <Form.Control.Feedback type="invalid">
                        Please choose a email.
                    </Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel
                    controlid="floatingInput"
                    label="Password"
                    className="mb-3 w-100 text-dark"
                >
                    <Form.Control required type={Check ? "text" : "password"} placeholder="Password"  autoComplete="off" onChange={(e) => setPassWord(e.target.value)}/>
                    <Form.Control.Feedback type="invalid">
                        Please choose a password.
                    </Form.Control.Feedback>
                </FloatingLabel>

                <Form.Group className="mb-3" controlid="formBasicCheckbox">
                    <Form.Check  type="checkbox" label="Show Password"  onClick={(e) => {setChecked(e.target.checked)} } />
                </Form.Group>

                <Form.Group className='d-flex justify-content-between' >
                    <Button 
                        className='text-light' 
                        type="submit" 
                        onClick={(e) => handleSubmit(e)} 
                        style={{backgroundColor: '#65737e'}}
                    >
                        {isLoading ? 'Loading…' : 'Submit'}
                    </Button>
                    <Button onClick={() => {setPage('login')}}>or Login</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default SignUp