import Header from 'components/layouts/Auth/Header'
import Content from 'components/layouts/Auth/Content'
import Footer from 'components/layouts/Auth/Footer'

function AuthLayout({ children }) {
    return (
        <>
            <Header />
            <Content>{children}</Content>
            <Footer />
        </>
    )
}

export default AuthLayout