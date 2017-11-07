import React from 'react';
import axios from 'axios';
import MainContainer from './MainContainer';

class Teams extends React.Component {
    constructor(props) {
        super(props);
        this.dataSource = this.props.dataSource;
        this.state = {
            teams: []
        }
    }

    componentDidMount() {
        axios.get("https://glacial-cove-51366.herokuapp.com/teams").then((res) => {
            this.setState({
                teams: res.data,
                dataLoaded: true
            });
        }).catch((err) => {
            console.log("error")
        });
    }

    componentWillUnmount() { }

    render() {
        return (
            <MainContainer sidebar="Teams">
                <h1 className="page-header">Teams</h1>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Team Name</th>
                            <th>Projects</th>
                            <th>Employees</th>
                            <th>Team Lead</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.teams.map((element, index) => {

                            function projectList(projects){
                                let list = '';
                                for (var i = 0; i < projects.length; i++ ) {
                                    list += '<li>' + projects[i].ProjectName + '</li>';
                                }
                                return list;
                            }

                            return (
                                <tr>
                                    <td>{element.TeamName}</td>
                                    <td>
                                        <ul>
                                        {projectList(element.Projects)}
                                        </ul>
                                    </td>
                                    <td>{element.Employees.length}</td>
                                    <td>{element.TeamLead.FirstName} {element.TeamLead.LastName}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </MainContainer>
        );
    }
}

export default Teams;