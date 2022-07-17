import { Button, ButtonProps } from "react-bootstrap";
import styled from "styled-components";

export function CustomButton(props: ButtonProps ) {
    return(
        <Button {...props}/>
    )
}
const ButtonStyled = styled(Button)`
    border-radius: 30px;
`