import "./App.css"
import Form from './Components/Login/form';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes >
      <Route 
        path="/"
        element={
          <Form />
        }
      />
      
    </Routes>
  )
}

export default App;
