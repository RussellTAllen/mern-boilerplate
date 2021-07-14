import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getData()
  }, [])

  async function getData(){
    await fetch('/api/todos')
    .then(response => { return response.json() })
    .then(data => {
      let items = data
      console.log(items)
      setTodos(items.todos[0].item)
    })
    .catch(err => {
      console.error('Error fetching data: '+err)
    })
  }

  return (
    <div className="App">
      <h1>Hello world</h1>
      <p>{todos}</p>
    </div>
  );
}

export default App;
