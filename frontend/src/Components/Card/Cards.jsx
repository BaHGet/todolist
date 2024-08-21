import { Skeleton } from "@mui/material"
import { useState } from "react"
import { Button, Card, ListGroup, Nav, Form } from "react-bootstrap"
import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import { updateTodo } from '../../APIs/todosApi';

export const CardCompoent = (props) => {
    const {todo, index, handelDelete} = props
    const [edit , setEdit] = useState(false)
    const [editTitle, setEditTitle] = useState(todo.title)
    const [editDescription, setEditDescription] = useState(todo.description)
    const [editPraiority, setEditPraiority] = useState(todo.priority) 
    const [editDueDate, setEditDueDate] = useState(todo.due_date);
    const handelEdit = (bool) => {
        setEdit(bool)
        setEditTitle(todo.title)
        setEditDescription(todo.description)
        setEditPraiority(todo.priority)
        setEditDueDate(todo.due_date)
    }
    
    const handelUpdate = async() => {
        await updateTodo(todo.username, todo.title, editTitle, editDescription, editPraiority, editDueDate)
        console.log(todo.username, todo.title, editTitle, editDescription, editPraiority, editDueDate)
        setEditTitle('')
        setEditDescription('')
        setEditPraiority('')
        setEditDueDate('')
        window.location.reload()
    }
    
    return(
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
                                <input type="datetime-local"  onChange={(e) => setEditDueDate(e.target.value)}  />
                            </>
                        :
                            <>
                                <ListGroup.Item key={'description-'+index} className='text-break'>{todo.description}</ListGroup.Item>
                                <ListGroup.Item key={'priority-'+index}>Priority: {todo.priority} </ListGroup.Item>
                                <ListGroup.Item key={'due_date-'+index}>Due Date: {dayjs(todo.due_date).format('YY-MM-DD HH:mm')} </ListGroup.Item>
                            </>
                }
                
                <ListGroup.Item key={'buttons-'+index} className='d-flex justify-content-around align-items-center'>
                    <Button key={'done-'+index} variant={edit ? 'dark' : 'mute'} disabled={!edit} onClick={handelUpdate} size="sm">Done</Button>
                    <Button key={'delete-'+index} data-testid="delete" variant="danger" onClick={() => handelDelete(todo.username, todo.title)} size="sm">Delete</Button>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    )
}

export const SkeletonCardCompoent = ({childs}) => {
    const array = new Array(childs).fill(0)
    return (
        array.map((item, index) => {
            return(
                <Card  key={index} style={{ width: '20rem',height: '10rem', margin: '5px', backgroundColor: '#c0c5ce', color: '#4f5b66'}}>
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
            )
        })
    )
}