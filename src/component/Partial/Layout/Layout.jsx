
import Header from "../../ui/Header"

function Layout({children}){
    return(
   <>
        <div>
            <Header/>
        </div>
        <div>
            {children}
        </div>
        <div>
        </div>
   </>
)
}
export default Layout