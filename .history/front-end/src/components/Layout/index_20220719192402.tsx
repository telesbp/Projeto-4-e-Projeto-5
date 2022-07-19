import styled from "styled-components"
import { Footer } from "./Footer"
import { Header } from "./Header"

type Props = {
    children: React.ReactNode
    startTransparent?: boolean
}
type MainProps={
    startTransparent?: boolean
}


export const Layout: React.FC<Props> = ({children, startTransparent}) => {
    return (
        <>
            <Header startTransparent={startTransparent}/>
            <MainStyled>
                {children}
            </MainStyled>
            <Footer/>
        </>
    )
}
const MainStyled = styled.main<MainProps>`
    ${props => props.startTransparent && `
        padding-top: 139px;
    `}
`