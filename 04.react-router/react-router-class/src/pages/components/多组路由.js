

import { Link,Route,Routes,Outlet } from 'react-router-dom';


function AArea() {
    return (
        <div>
            <Link path='a'> aaa </Link>
            kkk
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}
function BArea() {
    return (
        <div>
            <Link path='b'> bbb </Link>
            <Outlet></Outlet>

        </div>
    )
}

function A() {
    return (
        <div>
            A 页面
            <Link to='a1'>a1</Link>
            <Link to='a2'>a2</Link>
            <Outlet></Outlet>
        </div>
    )
}
function A1() {
    return (
        <div>
            A1页面
        </div>
    )
}
function A2() {
    return (
        <div>
            A2页面
        </div>
    )
}
function AD() {
    return (
        <div>
            AD 页面
            <Link to='a'>aaa</Link>

        </div>
    )
}
function B() {
    return (
        <div>
            B 页面
        </div>
    )
}
function BD() {
    return (
        <div>
            BD页面
        </div>
    )
}


function MultiGroup() {
    
    return (
        <div>
            <h1>A区域</h1>
            <div>
                <Routes path='/'  element={<AArea></AArea>}>
                    <Route index element={<AD></AD>}></Route>
                    <Route path='a' element={<A></A>}>
                        <Route path='a1' element={<A1></A1>}>

                        </Route>
                        <Route path='a2' element={<A2></A2>}>

                        </Route>
                    </Route>
                </Routes>
            </div>
            
            <hr></hr>
            <h1>B区域</h1>
            <div>
                <Routes path='/' element={<BArea/>}>
                    <Route index element={<BD></BD>}>

                    </Route>

                    <Route path='b' element={<B></B>}></Route>
                </Routes>
            </div>
            
        </div>
    )
}

export default MultiGroup