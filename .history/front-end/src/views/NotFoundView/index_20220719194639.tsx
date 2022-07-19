import { Layout } from "../../components/Layout"
import { PageTitle } from "../../components/PageTitle"

export function NotFoundView(){
    return(
        <Layout>
            <PageTitle>Página não encontrada!</PageTitle>  
            <p>A página que você está tentando acessar não existe ou foi movida.</p>
            <p>Utilize o menu para encontrar  que deseja ou clique no botão abaixo para ser redireciondado para a página inicial.</p>        
        </Layout>
    )
}