type Props = {
    children: React.ReactNode
}
export const Layout: React.FC<Props> = () => {
    return (
        <>
            <p>Header</p>
            <p>Conteudo</p>
            <p>Footer</p>
        </>
    )
}