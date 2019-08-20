import React from 'react'
import {Link,withRouter} from 'react-router-dom';
import './Header.scss';

export default withRouter(function Header(props) {

    const currentRoute=props.location.pathname.replace('/','');
    return (
        <div className="row">
            <div className="col">
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <h1 className="navbar-brand" >Someone</h1>
                    <div className="navbar-nav" id="navBarContent">
                        {
                            props.children.map((child,index)=>{
                            
                                return <Link key={index} className={`nav-item nav-link ${currentRoute===child.route?'active':''}`} to={`/${child.route}`} >{child.title}</Link>
                            })
                        }
                    </div>
                </nav>
            </div>
        </div>

    )
    
});
