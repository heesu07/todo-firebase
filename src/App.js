import './App.css';
import React, { useEffect, useState } from 'react';
import TaskAdd from './TaskAdd';
import List from './List';
import { db } from './firebase';
import { collection, getDocs, addDoc, deleteDoc, doc, setDoc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import Login from './Login';



const App = (props) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [items, setItems] = useState([]);
  const [inputvalue, setInputValue] = useState('');
  const [loaded, setLoaded] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }
  const handleLogin = () => {
    clearErrors();
    console.log("try login");
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        setUser(userCredential.user);
        setDoc(db, userCredential.user.email);
        console.log(userCredential.user.email);
      })
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
          default:
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    console.log("try sign up");
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        setUser(userCredential.user);
        setDoc(db, userCredential.user.email);
        console.log(userCredential.user.email);
      })
      .catch(err => {
        switch (err.code) {
          case "auth/email-alread-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
          default:
            break;
        }
      });
  };

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth);
    setUser("");
    setItems([]);
  }

  const authLiistener = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authLiistener();
  }, []);

  const getAllData = async () => {
    console.log(user.email);
    if (user === "") {
      return;
    }
    const items = [];
    await getDocs(collection(db, user.email))
      .then(docs => {
        console.log(docs);
        docs.forEach(doc => {
          items.push({ id: doc.id, todo: doc.data().todo });
        });
        setItems(items);
        setLoaded(true);
        console.log(`getAllData success!!`);
        console.log(items);
      })
  }

  const deleteData = async (id) => {
    await deleteDoc(doc(db, user.email, id));
  }

  const addData = async (todo) => {
    try {
      const docRef = await addDoc(collection(db, user.email), { todo: todo })
        .then((docRef) => {
          const newItems = [...items, { id: docRef.id, todo: inputvalue }];
          setItems(newItems);
          setInputValue('');
          console.log(`Document written with (${docRef.id} : ${inputvalue})`);
        });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const getData = async () => {
    await getDocs(collection(db, user.email))
      .then(docs => {
        console.log(`getData success`);
      })
  }
  useEffect(() => {
    getAllData();
    console.log("Data loaded -useEffect");
  }, [user])

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  }

  const onClickHandler = (e) => {
    e.preventDefault();
    addData(inputvalue);
  };

  const deleteHandler = (id) => {
    deleteData(id)
      .then(() => {
        const newItems = items.filter((item) => {
          return item.id !== id;
        });
        setItems(newItems);
        console.log(`delete id:${id}!!`);
      });
  }

  return (
    <div className="container" >
      {!user ? (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
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
              onChangeHandler={onChangeHandler}
              onClickHandler={onClickHandler}
            />

            <List
              items={items}
              deleteHandler={deleteHandler}
            />
          </section>
        </div>
      )}


    </div>
  );
}


export default App;
