 import { Component } from 'react';
import './App.css';
import { EmployeeInput } from './components/EmployeeInput';
import { Nums } from './components/Nums';
import {PostList} from './components/PostList';
import { ToDo } from './components/ToDo';
import { User } from './components/User';

 class App extends Component {
   state ={
    nums : [3,2,5,8,4,1,7,9,222]
    }
  render() {
    return (
      <div>
          <Nums val={this.state.nums}/>
          <hr />
          <PostList />
          <hr />
          <EmployeeInput />
          <hr />
          <User />
          <hr />
          <ToDo />
          <hr />
          
      </div>
    );
  }
}
export default App;
