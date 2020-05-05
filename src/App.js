import React, { useState, useEffect } from "react";
import "./App.css";
import { UsersList } from "./components";
import { UserForm } from "./components/UserForm";
import firebase from "firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

var firebaseConfig = {
  apiKey: "AIzaSyBXbesI1r-UfCV_zyNFNcnzA9vWskO6Gmc",
  authDomain: "users-demo-359cf.firebaseapp.com",
  databaseURL: "https://users-demo-359cf.firebaseio.com",
  projectId: "users-demo-359cf",
  storageBucket: "users-demo-359cf.appspot.com",
  messagingSenderId: "510057359221",
  appId: "1:510057359221:web:e30d4032dce6c831b1553c",
};
// Initialize Firebase

function App() {
  const [db, setDb] = useState();

  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
    const d = firebase.firestore();
    setDb(d);
  }, []);

  if (!db) {
    return <p>Carregando</p>;
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/add">
          <UserForm db={db} />
        </Route>
        <Route exact path="">
          <UsersList db={db} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
