import { useEffect, useState } from "react";
import  { Route, Routes } from 'react-router-dom';
import Form from './Pages/Login/form';
import TodosPage from "./Pages/main/todosPage";
import Button from 'react-bootstrap/Button';
import "./App.css"
import { UserProvider } from "./Context/UserContext";
import { ErrorsProvider } from "./Context/ErrorContext";

const App = () => {
  const [signed, setSigned] = useState(false);
  const [user, setUser] = useState({});


  useEffect(() => {
    let user = localStorage.getItem('user')
    if(user){
      user = JSON.parse(user)
      setUser(user)
      setSigned(true)
    }
  }, [])
  
  const handelLogout = () => {
    localStorage.removeItem('user')
    setSigned(false)
    setUser({})
  }

  return (
    <Routes >
      <Route 
        path="/"
        element={
          <Button onClick={() => window.location.href = '/todolist/'}>Go to Login page</Button>
        }
      />
      <Route 
        path="/todolist/"
        element={
          <>
            <UserProvider>
              <ErrorsProvider>
                {signed ? <TodosPage user={user} handelLogout={handelLogout} /> : <Form setUser={setUser} setSigned={setSigned} />}
              </ErrorsProvider>
            </UserProvider>
          </>
        }
      />
    </Routes>
  )
}

export default App;