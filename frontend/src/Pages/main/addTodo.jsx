import { useState } from "react";
import { Form, Button } from "react-bootstrap"
import {FloatingLabelComponent, FormGroupComponent} from "../../Components/Form/FromChilds";
import { createTodo } from "../../APIs/todosApi";

const AddTodo = ({username}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority , setPriority] = useState('');
    const [dueDate , setDueDate] = useState('');
    const [validated, setValidated] = useState(false);

    const handleSubmit = async(event) => {
        const form = event.target.form;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }else{
            setValidated(true);
            await createTodo({username,title, description, priority, dueDate}).then(res => { console.log(res)})
            window.location.reload();
        }
    };
    return (
        <Form 
            className="d-flex flex-column justify-content-center align-items-center p-2 m-2 rounded" 
            style={{backgroundColor: '#a7adba'}}
            validated={validated}
        >
            <FloatingLabelComponent required props={{type: "text", placeholder: "Add Title", callback: setTitle, ErrorMassage: "Please type a title."}} />
            <FloatingLabelComponent required props={{type: "text", placeholder: "Add Description", callback: setDescription, ErrorMassage: "Please type a Description."}} />
            <FloatingLabelComponent required props={{type: "text", placeholder: "Add Priority", callback: setPriority, ErrorMassage: "Please type a Priority."}} />
            <FormGroupComponent required props={{label: "Due Date:", type: "datetime-local", placeholder: "Due Date", callback: setDueDate, ErrorMassage: "Please type a Due Date."}} />
            <Button variant="dark" data-testid="submit" type="submit" onClick={(e) => { handleSubmit(e) }}>Add</Button>
        </Form>
    )
}

export default AddTodo