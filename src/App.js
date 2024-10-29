import React from 'react';
import logo from "./todoLogo.png"
import './App.css';


class App extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
       newItem: "",
       list : []
     }
  }

  addItem(todoValue){
    if(todoValue !== ""){
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone : false
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem: ""
      });
    }
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id !== id)
    this.setState({
    list : updatedlist
    })
  }

  updateInput(input){
    this.setState({newItem : input})
  }


  render(){
    return(
     <div>
       <div className="header">
        <img src={logo} width="80" height="80" className="logo"/>
        <h1 className="app-title">TODO APP</h1>
       </div>
       <div className="container">
         <h4 className="main-text">ADD AN EVENT</h4>
         {/* <br/> */}
         <div className="todoContainer">
            <input type="text" className="input-text" placeholder="Write a todo"
            required
            value={this.state.newItem}
            onChange={e => this.updateInput(e.target.value)}
            >
            </input>
         <button
          className="add-btn"
          onClick={() => this.addItem(this.state.newItem)}
          disabled={!this.state.newItem.length}
          >Add Todo</button>
         </div>
         <div className="list">
           <ul>
             {this.state.list.map(item => {
               return(
                 <li key={item.id}>
                   <input
                   type="checkbox"
                   name="idDone"
                   checked={item.isdone}
                   onChange={() => {}}
                   />
                   {item.value}
                   <button
                   className="btn"
                   onClick={() => this.deleteItem(item.id)}
                   >Delete</button>
                 </li>
               )
             })}
           </ul>
         </div>
       </div>
     </div>
      )
    }
  }
  
  
export default App;