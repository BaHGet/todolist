import { render, screen, fireEvent, waitForElement, act  } from '@testing-library/react';
import '@testing-library/jest-dom'
import Form from '../Components/Login/form';
import { MemoryRouter } from 'react-router-dom';

const setSignedMock = jest.fn();
const setUserMock = jest.fn();

test('renders login form', () => { 

    render (
        <Form setSigned={setSignedMock} setUser={setUserMock}/>
    )
    const header = screen.getByText(/Todo List/i)
    const loginField = screen.getAllByPlaceholderText(/User Name/i)
    const signupField = screen.getAllByPlaceholderText(/Password/i)
    expect(header).toBeInTheDocument();
    expect(loginField[0]).toBeInTheDocument();
    expect(signupField[0]).toBeInTheDocument();
    
})

test('handles login', () => {
    
    render(<Form setSigned={setSignedMock} setUser={setUserMock} />);

    fireEvent.change(screen.getByPlaceholderText(/User Name/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByPlaceholderText(/Password/i), { target: { value: 'testpassword' } });

    fireEvent.submit(screen.getByText('Submit'));
})

test('handles signup', () => {
    const logSpy = jest.spyOn(console, 'log');
    render(<Form setSigned={setSignedMock} setUser={setUserMock} />);

    fireEvent.click(screen.getByText(/or Sign Up/i));

    act(() => {
        fireEvent.change(screen.getByPlaceholderText(/User Name/i), { target: { value: 'newuser' } });
        fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'newuser@example.com' } });
        fireEvent.change(screen.getByPlaceholderText(/Password/i), { target: { value: 'newpassword' } });
    })

    const button = screen.getByText(/Submit/i);  

    fireEvent.click(button);
    expect(logSpy).toHaveBeenCalledWith("newuser", "newuser@example.com", "newpassword");
})


/* 

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import Form from '../Components/Login/form';

describe('Form Component', () => {
    const setSignedMock = jest.fn();
    const setUserMock = jest.fn();

    beforeEach(() => {
        // Clear all mocks before each test
        jest.clearAllMocks();
        localStorage.clear();
    });

    test('renders login form initially', () => {
        render(<Form setSigned={setSignedMock} setUser={setUserMock} />);
        expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/username/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    });

    test('handles login', async () => {
        getUser.mockResolvedValue({ username: 'testuser', email: 'testuser@example.com' });

        render(<Form setSigned={setSignedMock} setUser={setUserMock} />);

        fireEvent.change(screen.getByPlaceholderText(/username/i), { target: { value: 'testuser' } });
        fireEvent.change(screen.getByPlaceholderText(/password/i), { target: { value: 'testpassword' } });

        fireEvent.submit(screen.getByRole('button', { name: /login/i }));

        await waitFor(() => expect(setSignedMock).toHaveBeenCalledWith(true));
        await waitFor(() => expect(setUserMock).toHaveBeenCalledWith({ username: 'testuser', email: 'testuser@example.com' }));
        expect(localStorage.getItem('user')).toEqual(JSON.stringify({ username: 'testuser', email: 'testuser@example.com' }));
    });

    test('handles signup', async () => {
        createUser.mockResolvedValue(true);

        render(<Form setSigned={setSignedMock} setUser={setUserMock} />);

        fireEvent.click(screen.getByText(/signup/i));

        fireEvent.change(screen.getByPlaceholderText(/username/i), { target: { value: 'newuser' } });
        fireEvent.change(screen.getByPlaceholderText(/email/i), { target: { value: 'newuser@example.com' } });
        fireEvent.change(screen.getByPlaceholderText(/password/i), { target: { value: 'newpassword' } });

        fireEvent.submit(screen.getByRole('button', { name: /signup/i }));

        await waitFor(() => expect(createUser).toHaveBeenCalledWith({
            username: 'newuser',
            email: 'newuser@example.com',
            password: 'newpassword'
        }, expect.any(Function)));
    }); 

    test('displays error message on login failure', async () => {
        getUser.mockResolvedValue(null);

        render(<Form setSigned={setSignedMock} setUser={setUserMock} />);

        fireEvent.change(screen.getByPlaceholderText(/username/i), { target: { value: 'invaliduser' } });
        fireEvent.change(screen.getByPlaceholderText(/password/i), { target: { value: 'invalidpassword' } });

        fireEvent.submit(screen.getByRole('button', { name: /login/i }));

        await waitFor(() => expect(screen.getByRole('alert')).toBeInTheDocument());
    }); 
});

*/

