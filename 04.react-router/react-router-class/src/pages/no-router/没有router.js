
import React , { useState, useEffect} from 'react'


function HomePage() {
    
    return (
        <div>
            这是Home页面

        </div>
    )
}

function APage() {

    return (
        <div>
            这是A页面
        </div>
    )
}
function BPage() {

    return (
        <div>
            这是B页面
        </div>
    )
}
function CPage() {

    return (
        <div>
            这是C页面
        </div>
    )
}


function NoRouterTemplate() {
    const [route, setRoute] = useState('')
    function handleHashChange() {
        const routeString = window.location.hash.substring(1)
        setRoute(routeString)
    }
    useEffect(
        () => {
            console.log('>>>>')
            window.addEventListener('hashchange', handleHashChange )

            return () => {
                window.removeEventListener('hashchange', handleHashChange)
            }

        }

    )
    
    let ActivtedChild = ''; 
    
    switch (route) {
        case '/a': ActivtedChild = APage; break;
        case '/b': ActivtedChild = BPage; break;
        case '/c': ActivtedChild = CPage; break;
        default: ActivtedChild = HomePage;
    }

    const handleClick = () => {
        console.log(window.location.hash.substring(1))
    }

    return (
        
    

        <div>
            <button onClick={handleClick}>按钮</button>
            <h1>App</h1>
            <ul>
                <li><a href='#/a'>About a</a></li>
                <li><a href='#/b'>About b</a></li>
                <li><a href='#/c'>About c</a></li>
            </ul>

             <div>当前页面</div>
            {<ActivtedChild></ActivtedChild>}
            </div>
    )


}

export default NoRouterTemplate