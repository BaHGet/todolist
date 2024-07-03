import { useState, useEffect } from "react"
import { getTodos, deleteTodo } from "../../APIs/todosApi"
import "./todo-style.css"
import Todo from "./todo"
import NavDropdown from "./navDropdown"


const TodosPage = ({user, handelLogout}) => {
    const [todos, setTodos] = useState([]);
    const [width, setWidth] = useState(window.outerWidth);

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.outerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, [width]);

    useEffect(() => {
        getTodos(user.username).then(res => {
            setTodos(res)
        })
    }, [])

    const handelDelete = (username, title) => {
        deleteTodo(username, title)
        setTodos(todos.filter(todo => todo.title !== title))
    }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{backgroundColor: '#a7adba'}}>
                <h2 className="m-3">Welcome {user.username}</h2>
                <NavDropdown user={user} handelLogout={handelLogout}/>
            </div>
            <div id="todos-container" className={
                    width < 768 ? 
                        "d-flex flex-column justify-content-center align-items-center p-2" 
                    :
                        "d-flex flex-row flex-wrap justify-content-center align-items-center p-2 "
                }>
                {
                    todos.map(todo => <Todo index={todo._id} todo={todo} handelDelete={handelDelete}/>)
                }
            </div>
        </>
    )
}

export default TodosPage