import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState(null)

  useEffect(() => {
    getData()
  }, [])

  async function getData(){
    await fetch('/api/todos')
    .then(response => {
      setTodos(response)
      console.log(response)
    })
    .catch(err => {
      console.error('Error fetching data: '+err)
    })
  }

  return (
    <div className="App">
      <h1>Hello world</h1>
      {}
    </div>
  );
}

export default App;
