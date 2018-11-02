import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    value:'',
    users:[]
  }

  async componentDidMount() {
    const {data} = await axios.get('/api/users')
    if(data === undefined){
      return this.setState({users:[]})
    }
    this.setState({users:data})
  }
  onChange = ({target}) => this.setState({[target.name]:target.value})

  onClick = async () => {
    await axios.post('/api/user', {
      username:this.state.value
    })
    this.setState({value:''})
  }

  render() {
    if(this.state.users.length <= 0){
      return '.loading'
    }
    return (
      <div className="App">
        <form>
          <input value={this.state.value}
          name='value'
          onChange={this.onChange}/>
        </form>
        <button onClick={this.onClick}>Save</button>
        <div>
        {
          this.state.users.map(value => {
            return  <div key={value['_id']}>{value.username}</div>
          })
        }
        </div>
      </div>
    );
  }
}

export default App;
