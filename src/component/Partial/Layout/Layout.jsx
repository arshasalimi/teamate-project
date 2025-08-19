import Footer from "../../ui/Footer"
import Header from "../../ui/Header"

function Layout({ children }) {
    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                {children}
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}
export default Layout