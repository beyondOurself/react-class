/** 
 *  App > Edit , List , Means
 *  Login
 *  Register
 *  History 模式 -- BrowserRouter
 *  Hash 模式  -- HashRouter
 */
import App from '../App'
import List from '../pages/List'
import Edit from '../pages/Edit'
import Means from '../pages/Means'
import Login from '../pages/Login'
import Register from '../pages/Register'
import TableList from "../pages/TableList"
import ListList from "../pages/ListList"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const BaseRouter = () => (
    <Router>
        <Routes>
            <Route path='/' element={<App/>}>
                <Route path='list' element={<List/>}></Route>
                <Route path='edit' element={<Edit/>}></Route>
                <Route path='edit/:id' element={<Edit/>}></Route>
                <Route path='means' element={<Means/>}></Route>
                <Route path='tablelist' element={<TableList/>}></Route>
                <Route path='listlist' element={<ListList/>}></Route>
            </Route>
                <Route path='login' element={<Login/>}></Route>
                <Route path='register' element={<Register/>}></Route>

        </Routes>
    </Router>
)

export default BaseRouter