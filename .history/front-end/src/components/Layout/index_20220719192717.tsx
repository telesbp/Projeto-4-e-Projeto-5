import styled from "styled-components"
import { Footer } from "./Footer"
import { Header } from "./Header"

type Props = {
    children: React.ReactNode
    startTransparent?: boolean
}



export const Layout: React.FC<Props> = ({children, startTransparent}) => {
    return (
        <>
            <Header startTransparent={startTransparent}/>
            <MainStyled startTransparent={startTransparent}>
                {children}
            </MainStyled>
            <Footer/>
        </>
    )
}
type MainProps = {
    startTransparent?: boolean
}
const MainStyled = styled.main<MainProps>`
    ${props => props.startTransparent && `
        padding-top: 139px;
    `}
`