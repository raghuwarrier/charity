import React from "react";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardHeader } from "@material-ui/core";
import { theme } from "./App";

import List from "@material-ui/core/List";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import HouseIcon from "@material-ui/icons/Home";

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

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { detail: "" };
  }
  render() {
    return (
        <div style={{marginBottom:'50px;'}}>
      <GridList cellHeight={160} className={styles.gridList} cols={3} style={{marginBottom:'50px;'}}>
        <GridListTile
          cols={3}
          style={{ minHeight: "50px;", marginBottom: "20px;" }}
        >
          <Card>
            <CardContent
              style={{
                flex: 1,
                justifyContent: "center",
                alignContent: "center",
                backgroundColor: "#e0e0e0"
              }}
            >
              <div
                style={{
                  fontSize: "50px",
                  fontFamily: "Roboto Condensed",
                  textAlign: "center",
                  padding: "0px;"
                }}
              >
                {" "}
                THE GIVING THAT WE CAN TRUST
              </div>
            </CardContent>
          </Card>
        </GridListTile>
        <GridListTile key={"something"} cols={1} style={{ height: "100px;" }}>
          <Card raised={true}>
            <CardHeader
              style={{ backgroundColor: theme.palette.secondary.main, borderTopLeftRadius:'20px;' }}
              title="Result Based Engagement"
            >
            </CardHeader>
            <CardContent>
              <Typography color="textSecondary">Word of the Day</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </GridListTile>
        <GridListTile key={"something"} cols={1} style={{ height: "100px;" }}>
          <Card raised={true}>
          <CardHeader
              style={{ backgroundColor: theme.palette.secondary.main }}
              title="Transparency"
            />
            <CardContent>
              <Typography color="textSecondary">
                Word of the Day
               
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </GridListTile>
        <GridListTile key={"something"} cols={1} style={{ height: "100px;" }}>
          <Card raised={true}>
          <CardHeader
              style={{ backgroundColor: theme.palette.secondary.main }}
              title="Frictionless Giving"
            />
            <CardContent>
              <Typography color="textSecondary">
                Word of the Day
                
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
