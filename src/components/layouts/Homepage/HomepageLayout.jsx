import Header from 'components/layouts/Homepage/Header'
import Content from 'components/layouts/Homepage/Content'
import Footer from 'components/layouts/Homepage/Footer'

function HomepageLayout({ children }) {
    return (
        <>
            <Header />
            <Content>
                {children}
            </Content>
            <Footer />
        </>
    )
}

export default HomepageLayout