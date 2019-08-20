import React from 'react'
//ROUTER
import { BrowserRouter,Route,Switch} from 'react-router-dom';
//ROUTES
import {APPLICATION_ROUTES} from './constants/constants';
//CONTAINERS
import Home from './containers/Home/Home';
import About from './containers/About/About';
import SignUp from './containers/SignUp/SignUp';
import Login from './containers/Login/Login';

//COMPONENTS
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';


export default function App() {
    return (
        <BrowserRouter>
            <Header children={APPLICATION_ROUTES} />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/login" component={Login} />
                <Route path="*" component={NotFound} />  
            </Switch>
        </BrowserRouter>

    )
}
