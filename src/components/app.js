import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Material UI Components
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class App extends Component {

  constructor() {
    super();
    injectTapEventPlugin();
    this.state = {
      isDrawerVisible: false
    }
  }

  render() {
    const { isDrawerVisible } = this.state;
    
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="YHacks 2016 - Client"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onTouchTap={() => this.setState({ isDrawerVisible: !isDrawerVisible })}
          />
          <Drawer open={isDrawerVisible}>
            <MenuItem>Menu Item</MenuItem>
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}