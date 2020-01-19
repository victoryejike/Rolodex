import React from 'react';
import './App.css';
import Cardlist from './Components/Cardlist.component/cardlist.component'
import SearchBox from './Components/searchbox.component/searchbox.component'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField: ''
    }
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
  .then(users=>this.setState({monsters:users}))
}

handleChange = (e) => {
  this.setState({searchField: e.target.value})
}

  render(){
    const { monsters, searchField } = this.state
    const filteredList = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())  
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={this.handleChange} 
        />
        <Cardlist monsters={filteredList}/>
      </div>
    );
  }
}

export default App;
