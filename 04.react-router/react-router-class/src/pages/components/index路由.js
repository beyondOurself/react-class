
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
function B1Page() {
    
    return (
        <div>
            这是B1
        </div>
    )
}

function DefaultPage() {
    
    return (
        <div>
            这是默认页面
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
                <Link to='B1Page'>B1Page</Link>
                <Link to='/'>CPage</Link>
            </nav>
            <div>
                <h1>这是内容</h1>
                <div>
                    <div>
                    
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
            <Route path='/' element={<Layout />}>
                <Route index element={<DefaultPage></DefaultPage>}></Route>
                <Route path='APage' element={<APage></APage>}></Route>
                <Route path='Bpage' element={<BPage></BPage>}>
                    <Route path='B1Page' element={<B1Page></B1Page>}>

                    </Route>
                </Route>
            </Route>
        </Routes>
    )
    
}

export default NestRoutes