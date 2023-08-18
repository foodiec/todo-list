import React from 'react'
import {Todoitem} from '../mycomponents/Todoitem';

export const Todos = (props) => {
    let mystyle = {
        minHeight : "70vh",
        margin: "40px auto"
    }
  return (
    <div className='container my-3' style={mystyle}>
      <h3 className='text-center my-3'>Todo list</h3>
      {
        props.todos.length===0? "no todos to display": 
      
        props.todos.map((todo) => {
            return (
                <>       
            <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            <hr />
            </>)
        })
        }




    {/* <Todoitem todo={props.todos[2]} /> */}

    </div>
  )
}

// export default Todos
