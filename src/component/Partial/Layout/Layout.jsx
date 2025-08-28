import { useLocation } from "react-router-dom"
import Footer from "../../ui/Footer"
import Header from "../../ui/Header"

function Layout({ children }) {
    const location=useLocation()
    return (
        <>
            <div>
                {location==""?
                ""
                :
                <Header />
                }
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