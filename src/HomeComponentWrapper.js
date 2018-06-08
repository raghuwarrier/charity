import React from "react";
import { Component } from "react";
import HomeComponent from "./HomeComponent";
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

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Causes from './CausesCard';
import CausesSudan from './CausesCardSudan';
export default class HomeComponentWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ flex: 1, width: "100%", display: "block" }}>
        <HomeComponent />
        <div style={{ marginTop: "60px;", height: "60px;" }}>&#160;</div>
        <div style={{ marginTop: "60px;", height: "60px;" }}>&#160;</div>
        <div style={{ marginTop: "60px;", height: "60px;" }}>&#160;</div>
        <Divider/>
        <div style={{ marginTop: "60px;", height: "60px;" }}>&#160;</div>
        <div style={{ marginTop: "60px;", height: "60px;" }}>&#160;</div>

        <div
          style={{
            width: "100%",
            flex: 1,
            display: "flex",
            flexDirection: "row",
            borderWidth: "1px;",
          }}
        >
          <div style={{ width: "33.33%" }}>
            <Causes/>
          </div>
          <div style={{ width: "33.33%" }}>
            <CausesSudan/>
          </div>
          <div style={{ width: "33.33%" }}>
            <Causes/>
          </div>

        </div>
      </div>
    );
  }
}
