import {
    Routes,
    Route,
    Link,
    Outlet,
} from "react-router-dom";

function Home() {
    return <h1>Home</h1>;
}

function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <nav>
                <ul>
                    <li> <Link to="/">index</Link>
                    </li>
                   <li> <Link to="invoices">Invoices</Link>{" "} </li>
                   <li> <Link to="team">Team</Link> </li>
                   <li> <Link to="dashboard1">dashboard1</Link> </li>
                   <li> <Link to="notfound">notfound</Link> </li>
                </ul>

            </nav>
            <hr />
            <Outlet />
        </div >
    );
}
function Dashboard1() {
    return (
        <div>
            <h1>Dashboard</h1>
            <nav>
                <Link to="invoices1">Invoices1</Link>{" "}
                <Link to="team1">Team1</Link>
            </nav>
            <hr />
            <Outlet />
        </div>
    );
}

function Invoices() {
    return <h1>Invoices</h1>;
}

function Team() {
    return <h1>Team</h1>;
}
function Invoices1() {
    return <h1>Invoices1</h1>;
}

function Team1() {
    return <h1>Team1</h1>;
}
function NotFound() {
    return <h1>没有发现</h1>;
}
function Index() {
    return <h1>index</h1>;
}


function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route index element={<Index></Index>}></Route>
            <Route path="dashboard" element={<Dashboard />}>
                <Route path="invoices" element={<Invoices />} />
                <Route path="team" element={<Team />} />
                <Route path='dashboard1' element={<Dashboard1></Dashboard1>}>
                    <Route path="invoices1" element={<Invoices1 />} />
                    <Route path="team1" element={<Team1 />} />
                </Route>
                <Route path='*' element={<NotFound></NotFound>}></Route>
            </Route>
        </Routes>
    );
}

export default App