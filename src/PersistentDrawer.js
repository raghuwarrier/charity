import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { otherMailFolderListItems } from "./tileData";
import ListItems from "./ListItems";
import { render } from "react-dom";
import Home from "./HomeComponent";
import Hello from "./HelloComponent";
import About from "./AboutComponent";
import Books from "./BooksComponent";
import history from "./currenthistory";
import Avatar from "@material-ui/core/Avatar";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import "./App.css";
import { withRouter } from "react-router";

const drawerWidth = 240;
var intvalue = 1;
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  appFrame: {
    height: 500,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%"
  },
  appBar: {
    position: "absolute",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  "appBarShift-left": {
    marginLeft: drawerWidth
  },
  "appBarShift-right": {
    marginRight: drawerWidth
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  "content-left": {
    marginLeft: -drawerWidth
  },
  "content-right": {
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  "contentShift-left": {
    marginLeft: 0
  },
  "contentShift-right": {
    marginRight: 0
  },
  row: {
    display: "flex",
    justifyContent: "right",
    alignContent: "right"
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 60,
    height: 60
  }
});

class PersistentDrawer extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    console.log("God is great");
    this.state = {
      open: false,
      anchor: "left",
      forceRender: intvalue,
      url: ""
    };
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChangeAnchor = event => {
    this.setState({
      anchor: event.target.value
    });
  };

  handleClick = event => {
    intvalue = intvalue + 1;
    console.log("inside handleclick");
    console.log(this.context);

    //console.log("redirecting")

    this.setState({ forceRender: intvalue, url: "/books" });
    console.log(history);
    history.push("/books");
  };
  render() {
    console.log("render called");
    const { classes, theme } = this.props;
    const { anchor, open } = this.state;

    const drawer = (
      <Drawer
        variant="persistent"
        anchor={anchor}
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div
          className={classes.drawerHeader}
          style={{ backgroundColor: '#ffb74d' }}
        >
          <IconButton onClick={this.handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <ListItems {...this.props} />
        <Divider />
      </Drawer>
    );

    let before = null;
    let after = null;

    if (anchor === "left") {
      before = drawer;
    } else {
      after = drawer;
    }
    return (
      <Router>
        <div className={classes.root} style={{ height: "900px" }}>
          <div className={classes.appFrame} style={{ height: "900px" }}>
            <AppBar
              style={{ backgroundColor: theme.palette.primary.light }}
              className={classNames(classes.appBar, {
                [classes.appBarShift]: open,
                [classes[`appBarShift-${anchor}`]]: open
              })}
            >
              <Toolbar disableGutters={!open}>
                <div
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems:'center',
                    display: "flex",
                    width: "100%"
                  }}
                >
                <div
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems:'center',
                    display: "flex",
                    width: "100%"
                  }}
                >
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={this.handleDrawerOpen}
                    className={classNames(
                      classes.menuButton,
                      open && classes.hide
                    )}
                  >
                    <MenuIcon />
                  </IconButton>
                  <img src="/give-trust-logo.jpg" className="Avatar" />
                  <div style={{ margin: "15px;" }}>&#160;</div>
                  <Typography variant="title" color="inherit" noWrap>
                    Give & Trust
                  </Typography>
                  </div>
                  <div
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems:'center',
                    justifyContent:'flex-end',
                    display: "flex",
                    width: "100%"
                  }}
                >
                <div style={{marginRight:'10px'}}>
                <Button title="Login" variant="raised" color="secondary" style={{marginRight:'10px;'}}>Login</Button>
                </div>
                </div>
                </div>
              </Toolbar>
            </AppBar>
            {before}

            <main
              style={{
                backgroundSize: "cover",
                backgroundImage: "url('/give-trust-sun.jpg')",
                height: "900px"
              }}
              className={classNames(
                classes.content,
                classes[`content-${anchor}`],
                {
                  [classes.contentShift]: open,
                  [classes[`contentShift-${anchor}`]]: open
                }
              )}
            >
              <div className={classes.drawerHeader} />

              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/hello" component={Hello} />
              <Route path="/books/:id" component={Books} />
              <Route path="/books/" component={Books} />
            </main>

            {after}
          </div>
        </div>
      </Router>
    );
  }
}

PersistentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(
  withStyles(styles, { withTheme: true })(PersistentDrawer)
);
