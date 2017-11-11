import React from 'react';
import NavBar from './NavBar';
/** 
 *  MainContainer (Component)
 *      Wraps everything that a page needs into it's own component
 * 
*/
class MainContainer extends React.Component {
    render(){
        return(
            <div>
                <NavBar highlight={this.props.sidebar}/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="main">
                            {this.props.children}
                        </div>
                    </div>
                </div>
           </div>
            
            );
    }
}

export default MainContainer;