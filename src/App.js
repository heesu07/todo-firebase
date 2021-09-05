import './App.css';
import React, { useEffect, useState } from 'react';
import firebase from './firebase';
import TaskAdd from './TaskAdd';
import List from './List';
import Login from './Login';

let ref = null; // firestore snapshot

const App = () => {
  const [user, setUser] = useState("");
  const [items, setItems] = useState([]);
  const [inputvalue, setInputValue] = useState('');


  if (user) {
    ref = firebase.firestore().collection(user.email)
  }

  // Get
  const getTodos = async () => {
    if (user === "") {
      console.log(`user: ${user.email} ref: ${ref}`);
      return;
    }
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, todo: doc.data().todo });
      });
      setItems(items);
    });
  };

  // Delete
  const deleteTodo = (item) => {
    console.log(`deleteTodo: ${item.id}`);
    ref
      .doc(item.id)
      .delete()
      .catch((err) => {
        console.log(err);
      });
  };

  // Add
  const addTodo = (todo) => {
    console.log(`addTodo: ${ref}`);
    ref
      .add({ todo: todo })
      .then(doc => {
        item.push({ id: doc.id, todo: todo });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Update
  const updateTodo = (todo) => {
    console.log(`updateTodo: ${todo}`);
    ref.doc(todo.id)
      .update(todo)
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTodos();
  }, [user]);

  const handleLogout = () => {
    firebase.auth().signOut();
    setUser("");
    setItems([]);
    ref = null;
    console.log("User signout");
  };

  return (
    <div className="container" >
      {!user ? (
        <Login
          user={user}
          setUser={setUser}
        />
      ) : (
        <div>
          <section className="hero">
            <nav>
              <h2> Welcome </h2>
              <div>
                <h4> {user.email} </h4>
                <button onClick={handleLogout}>Logout</button>
              </div>
            </nav>
            <TaskAdd
              inputvalue={inputvalue}
              setInputValue={setInputValue}
              onChangeHandler={(e) => setInputValue(e.target.value)}
              onClickHandler={() => addTodo(inputvalue)}
            />
            <List
              items={items}
              deleteTodo={deleteTodo}
            />
          </section>
        </div>
      )}
    </div>
  );
}


export default App;
