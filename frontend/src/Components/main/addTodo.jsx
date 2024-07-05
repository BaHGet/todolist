import { useState } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap"
import { createTodo } from "../../APIs/todosApi";

const AddTodo = ({username}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority , setPriority] = useState('');
    const [dueDate , setDueDate] = useState('');
    const [validated, setValidated] = useState(false);

    const handleSubmit = async(event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        await createTodo({username,title, description, priority, dueDate}).then(res => { console.log(res)})
        window.location.reload();
    };
    return (
        <Form 
            className="d-flex flex-column justify-content-center align-items-center p-2 m-2 rounded" 
            style={{backgroundColor: '#a7adba'}}
            validated={validated}
        >
            <FloatingLabel controlId="floatingInputName" label="Add Title" className="mb-3 w-100 text-dark">
                <Form.Control required type="name" placeholder="Add Title" onChange={(e) => setTitle(e.target.value)} />
                <Form.Control.Feedback type="invalid">
                    Please type a title.
                </Form.Control.Feedback>
        
            </FloatingLabel>
            <Form.Group controlId="floatingInputName" label="Add Description" className="mb-3 w-100 text-dark">
                <Form.Control required as="textarea" type="text" placeholder="Add Description" onChange={(e) => setDescription(e.target.value)} />    
                <Form.Control.Feedback type="invalid">
                    Please type a Description.
                </Form.Control.Feedback>
        
            </Form.Group>
            <FloatingLabel controlId="floatingInputName" label="Add Priority" className="mb-3 w-100 text-dark">
                <Form.Control required as="input" type="text" placeholder="Add Priority" onChange={(e) => setPriority(e.target.value)}/>
                <Form.Control.Feedback type="invalid">
                    Please type a Priority.
                </Form.Control.Feedback>
            </FloatingLabel>
            <Form.Group label="Add Due Date" className="mb-3 w-100 text-dark">
                <Form.Label>Due Date:  </Form.Label>
                <input placeholder="Due Date" required type="datetime-local"  onChange={(e) => setDueDate(e.target.value)}/>
                <Form.Control.Feedback type="invalid">
                    Please type a Due Date.
                </Form.Control.Feedback>
            </Form.Group>
            <Button variant="dark" data-testid="submit" type="submit" onClick={(e) => { handleSubmit(e) }}>Add</Button>
        </Form>
    )
}

export default AddTodo