import React from "react";
import { Button } from "@material-ui/core";

function postData(url, data) {
  // Default options are marked with *
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  })
  .then(response => response.json()) // parses response to JSON
}

export default class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state={'name':null}
    console.log("Inside Books");
    console.log(props);
  }
  handleClick = (event) =>{
    fetch("http://localhost:3001/nice").then((res) =>  res.json()).then(data => {
      console.log(data)
      this.setState({'name':data.name})
      this.props.history.push('/about',{'detail':'passeddetail'})
    })
  }

  

  handlePost = (event) => {
    let dataToPost = "{'hello':'world'}"
    postData("http://localhost:3001/nice", dataToPost)

  }
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-3">My Books</h1>
        <Button
        variant="raised"
        color="primary"
        onClick={this.handleClick}
        >
          GET
        </Button>

        <Button
        variant="raised"
        color="primary"
        onClick={this.handlePost}
        >
          POST
        </Button>
        <h1>{this.props.match ? this.props.match.params.id : 'no id'}</h1>
        <h1>{this.state.name ? this.state.name : ''}</h1>
        
      </div>
    );
  }
}
