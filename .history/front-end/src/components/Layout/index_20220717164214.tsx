type Props = {
    children: React.ReactNode
}
export const Layout: React.FC<Props> = ({children}) => {
    return (
        <>
            <p>Header</p>
            {children}
            <p>Footer</p>
        </>
    )
}