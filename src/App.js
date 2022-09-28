import {useState } from 'react';
import {Route, Routes} from 'react-router-dom'
import './App.css';
import LoginForm from './Components/logIn';


function App() {
  const [userName, setUserName] = useState('');
  const [isloged, setIsloged] = useState(false);
  const[todos, setTodos] = useState([]);

  return(
    <Routes>
      <Route path='/' element={
        <LoginForm userName={userName} setUserName={setUserName} isloged={isloged} setIsloged={setIsloged} todos={todos} setTodos={setTodos} />
      }/>
    </Routes>
  );
}

export default App;
