import { Button, ButtonProps } from "react-bootstrap";
import styled from "styled-components";

type Props = ButtonProps & {
    loading?: boolean
}

export function CustomButton({children, ...otherProps}: Props) {
    return(
        <ButtonStyled {...otherProps}>
            {children}
        </ButtonStyled>
    )
}
const ButtonStyled = styled(Button)`
    border-radius: 50px;
    font-weight: 500;
    padding:5px 50px 5px 50px;
    ${props => props.size ==='lg' && `
        font-size: 1.125rem;
    `}
    ${props => (props.variant === "primary" || !props.variant) && `
        background-color: #dda15e;
        border-color: #dda15e;
        &:hover {
            background-color: #bc6c25;
            border-color: #bc6c25;
        }
    `}
    ${props => (props.variant === "outline-primary" || !props.variant) && `
        border-color: #fafafa;
        color: #fafafa;
        &:hover {
            background-color: #dda15e;
            border-color: #dda15e;
        }
    `}
`