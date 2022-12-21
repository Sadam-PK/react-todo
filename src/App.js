import './App.css';
import Header from './MyComponents/Header';
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import Todo from './MyComponents/Todo';

function App() {
  let todos = [
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
  ]

  return (
    <>
      <Header title='Todos List' />
      <Todos todos = {todos}/>
      <Footer />
    </>
  );
}

export default App;
