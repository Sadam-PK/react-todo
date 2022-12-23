import './App.css';
import Header from './MyComponents/Header';
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import AddTodo from "./MyComponents/AddTodo";
import React, { useState } from 'react';

function App() {
  function onDelete(todo) {
    console.log('Hey bro, i am ondelete', todo)

    setTodos(todos.filter((e) => {
      return e !== todo
    }));
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: 'Go market',
      desc: 'You should goto market to pick up vegis'
    }, {
      sno: 2,
      title: 'Play table tennis',
      desc: 'You should play table tennis'
    }, {
      sno: 3,
      title: 'Read book',
      desc: 'You should read "Atomic habits"'
    }
  ]);
  return (
    <>
      <Header title='Todos List' />
      <AddTodo/>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
