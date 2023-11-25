import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateStudent from "./components/create-student.component";
import EditStudent from "./components/edit-student.component";
import StudentList from "./components/student-list.component";
function App() {
  return (
    <Router>
      <div>
        <Link to={"/create-student"}>Create Student</Link>
      </div>
      <div>
        <Link to={"/student-list"}>Student List</Link>
      </div>
      <Switch>
        <Route
          exact
          path="/"
          component={(props) => <CreateStudent {...props} />}
        />
        <Route
          exact
          path="/create-student"
          component={(props) => <CreateStudent {...props} />}
        />
        <Route
          exact
          path="/edit-student/:id"
          component={(props) => <EditStudent {...props} />}
        />
        <Route
          exact
          path="/student-list"
          component={(props) => <StudentList {...props} />}
        />
      </Switch>
    </Router>
  );
}
export default App;
