
import { Link,Route,Routes,Outlet } from 'react-router-dom'
function APage() {
    
    return (
        <div>
            这是A
        </div>
    )
}
function BPage() {
    
    return (
        <div>
            这是B
        </div>
    )
}


function Layout() {
    return (
        <div>
            <h1>Welcome to the App</h1>
            <nav>
                <Link to='APage'>APage</Link>
                <Link to='BPage'>BPage</Link>
            </nav>
            <div>
                <h1>这是内容</h1>
                <div>
                    <div>
                        <Routes>
                            <Route>
                                
                            </Route>
                        </Routes>
                    </div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}

function NestRoutes() {
    
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='APage' element={<APage></APage>}></Route>
                <Route path='Bpage' element={<BPage></BPage>}></Route>
            </Route>
        </Routes>
    )
    
}

export default NestRoutes