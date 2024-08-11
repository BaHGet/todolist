import { FloatingLabel, Form } from "react-bootstrap"

export const FloatingLabelComponent = ({props}) => {
    const {type, placeholder, callback, ErrorMassage } = props
    return(
        <FloatingLabel 
            controlId="floatingInputName" 
            label={placeholder}
            className="mb-3 w-100 text-dark"
        >
            
            <Form.Control
                required 
                type={type}
                placeholder={placeholder} 
                onChange={(e) => callback(e.target.value)} 
            />
            
            <Form.Control.Feedback type="invalid">
                {ErrorMassage}
            </Form.Control.Feedback>

        </FloatingLabel>
    )
}

export const FormGroupComponent = ({props}) => {
    const { label, type, placeholder, callback, ErrorMassage } = props
    return(
        <Form.Group label="Add Due Date" className="mb-3 w-100 text-dark">
            <Form.Label>{label}</Form.Label>
            <input 
                required 
                type={type}
                placeholder={placeholder} 
                onChange={(e) => callback(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
                {ErrorMassage}
            </Form.Control.Feedback>
        </Form.Group>
    )
}