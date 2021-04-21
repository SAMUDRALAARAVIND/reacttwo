import React from "react"

import "./one.css"
import {BrowserRouter as Router,Switch,Link,Route} from "react-router-dom"
export class  Test extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:"Arvaind",
            age:20,
            count:0
        };
    }
    render(){
        return (
            <div>
                <center>My name is : {this.state.name}</center>
                <center>My age is: {this.state.age}</center>
            </div>
        );
    }
}
export function App(){
    var first = {
        color:"blue",
        backgroundColor:"red",
        padding:"10px",
        border:"2px solid tomato"
    };
    return (
        <Router>
            <div>
                <nav style = {first}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </nav>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                         <Users />
                    </Route>
                    <Route path="/">
                         <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
function Home(){
    return <h1>This is Home page</h1>;
}
function Users(){
    return <h3>This is Users page</h3>;
}
function About(){
    return <h2>This is ABout page</h2>;
}

