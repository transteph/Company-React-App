import React from 'react';
import {Link} from 'react-router-dom';

class SideBar extends React.Component {
    render(){
        return(
            <div className="col-sm-3 col-md-2  sidebar">
              <ul className="nav nav-sidebar">
                <li className="active"><Link to="/">Overview <span className="sr-only">(current)</span></Link></li>
              </ul>
              <ul className="nav nav-sidebar">
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/teams">Teams</Link></li>
                <li><Link to="/employees">Employees</Link></li>
              </ul>
            </div>
            );
    }
}

export default SideBar;