import { Component } from "react";

export class EmployeeInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            employee: {
                name:'',
                email: '',
                salary: ''
            },
            errors:{}
      };
    }
    render(){
        return(
            <div>
                <h2>Employee Form</h2>
                {this.generateForm()}
            </div>
        );
    }

    generateForm(){
        return(
            <div>
                
                    <label>Enter your name:
                        <input
                            type="text"
                            name="name" 
                            value={this.state.employee.name}
                            onChange={this.changeHandler}
                        />
                        <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
                    </label>
                    <br /><br />

                    <label>Enter your Email:
                        <input
                            type="text"
                            name="email" 
                            value={this.state.employee.email}
                            onChange={this.changeHandler}
                        />
                        <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
                    </label>
                    <br /><br />

                    <label>Enter your Salary:
                        <input
                            type="text"
                            name="salary" 
                            value={this.state.employee.salary}
                            onChange={this.changeHandler}
                        />
                        <span style={{ color: "red" }}>{this.state.errors["salary"]}</span>
                    </label>
                    <br /><br />

                    <button onClick={this.onCreateEmployee}>Create</button>
                
                
            </div>
        );
    }

    changeHandler = e => {
        this.setState({
            employee: {
                ...this.state.employee,
                [e.target.name] : e.target.value
            }
        });
    }
    onCreateEmployee=()=>{
        console.log(this.state.employee);    
        if(this.handleValidation()){
            alert('Form is correct');
        }
        
      }

    handleValidation(){
         let formIsValid=true; 
         let errors={};
         let name = this.state.employee.name; 
         let email = this.state.employee.email;
         let salary = this.state.employee.salary; 

         if(!name){
            formIsValid=false;
            errors['name']='Cannot be empty';
         } 
         if(!salary){
            formIsValid=false;
            errors['salary']='Cannot be empty';
         } 
         if(!email){
            formIsValid=false;
            errors['email']='Cannot be empty';
         } 
         this.setState({
             errors: errors
         });  
         return formIsValid;
    }
}
