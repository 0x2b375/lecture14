import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class StudentTableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.rollno}</td>
        <td>
          <Link to={"/edit-student/" + this.props.obj._id}>Edit</Link>
          <button onClick={this.deleteStudent}>Delete</button>
        </td>
      </tr>
    );
  }
}
