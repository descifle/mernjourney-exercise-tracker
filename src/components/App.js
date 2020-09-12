import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./Navbar";
import ExerciseList from  './ExerciseList';
import CreateExercise from  './CreateExercise';
import EditExercise from  './EditExercise';
import CreateUser from  './CreateUser';

class App extends React.Component {

  render() {
    return (
      <Router>
         <Navbar />
         <br/>
         <Route path="/" exact component={ExerciseList} />
         <Route path="/edit/:id" component={EditExercise} />
         <Route path="/create" component={CreateExercise} />
         <Route path="/user" component={CreateUser} />
      </Router>
    )
  }
}

export default App;
