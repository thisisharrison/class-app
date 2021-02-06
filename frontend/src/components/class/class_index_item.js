import { Link } from "react-router-dom";
import React, { Component } from 'react'
import SaveContainer from "../toggles/save_container";

export default class ClassIndexItem extends Component {

  render() {
    return (
      <div>
        <p>
          <Link to={`/classes/${this.props._class._id}`} >
            {this.props._class.name}
          </Link>
        </p>
        <SaveContainer 
          classId={this.props._class._id}
          saved={this.props.userSaves.includes(this.props._class._id)}
          />
      </div>
    )
  }
}



