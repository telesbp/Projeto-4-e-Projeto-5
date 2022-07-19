import { Container } from "react-bootstrap"
import { Layout } from "../../components/Layout"
import { PageTitle } from "../../components/PageTitle"

export function NotFoundView(){
    return(
        <Layout>
            <Container className="flex-column flex-lg-row mx-5 text-align-center">
                <PageTitle>Página não encontrada!</PageTitle>  
                <p>A página que você está tentando acessar não existe ou foi movida.</p>
                <p>Utilize o menu para encontrar  que deseja ou clique no botão abaixo para ser redireciondado para a página inicial.</p>        
            </Container>
        </Layout>
    )
}