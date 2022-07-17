import { Button, ButtonProps } from "react-bootstrap";
import styled from "styled-components";

export function CustomButton(props: ButtonProps ) {
    return(
        <ButtonStyled {...props}/>
    )
}
const ButtonStyled = styled(Button)`
    border-radius: 50px;
    font-weight: 500;
    padding:5px 50px 5px 50px;
    ${props => props.size ==='lg' && `
        font-size: 1.125rem;
    `}
    ${props => props.variant === "primary" && `
        background-color: #d5bdaf;
        border-color: #d5bdaf;
        &:hover {
            background-color: #8b7c73;
            border-color: #8b7c73;
        }
    `}
`