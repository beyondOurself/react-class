
import { Route, Routes, Link, Outlet, useParams } from 'react-router-dom'


function PageA() {
    
    return (
        <div>
            A 页面
        </div>
    )
}
function PageB() {
    
    return (
        <div>
             B 页面
        </div>
    )
}

function Params() {
    
    let params = useParams()
    console.log('params', params)
    return <h2>
        {params.params}
    </h2>

}

function Layout() {
    <div>
        <div>
            <Link to='a'>a 呀</Link>
            <Link to='b'> b </Link>
            <Link to='a/1234'> a1234 </Link>
        </div>
        <div>
            <Outlet></Outlet>
        </div>
    </div>
    
}

function NotFound() {
    
    return (
        <div>
            没有发现
        </div>
    )
}

function DefaultPage (){
    return (
        <div> <Link to='a'>a 呀</Link>
            <Link to='b'> b </Link>
            <Link to='a/1234'> a1234 </Link> www
      </div>
  )
}

function ParamsExample() {
    
    return (
        <Routes path='/' element={<Layout />}>
            <Route index element={<DefaultPage/>}></Route>
            <Route path='a' element={<PageA/>}>
                <Route path=':params' element={<Params></Params>}></Route>
            </Route>
            <Route path='b' element={<PageB/>}>

            </Route>

            <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
    )
} 


export default ParamsExample