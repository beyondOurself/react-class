import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import NestRoutes from './pages/components/嵌套路由'
import IndexRoutes from './pages/components/index路由'
import RelativeLink from './pages/components/相对链接'
import MultiGroupt from './pages/components/多组路由'

import Params from './pages/components/传参'

// App.js
function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}



export default  function App() {
  return (
    <div className="App">
      {/* <NestRoutes></NestRoutes>
      */
      
        <Params></Params>
      }
    </div>
  );
}