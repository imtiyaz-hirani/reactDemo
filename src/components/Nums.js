import { Component } from "react";

export class Nums extends Component{

    i=0;
    constructor(props){
        super(props);
        this.state={
            nums : this.props.val
        }
    }
    componentDidMount(){
        /*
            update state after mounting
        
        this.state({

        });
        */
    }
    render(){
        return(
            <div>
                {
                    this.state.nums.map(e=>(
                        <li key={this.i++}>{e}</li>
                    ))
                }
                <br />
                <button onClick={this.sortNums}>Sort Numbers</button>
            </div>
        );
    }

    sortNums = () => {
        let arry = this.state.nums.sort((a,b)=>( a-b));
        this.setState({
          nums: arry
        });
        
    }
}