import React from 'react'
import { Todoitem } from './Todoitem'

export const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='my-3'>Todos list</h3>
      {props.todos.length === 0
        ? 'No Todos to display'
        : props.todos.map((todo) => {
            return (
              <>
                <Todoitem
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.onDelete}
                />
              </>
            )
          })}
    </div>
  )
}
