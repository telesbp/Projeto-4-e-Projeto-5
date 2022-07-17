import styled from "styled-components";

export function HomeView(){
    return(
        <Banner className="vh-100">
            <h1>Um lugar para chamar de Lar!</h1>
        </Banner>
    )
}

const Banner = styled.div`
    background-color: #d5bdaf;
`