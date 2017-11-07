import React from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
/** 
 *  MainContainer (Component)
 *      Wraps everything that a page needs into it's own component
 * 
*/
class MainContainer extends React.Component {
    render(){
        return(
            <div>
                <NavBar />
                <div className="container-fluid">
                    <div className="row">
                        <SideBar highlight={this.props.sidebar}/> 
                        <div className=" col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                            {this.props.children}
                        </div>
                    </div>
                </div>
           </div>
            
            );
    }
}

export default MainContainer;