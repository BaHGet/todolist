import { useEffect, useState } from "react";
import  { Route, Routes } from 'react-router-dom';
import Form from './Components/Login/form';
import TodosPage from "./Components/main/todosPage";
import "./App.css"

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
  
  return (
    <Routes >
      <Route 
        path="/todolist/"
        element={
          signed ? <TodosPage signed={signed} user={user} /> : <Form setUser={setUser} setSigned={setSigned} />
        }
      />
    </Routes>
  )
}

export default App;



/* 







*/
