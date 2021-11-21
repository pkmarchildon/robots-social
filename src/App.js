import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchInput: ''
    };
  }
  // When the component is being loaded on the page the 1st time, execute this
  async componentDidMount() {
    const promise = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await promise.json();
    this.setState({ monsters: users });
  }

  render() {
    const { monsters, searchInput } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    return (
      <div className='App'>
        <h1>Robots Rolodex</h1>
        <SearchBox
          placeholder='search robots'
          handleChange={(e) => this.setState({ searchInput: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
