import React from 'react'
//ROUTER
import { BrowserRouter,Route,Switch} from 'react-router-dom';
//CONTAINERS
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';


export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Header} />
                <Route path="*" component={NotFound} />  
            </Switch>
        </BrowserRouter>

    )
}
