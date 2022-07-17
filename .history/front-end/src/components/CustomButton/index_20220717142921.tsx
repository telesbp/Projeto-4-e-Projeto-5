import { Button, ButtonProps } from "react-bootstrap";

export function CustomButton(props: {children: ButtonProps }) {
    return(
        <Button {...props}/>
    )
}