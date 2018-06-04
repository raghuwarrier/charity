import React from "react";
import { Button } from "@material-ui/core";

export default class Books extends React.Component {
  constructor(props) {
    super(props);
    console.log("Inside Books");
    console.log(props);
  }
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-3">My Books</h1>
        <Button
        variant="raised"
        color="primary"
          onClick={() => {
              console.log('pushing state to about')
            this.props.history.push({
              pathname: "/about/id",
              state: { detail: "first try" }
            });
          }}
        >
          Nice one
        </Button>
        <h1>{this.props.match ? this.props.match.params.id : 'no id'}</h1>
      </div>
    );
  }
}
