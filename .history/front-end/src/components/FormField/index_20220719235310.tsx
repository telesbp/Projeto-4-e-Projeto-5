import { Form, FormControlProps } from "react-bootstrap";
import { IMaskInput } from "react-imask";

type Props ={
    controlId: string
    label?: string
    error?: string
    mask?: {mask: string}[]
} & FormControlProps

export function FormField({controlId, error, label, mask, ...inputProps}: Props){
    return(
    <Form.Group className="mb-3" controlId={controlId}>
        {label && <Form.Label className="mb-1">{label}</Form.Label>}
        {mask ? (<Form.Control {...inputProps} as={IMaskInput} mask={mask} />) : 
        (<Form.Control {...inputProps}/>) }
        <Form.Control.Feedback type="invalid">
            {error}
        </Form.Control.Feedback>
    </Form.Group>
    )
}