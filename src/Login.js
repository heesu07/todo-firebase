import React, { useEffect, useState } from 'react';
import firebase from './firebase';

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const { user, setUser } = props;

  
  const handleLogin = () => {
    clearErrors();
    console.log("try login");
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        setUser(userCredential.user);
        console.log(`Login :${userCredential.user.email}`);
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
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        setUser(userCredential.user);
        console.log(console.log(`Login :${userCredential.user.email}`));
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

  const authListener = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {        
        setUser(user);
        console.log('authListener');
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, [user]);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };
  
  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  };

  return (
    <section className='login'>
      <div className="loginContainer">
        <label > Username </label>
        <input type="text" autoFocus required value={email} onChange={e => setEmail(e.target.value)} />
        <p className="errorMsg"> {emailError} </p>
        <label >Password</label>
        <input type="password" required value={password} onChange={e => setPassword(e.target.value)} />
        <p className="errorMsg"> {passwordError} </p>
        <div className="btnContainer">
          {!hasAccount ? (
            <>
              <button className="loginButton" onClick={handleLogin}>Sign in</button>
              <p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
            </>
          ) : (
            <>
              <button className="loginButton" onClick={handleSignup}>Sign up</button>
              <p>Have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
            </>
          )}
        </div>
      </div>

    </section >
  )
}

export default Login;