import React from "react";
import logo from './logo.svg';

const Greeting = (props) => {
    return (
        <React.Fragment>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <div className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </div>
        </React.Fragment>
    );
}

export default Greeting;