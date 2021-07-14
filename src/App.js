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
    .then(response => {
      let data = response.json()
      console.log(data)
      setTodos()
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
