import './App.css';
import Header from './MyComponents/Header';
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import Todo from './MyComponents/Todo';

function App() {
  return (
    <>
      <Header title = 'Todos List' />
      <Todos />
      <Footer />
    </>
  );
}

export default App;
