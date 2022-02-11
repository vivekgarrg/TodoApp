// import './todo.css';
import React, { Component } from 'react';
import '../todo.css'


export default class Todo extends Component {
    constructor(){
        super();
        this.state = {
            tasks: [{
                task: "Homework",
                id: 1
            },
            {
                task: "class work",
                id: 2
            }
        ],
        currTask : ""

        }
    }
    changeInput = (e) =>{
    this.setState({
        currTask : e.target.value
    })
    }

    taskSubmit = () =>{
        
            this.setState({
            tasks : [...this.state.tasks,{task : this.state.currTask, id: this.state.tasks.length+1}],
            currTask : ""
        }) 

    }
    taskDelete = (id)=>{
        let narr = this.state.tasks.filter((taskObj)=>{
            return taskObj.id != id;
        })
        this.setState({
            tasks : [...narr]
        })

    }
  render() {

    return (
      <div className='Todo'>
          <h1 className='heading'>Todo App</h1>
          
          <div className='input-area'>
              <h4>Add Task</h4>
          <input onChange={this.changeInput} value={this.state.currTask} type="text"/><br></br>
          <button onClick={this.taskSubmit}>Add Task</button>
        </div>
         <div> {this.state.tasks.map((tasksObj)=>(

               <div className='task' key={tasksObj.id}>
               <p>{tasksObj.task}</p>
               <button onClick={() => this.taskDelete(tasksObj.id)}>Delete</button>
               </div>
          ))}
          </div>
        
      </div>
    )
  }
}
