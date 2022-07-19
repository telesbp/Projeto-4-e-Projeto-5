import { Container } from "react-bootstrap"
import styled from "styled-components"
import { Layout } from "../../components/Layout"
import { PageTitle } from "../../components/PageTitle"
import bg404 from "../../assets/img/sofa2.png"

export function NotFoundView(){
    return(
        <Layout withoutMargin>
            <ContainerBannerStyled>
                <PageTitle>Página não encontrada!</PageTitle>  
                <PStyle className="mt-5">A página que você está tentando acessar não existe ou foi movida.</PStyle>
                <PStyle>Utilize o menu para encontrar  que deseja ou clique no botão abaixo para ser redireciondado para a página inicial.</PStyle>        
            </ContainerBannerStyled>
        </Layout>
    )
}

const PStyle = styled.p`
    text-align: center;
    font-size: 1.2rem;
`
const ContainerBannerStyled = styled(Container)`
    background: url(${bg404}) no-repeat center center;
    background-size: cover;
    height: 100%;
`