import React,{useEffect, useState} from 'react';
import './App.css';
import Todo from './component/Todo';
import db from './firebase';
import firebase from 'firebase';



function App() {
  const [todos, settodos] = useState([]);
  const [input, setinput] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
     settodos(snapshot.docs.map(doc=>({id: doc.id, todo: doc.data().todo}))) 
      
    })
 

   
  }, []);




  const addTodo=(e)=>
  {
    e.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })


    //settodos([...todos,input]);
    setinput('');

  }

  return (
    <div className="App">
      <h1>Add Todo</h1>
      <input value={input} onChange={event=>setinput(event.target.value)}/>
      <button disabled={!input} onClick={addTodo} type='submit'>Add todo</button>

      <ul>
        {todos.map(todo=>(
          <Todo todo={todo}/>
         // <li>{todo}</li>
        ))}
       
      </ul>
      
    </div> 
  );
} 

export default App;
