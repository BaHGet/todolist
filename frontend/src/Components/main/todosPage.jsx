import { useState, useEffect } from "react"
import Skeleton from '@mui/material/Skeleton';
import { Card, Form, Nav} from 'react-bootstrap';
import { getTodos, deleteTodo } from "../../APIs/todosApi"
import "./todo-style.css"
import Todo from "./todo"
import NavDropdown from "./navDropdown"
import AddTodo from "./addTodo";
import { useWindowResize } from "../../hooks/useWindowResize";


const TodosPage = ({user, handelLogout}) => {
    const [todos, setTodos] = useState([]);
    const [width, setWidth] = useState(window.outerWidth);
    const [currentWindow, setCurrentWindow] = useState("todos");
    useWindowResize({width, setWidth});

    useEffect(() => {
        getTodos(user.username).then(res => {
            if(res){
                if(Object.keys(res).length > 0){
                    setTodos(res)
                }else{
                    setTodos("no-todos")
                }
            }
            
        })
    }, [currentWindow])


    

    const handelDelete = (username, title) => {
        deleteTodo(username, title)
        if(todos.length === 1){
            setTodos("no-todos")
        }else{
            setTodos(todos.filter(todo => todo.title !== title))
        }
    }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center p-2 rounded" style={{backgroundColor: '#a7adba'}}>
                <h2 className="m-3">Welcome {user.username}</h2>
                <NavDropdown user={user} handelLogout={handelLogout}/>
            </div>
            <div>
            <div className="d-flex justify-content-center align-items-center p-2 m-2 rounded" style={{backgroundColor: '#a7adba'}} >
                <Nav variant="tabs" defaultActiveKey="#todos">
                    <Nav.Item>
                        <Nav.Link href="#completed" className='text-dark' onClick={() => setCurrentWindow("Add")}>Add</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#todos" className='text-dark' onClick={() => setCurrentWindow("todos")}>Todos</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            </div>
            {
                currentWindow === "todos" ?
                    todos === "no-todos" ?
                    <h1 className="text-light">No Todos</h1>
                        
                        :
                        todos.length === 0 ?
                            <div id="todos-container" className={
                                width < 768 ? 
                                    "d-flex flex-column justify-content-center align-items-center p-2" 
                                :
                                    "d-flex flex-row flex-wrap justify-content-center align-items-center p-2 "} 
                            >
                                <Card  style={{ width: '20rem',height: '10rem', margin: '5px', backgroundColor: '#c0c5ce', color: '#4f5b66'}}>
                                    <Card.Header style={{backgroundColor: '#a7adba'}}>
                                        <Nav variant="tabs">
                                            <Nav.Item>
                                                <Nav.Link href="#todo" className='text-dark'>Active</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Title> <Skeleton animation="wave" variant="rectangular" width={90} height={18} /> </Card.Title>
                                        <Card.Subtitle className="fw-lighter"> <Skeleton animation="wave" variant="rectangular" width={210} height={18} /> </Card.Subtitle>
                                    </Card.Body>
                                </Card>
                                <Card  style={{ width: '20rem',height: '10rem', margin: '5px', backgroundColor: '#c0c5ce', color: '#4f5b66'}}>
                                    <Card.Header style={{backgroundColor: '#a7adba'}}>
                                        <Nav variant="tabs">
                                            <Nav.Item>
                                                <Nav.Link href="#todo" className='text-dark'>Active</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Title> <Skeleton animation="wave" variant="rectangular" width={90} height={18} /> </Card.Title>
                                        <Card.Subtitle className="fw-lighter"> <Skeleton animation="wave" variant="rectangular" width={210} height={18} /> </Card.Subtitle>
                                    </Card.Body>
                                </Card>
                                <Card  style={{ width: '20rem',height: '10rem', margin: '5px', backgroundColor: '#c0c5ce', color: '#4f5b66'}}>
                                    <Card.Header style={{backgroundColor: '#a7adba'}}>
                                        <Nav variant="tabs">
                                            <Nav.Item>
                                                <Nav.Link href="#todo" className='text-dark'>Active</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Title> <Skeleton animation="wave" variant="rectangular" width={90} height={18} /> </Card.Title>
                                        <Card.Subtitle className="fw-lighter"> <Skeleton animation="wave" variant="rectangular" width={210} height={18} /> </Card.Subtitle>
                                    </Card.Body>
                                </Card>
                                <Card  style={{ width: '20rem',height: '10rem', margin: '5px', backgroundColor: '#c0c5ce', color: '#4f5b66'}}>
                                    <Card.Header style={{backgroundColor: '#a7adba'}}>
                                        <Nav variant="tabs">
                                            <Nav.Item>
                                                <Nav.Link href="#todo" className='text-dark'>Active</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Title> <Skeleton animation="wave" variant="rectangular" width={90} height={18} /> </Card.Title>
                                        <Card.Subtitle className="fw-lighter"> <Skeleton animation="wave" variant="rectangular" width={210} height={18} /> </Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </div>
                        :
                            <div id="todos-container" className={
                                width < 768 ? 
                                    "d-flex flex-column justify-content-center align-items-center p-2" 
                                :
                                    "d-flex flex-row flex-wrap justify-content-center align-items-center p-2 "} 
                            >
                                {todos.map((todo, index) => {
                                    return <Todo key={index} todo={todo} handelDelete={handelDelete} />
                                })}
                            </div>
                
                    :
                    <div className="d-flex justify-content-center align-items-center p-2 " style={{backgroundColor: '#c0c5ce'}}>
                        <AddTodo username={user.username} />
                    </div>
            }
        </>
    )
}

export default TodosPage