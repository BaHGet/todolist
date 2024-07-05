import { useState } from 'react';
import { Button, Card, ListGroup, Nav, Form} from 'react-bootstrap';
import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime";
import { updateTodo } from '../../APIs/todosApi';

dayjs.extend(relativeTime);

const Todo = ({index, todo, handelDelete}) => {
const [edit , setEdit] = useState(false)
const [editTitle, setEditTitle] = useState(todo.title)
const [editDescription, setEditDescription] = useState(todo.description)
const [editPraiority, setEditPraiority] = useState(todo.status) 

const handelEdit = (bool) => {
    setEdit(bool)
    setEditTitle(todo.title)
    setEditDescription(todo.description)
    setEditPraiority(todo.status)
}

const handelUpdate = async() => {
    handelEdit(false)
    await updateTodo(todo.username, todo.title,editTitle, editDescription, editPraiority)
    setEditTitle('')
    setEditDescription('')
    setEditPraiority('')
    window.location.reload()
}


    return (
        <div key={index}>
                <Card key={'card-'+index} style={{ width: '20rem', margin: '5px', backgroundColor: '#c0c5ce', color: '#4f5b66'}}>
                    <Card.Header style={{backgroundColor: '#a7adba'}}>
                        <Nav variant="tabs" defaultActiveKey="#todo">
                            <Nav.Item>
                                <Nav.Link href="#todo" className='text-dark' onClick={() => handelEdit(false)}>Active</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#edit" className='text-dark' onClick={() =>handelEdit(true)}>Edit</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body key={'card-body-' + index}>
                        {
                            edit ?
                                    <Form.Control size="sm" className='my-2' type="text" placeholder={todo.title} onChange={(e) => setEditTitle(e.target.value)}  /> 
                                :
                                    <Card.Title key={'card-title-' + index}>{todo.title}</Card.Title>
                        }
                        <Card.Subtitle key={'card-subtitle-' + index} className="fw-lighter">Created {dayjs(todo.created_at).fromNow()}</Card.Subtitle>
                    </Card.Body>
                    <ListGroup key={'list-' + index} className="list-group-flush">
                        {
                            edit ?
                                    <>
                                        <Form.Control size="sm" className='' type="text" placeholder="new description" onChange={(e) => setEditDescription(e.target.value)}  /> 
                                        <Form.Control size="sm" className='my-1' type="text" placeholder='praiority' onChange={(e) => setEditPraiority(e.target.value)}  /> 
                                    </>
                                :
                                    <>
                                        <ListGroup.Item key={'description-'+index} className='text-break'>{todo.description}</ListGroup.Item>
                                        <ListGroup.Item key={'priority-'+index}>Priority: {todo.priority} </ListGroup.Item>
                                    </>
                        }
                        
                        <ListGroup.Item key={'buttons-'+index} className='d-flex justify-content-around align-items-center'>
                            <Button key={'done-'+index} variant={edit ? 'dark' : 'mute'} disabled={!edit} onClick={handelUpdate} size="sm">Done</Button>
                            <Button key={'delete-'+index} variant="danger" onClick={() => handelDelete(todo.username, todo.title)} size="sm">Delete</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
        </div>
    )
}

export default Todo