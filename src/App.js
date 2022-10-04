import {useState} from 'react';
import './App.css';
import LoginForm from './Components/logIn';


function App() {
  const [userName, setUserName] = useState('');
  const [isloged, setIsloged] = useState(false);
  const[todos, setTodos] = useState([]);


  return(
    <LoginForm userName={userName} setUserName={setUserName} isloged={isloged} setIsloged={setIsloged} todos={todos} setTodos={setTodos} />
  );
}

export default App;
