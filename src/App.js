//https://www.robinwieruch.de/react-state-array-add-update-remove

import React, { Component } from 'react';
import './App.css';
import Item from './components/Item';

class App extends Component {
  constructor() {
    super();
    this.uid=0;
    this.state = {
      items: [
        {note:'note1', id:this.getanId()}, 
        {note:'note2', id:this.getanId()}, 
        {note:'note3', id:this.getanId()}
      ]
    }
  }

  getanId=()=>this.uid++;
  
  addItem = e => {
    e.preventDefault();
    let newId=this.getanId();
    this.setState(state => {
      const itemsCopy = [...state.items, {note:'---', id:newId}]; //copy of original state + new item
      return {items: itemsCopy};
    });
  };

  //use filter method
  //https://www.pluralsight.com/guides/removing-items-react
  //https://www.youtube.com/watch?v=tJYBMSuOX3s
  deleteItem = (id, e) => {
    const itemsCopy = [...this.state.items]; //copy of original array
    const index = this.state.items.findIndex((item) => {
      return item.id === id; 
    });
    itemsCopy.splice(index, 1); //at position index removes one item
    this.setState({items:itemsCopy})
    //const items = Object.assign([], this.state.items);
    //items.splice(index, 1);
    //this.setState({items:items})
  };

  updateItem = (id, e) => {
    const index = this.state.items.findIndex((item) => {
      return item.id === id; 
    });

    const newItemsArray = Object.assign([], this.state.items);
    newItemsArray[index].note = e.target.value;
    this.setState({items:newItemsArray});
  };

  clearItems = () => {
    this.setState({ items: [] });
  };
  
  render() {
    return (
      <div>
        <h1>Add | Delete | Update</h1>
        <button type="button" onClick={this.addItem}>+ Add Note</button>
        <button type="button" onClick={this.clearItems}>Clear Notes</button>
        <ul>
          {this.state.items.map((item, index) => {
            return(
            <Item
                deleteItem={this.deleteItem.bind(this, item.id)} //***lehet hogy nem is kell ez a bind es alabb sem
                updateItem={this.updateItem.bind(this, item.id)} 
                //key=should be a unique id, use: npm install react-html-id
                key={item.id}
            >{item.note}|{item.id}
            </Item>)
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;


/*import React, { Component } from 'react';
import './App.css';
import User from './components/user'

//code based on this video
//https://www.youtube.com/watch?v=tJYBMSuOX3s

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {id:'001', name:'Jon', age:30},
        {id:'002', name:'Tom', age:50},
        {id:'003', name:'Liz', age:27},
      ]
    };
    console.log(this.state)
  }

  deleteUser = (index, e) => {
    console.log(this.nextUniqueId())
    //Object.assign() https://www.youtube.com/watch?v=9Ky4X6inpi4
    //it takes the state and creates a duplicate array
    const users = Object.assign([], this.state.users); 
    //***can this be the alternative of the above code
    //const users = {...this.state.users} 
    users.splice(index, 1); //use splice to remove
    this.setState({users: users})
  }

  changeUserName = (id, e) => {
    if (e.target.value.length === 0) {
      return;
    }
    const index = this.state.users.findIndex((user)=> {
        return (user.id === id);
    })

    const user = Object.assign({}, this.state.users[index]);
    user.name = e.target.value;

    const users = Object.assign([], this.state.users);
    users[index] = user;

    this.setState({users:users});
  }


  render() {
    return (
      <div className="App">
        <ul>
          {
            this.state.users.map((user, index) => {
              return (
                <User 
                  age={user.age}
                  key={user.id}
                  //two way binding https://www.youtube.com/watch?v=BWl9bw_nbbs
                  //https://reactjs.org/docs/two-way-binding-helpers.html
                  //***how does this binding work
                  deleteUser={this.deleteUser.bind(this, index)} 
                  changeUserName={this.changeUserName.bind(this, user.id)}
                >{user.name}</User>
              )
            })
          }
        </ul>
      </div>
    );
  }

}

export default App;*/
