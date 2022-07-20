import { Form } from "react-bootstrap";

type Props ={
    controlId: string
    label?: string
}

export function FormField({controlId, label}: Props){
    return(
    <Form.Group className="mb-3" controlId={controlId}>
        {label && <Form.Label className="mb-1">{label}</Form.Label>}
    </Form.Group>
    )
}