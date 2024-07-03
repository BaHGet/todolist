import { render, screen, fireEvent, waitForElement, act  } from '@testing-library/react';
import '@testing-library/jest-dom'
import Login from '../Components/Login/login';
import SignUp from '../Components/Login/signup'; 

const setUserNameMock = jest.fn();
const setEmailMock = jest.fn();
const setPassWordMock = jest.fn();
const setPageMock = jest.fn();
let validatedMock = false;
const setValidatedMock = () => {validatedMock != validatedMock};
const isLoadingMock = false;


test('renders login form', () => { 

    render (
        <Login
            setUserName={setUserNameMock}
            setEmail={setEmailMock}
            setPassWord={setPassWordMock} 
            setPage={setPageMock} 
            handleSubmit={(e) => {

            }}
            validated={validatedMock}
            setValidated={setValidatedMock}
            isLoading={isLoadingMock}
        />
    );
    const loginField = screen.getAllByPlaceholderText(/User Name/i)
    const signupField = screen.getAllByPlaceholderText(/Password/i)
    expect(loginField[0]).toBeInTheDocument();
    expect(signupField[0]).toBeInTheDocument();
    
})

test('renders signup form', () => {

    render (
        <SignUp
            setUserName={setUserNameMock}
            setEmail={setEmailMock}
            setPassWord={setPassWordMock} 
            setPage={setPageMock} 
            handleSubmit={(e) => {

            }}
            validated={validatedMock}
            setValidated={setValidatedMock}
            isLoading={isLoadingMock}
        />
    );

    expect(screen.getByPlaceholderText(/User Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();

})

test('handles login', () => {
    const logSpy = jest.spyOn(console, 'log');
    render(
        <Login 
            setUserName={setUserNameMock}
            setEmail={setEmailMock}
            setPassWord={setPassWordMock} 
            setPage={setPageMock} 
            handleSubmit={(e) => {
                e.preventDefault();
                console.log("testuser", "testpassword")
            }}
            validated={true}
            setValidated={() => {}}
            isLoading={false}
        />
    );

    act(() => {
        fireEvent.change(screen.getByPlaceholderText(/User Name/i), { target: { value: 'testuser' } });
        fireEvent.change(screen.getByPlaceholderText(/Password/i), { target: { value: 'testpassword' } });
    })

    const button = screen.getByText(/Submit/i);  
    
    fireEvent.click(button);

    expect(logSpy).toHaveBeenCalledWith("testuser", "testpassword");
})

test('handles signup', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    render(
        <SignUp 
            setUserName={setUserNameMock}
            setEmail={setEmailMock}
            setPassWord={setPassWordMock} 
            setPage={setPageMock} 
            handleSubmit={(e) => {
                e.preventDefault();
                console.log("newuser", "newuser@example.com", "newpassword")
            }}
            validated={true}
            setValidated={() => {}}
            isLoading={false}
        />
    );

    act(() => {
        fireEvent.change(screen.getByPlaceholderText(/User Name/i), { target: { value: 'newuser' } });
        fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'newuser@example.com' } });
        fireEvent.change(screen.getByPlaceholderText(/Password/i), { target: { value: 'newpassword' } });
    })

    const button = screen.getByText(/Submit/i);  

    fireEvent.click(button);

    expect(logSpy).toHaveBeenCalledWith("newuser", "newuser@example.com", "newpassword");
})

test('displays error messages in login depanding on input', () => {

    render(
        <Login 
            setUserName={setUserNameMock}
            setEmail={setEmailMock}
            setPassWord={setPassWordMock} 
            setPage={setPageMock} 
            handleSubmit={(e) => {

            }}
            validated={validatedMock}
            setValidated={setValidatedMock}
            isLoading={isLoadingMock}
        />
    );
    fireEvent.change(screen.getByPlaceholderText(/User Name/i), { target: { value: '' } });
    fireEvent.change(screen.getByPlaceholderText(/Password/i), { target: { value: '' } });
    const button = screen.getByText(/Submit/i);  
    fireEvent.click(button);

    expect(screen.getByText(/Please choose a username./i)).toBeInTheDocument();
    expect(screen.getByText(/Please choose a password./i)).toBeInTheDocument();
})

test('displays error messages in singup depanding on input', () => {

    render(
        <SignUp 
            setUserName={setUserNameMock}
            setEmail={setEmailMock}
            setPassWord={setPassWordMock} 
            setPage={setPageMock} 
            handleSubmit={(e) => {

            }}
            validated={validatedMock}
            setValidated={setValidatedMock}
            isLoading={isLoadingMock}
        />
    );

    fireEvent.change(screen.getByPlaceholderText(/User Name/i), { target: { value: '' } });
    fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'newuser' } });
    fireEvent.change(screen.getByPlaceholderText(/Password/i), { target: { value: '' } });
    const button = screen.getByText(/Submit/i);  
    fireEvent.click(button);

    expect(screen.getByText(/Please choose a username./i)).toBeInTheDocument();
    expect(screen.getByText(/Please choose a email./i)).toBeInTheDocument();
    expect(screen.getByText(/Please choose a password./i)).toBeInTheDocument();
})

