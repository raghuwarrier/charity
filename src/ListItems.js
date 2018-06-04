import React from "react";
import List from "@material-ui/core/List";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import {theme} from './App'
import {Link} from 'react-router-dom';
import { Divider } from "@material-ui/core";

export default class ListItems extends React.Component {
  constructor(props) {
    super(props);
    console.log("ListItems props");
    console.log(props);
  }
  render() {
    return (
      <List>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon style={{color:theme.palette.primary.main}}/>
          </ListItemIcon>
          <ListItemText>
          <Link to='/books' style={{ textDecoration: 'none', color:theme.palette.secondary.dark }}>NGOs</Link>
          </ListItemText>
          
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StarIcon style={{color:theme.palette.primary.main}}/>
          </ListItemIcon>
          <ListItemText>
          <Link to="/about" style={{ textDecoration: 'none', color:theme.palette.secondary.dark }}>Projects</Link>
          </ListItemText>

        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SupervisorAccountIcon style={{color:theme.palette.primary.main}}/>
          </ListItemIcon>
          <ListItemText primary="About Us" />
        </ListItem>
        <Divider/>
        <ListItem button>
          <ListItemIcon>
            <MailIcon style={{color:theme.palette.primary.main}}/>
          </ListItemIcon>
          <ListItemText primary="Contact Us" />
        </ListItem>
      </List>
    );
  }
}
