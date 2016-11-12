import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { indigo800 } from 'material-ui/styles/colors'; //#283593
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Link } from 'react-router';

// Material UI Components
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const muiTheme = getMuiTheme({
  palette: {
    textColor: indigo800,
  },
  appBar: {
    color: indigo800,
    height: 50,
  },
});

export default class Layout extends Component {

  constructor() {
    super();
    injectTapEventPlugin();
    this.state = {
      isDrawerVisible: false,
      menuItems: [
        {path: '/', title: 'Home'},
        {path: '/quiz', title: 'Quiz'},
        {path: '/analysis', title: 'Analysis'}
      ]
    }
  }

  toggleDrawer() {
    const { isDrawerVisible } = this.state;
    this.setState({ isDrawerVisible: !isDrawerVisible });
  }

  renderMenuItems() {
    return this.state.menuItems.map((item, i) => {
      return (
        <Link to={item.path} key={i} onTouchTap={() => this.toggleDrawer()}>
          <MenuItem>{item.title}</MenuItem>
        </Link>
      )
    });
  }

  render() {
    const { isDrawerVisible } = this.state;

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            title="YHacks 2016 - Client"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onTouchTap={() => this.toggleDrawer()}
          />
          <Drawer open={isDrawerVisible}>
            {this.renderMenuItems()}
          </Drawer>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}