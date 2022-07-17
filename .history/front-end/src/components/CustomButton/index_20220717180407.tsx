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
    min-height: max-content;
    ${props => props.size ==='lg' && `
        font-size: 1.125rem;
    `}
    ${props => (props.variant === "primary" || !props.variant) && `
        background-color: #606c38;
        border-color: #606c38;
        color: #fafafa!important;        
        &:hover {
            background-color: #283618;
            border-color: #283618;
        }
    `}
    ${props => (props.variant === "outline-primary" || !props.variant) && `
        border-color: #283618;
        color: #283618;
        &:hover {
            background-color: #283618;
            border-color: #283618;
            color: #fafafa;
        }
    `}
`