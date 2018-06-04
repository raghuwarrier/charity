import React from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { CardHeader } from "@material-ui/core";
import {theme} from './App';
const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  },
  subheader: {
    width: "100%"
  }
});

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: "defaultvalue"
    };
  }
  render() {
    return (
      <div className={styles.root}>
        <GridList cellHeight={160} className={styles.gridList} cols={3}>
          <GridListTile key={"something"} cols={1} style={{height:'100px;'}}>
            <Card raised={true}>
            <CardHeader style={{backgroundColor:theme.palette.secondary.main}} title="Nice title"></CardHeader>
              <CardContent>
                <Typography color="textSecondary">
                  Word of the Day
                  {this.props.history.location.state
                    ? this.props.history.location.state.detail
                    : this.state.detail}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </GridListTile>
          <GridListTile key={"something"} cols={1} style={{height:'100px;'}}>
            <Card raised={true}>
              <CardContent>
                <Typography color="textSecondary">
                  Word of the Day
                  {this.props.history.location.state
                    ? this.props.history.location.state.detail
                    : this.state.detail}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </GridListTile>
          <GridListTile key={"something"} cols={1} style={{height:'100px;'}}>
            <Card raised={true}>
              <CardContent>
                <Typography color="textSecondary">
                  Word of the Day
                  {this.props.history.location.state
                    ? this.props.history.location.state.detail
                    : this.state.detail}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </GridListTile>
          <GridListTile key={"something"} cols={1}>
            <Card raised={true}>
              <CardContent>
                <Typography color="textSecondary">
                  Word of the Day
                  {this.props.history.location.state
                    ? this.props.history.location.state.detail
                    : this.state.detail}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </GridListTile>
          <GridListTile key={"something"} cols={2}>
            <Card raised={true}>
              <CardContent>
                <Typography color="textSecondary">
                  Word of the Day
                  {this.props.history.location.state
                    ? this.props.history.location.state.detail
                    : this.state.detail}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </GridListTile>
        </GridList>
      </div>
    );
  }
}
