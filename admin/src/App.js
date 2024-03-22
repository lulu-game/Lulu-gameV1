// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/admin" component={Login} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
