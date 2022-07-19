import styled from "styled-components"
import { Footer } from "./Footer"
import { Header } from "./Header"

type Props = {
    children: React.ReactNode
    startTransparent?: boolean
    withoutMargin?: boolean
}

type MainProps = Pick<Props, "startTransparent">

export const Layout: React.FC<Props> = ({children, startTransparent, withoutMargin}) => {
    return (
        <>
            <Header startTransparent={startTransparent}/>
            <MainStyled startTransparent={startTransparent}>
                {children}
            </MainStyled>
            <Footer withoutMargin={withoutMargin} />
        </>
    )
}


const MainStyled = styled.main<MainProps>`
    ${props => !props.startTransparent && `
        padding-top: 106px;
        @media (min-width: 992px){
            padding-top: 139px;
        }
    `}
`