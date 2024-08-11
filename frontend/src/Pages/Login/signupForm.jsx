import { useEffect, useState } from 'react';
import { FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useUserUpdateContext } from '../../hooks/useUser';

const SignupForm = ({setPage, handleSubmit, validated, setValidated, isLoading, setIsThereIsError }) => {
    const [Check, setChecked] = useState(false);
    const userUpdate = useUserUpdateContext();
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
                    <Form.Control required id="username" type="name" name="username" placeholder="Enter User Name" autoComplete='on' onChange={(e) => userUpdate.updateUsername(e.target.value)}/>
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
                    <Form.Control required type="email" name="email" placeholder="Enter Your Email" autoComplete='on' onChange={(e) => userUpdate.updateEmail(e.target.value)}/>
                    <Form.Control.Feedback type="invalid">
                        Please choose a email.
                    </Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel
                    controlid="floatingInput"
                    label="Password"
                    className="mb-3 w-100 text-dark"
                >
                    <Form.Control required type={Check ? "text" : "password"} name="password" placeholder="Password"  autoComplete="off" onChange={(e) => userUpdate.updatePassword(e.target.value)}/>
                    <Form.Control.Feedback type="invalid">
                        Please choose a password.
                    </Form.Control.Feedback>
                </FloatingLabel>

                <Form.Group className="mb-3" controlid="formBasicCheckbox">
                    <Form.Check name="checkbox" type="checkbox" label="Show Password"  onClick={(e) => {setChecked(e.target.checked)} } />
                </Form.Group>

                <Form.Group className='d-flex justify-content-between' >
                    <Button onClick={() => {
                            setIsThereIsError(false);
                            userUpdate.updateUsername('');
                            userUpdate.updateEmail('');
                            userUpdate.updatePassword('');
                            setPage('login')
                        }
                    }>or Login</Button>
                    <Button 
                        className='text-light' 
                        type="submit" 
                        onClick={(e) => handleSubmit(e)} 
                        style={{backgroundColor: '#65737e'}}
                    >
                        {isLoading ? 'Loading…' : 'Submit'}
                    </Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default SignupForm