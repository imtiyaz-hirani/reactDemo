import { Component } from "react";

export class ToDo extends Component{

    constructor(props){
        super(props);

        this.state = {
            todoArry :[]
        }
    }

    render(){
        return(
            <div>
                {
                    this.state.todoArry.map(todo=>(
                        <div key={todo.id}> 
                            {todo.id} -- {todo.userId} -- {todo.title} -- {todo.completed?'true':'false'}
                            <br />
                        </div>
                    ))
                }

            </div>
        );
    }


    componentDidMount(){
       
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            this.setState({ todoArry : data});
        });
      }
}