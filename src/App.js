import './App.css';
import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App() {
  const [books, setBooks] = useState([])

  const createBook = (tittle) =>{
    console.log('add book called', tittle)
  }
  

  return (
    <div >
      <BookCreate onCreate={createBook}/>
    </div>
  );
}

export default App;
