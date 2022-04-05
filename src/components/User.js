import { Component } from "react";

export class User extends Component{

    constructor(props){
        super(props);
        this.state={
            users: []
        }
    }

    componentDidMount(){
        fetch('https://randomuser.me/api/')
            .then(({ results }) => this.setState({ person: results }));
      }
      
    render(){
        return(
            <div>
                <h4>User List</h4>
            </div>
        );
    }

}