import { useState, useEffect } from "react"
import { getTodos } from "../../APIs/todosApi"
import Todo from "./todo"
import NavDropdown from "./navDropdown"


const TodosPage = ({user, handelLogout}) => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        getTodos(user.username).then(res => {
            setTodos(res)
        })
    }, [])

    return (
        <>
            <div className="d-flex justify-content-center align-items-center p-2" style={{backgroundColor: '#a7adba'}}>
                <h2 className="m-3">Welcome {user.username}</h2>
                <NavDropdown user={user} handelLogout={handelLogout}/>
            </div>
            {
                todos.map(todo => <Todo key={todo.id} todo={todo}/>)
            }
        </>
    )
}

export default TodosPage