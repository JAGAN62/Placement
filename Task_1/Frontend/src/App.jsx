import React from 'react'
import Register from './Components/Register'
import Profile from './Components/Profile'
import TodoList from './Components/TodoList'

const App = () => {

  return (
    <div style={{display:"flex"}}>
      <Profile />
      <Register />
      <TodoList />
    </div>
  )
}

export default App