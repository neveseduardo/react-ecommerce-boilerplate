import Header from 'components/layouts/Dashboard/Header'
import Content from 'components/layouts/Dashboard/Content'
import Footer from 'components/layouts/Dashboard/Footer'

function DashboardLayout({ children }) {
    return (
        <>
            <Header />
            <Content>{children}</Content>
            <Footer />
        </>
    )
}

export default DashboardLayout