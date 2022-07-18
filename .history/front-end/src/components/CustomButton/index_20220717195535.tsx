import { Button, ButtonProps, Spinner } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";

type Props = ButtonProps & {
    loading?: boolean
    to?: string
}

export function CustomButton({children, loading, to, ...otherProps}: Props) {
    const button = (
        <ButtonStyled {...otherProps}>
            {loading && (
                <Spinner animation="border" role="status" size="sm" className="me-2">
                    <span className="visually-hidden">Carregando...</span>
                </Spinner>
            )}
            {children}
        </ButtonStyled>
    )
    if (to){
        return(
            <LinkContainer to={to}>
                {button}
            </LinkContainer>
        )
    }
    return button
}
const ButtonStyled = styled(Button)`
    border-radius: 50px;
    font-weight: 500;
    padding:5px 50px 5px 50px;
    ${props => props.size ==='lg' && `
        font-size: 1.125rem;
    `}
    ${props => (props.variant === "primary" || !props.variant) && `
        background-color: #3A5A40;
        border-color: #3A5A40;
        color: #DAD7CD!important;        
        &:hover {
            background-color: #344E41;
            border-color: #344E41;
        }
    `}
    ${props => (props.variant === "outline-primary" || !props.variant) && `
        border-color: #344E41;
        color: #344E41;
        &:hover {
            background-color: #344E41;
            border-color: #344E41;
            color: #DAD7CD;
        }
    `}
    ${props => (props.variant === "outline-secundary" || !props.variant) && `
        border-color: #DAD7CD;
        color: #DAD7CD;
        &:hover {
            background-color: #344E41;
            border-color: #344E41;
            color: #DAD7CD;
        }
    `}
`