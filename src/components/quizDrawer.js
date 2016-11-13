import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import {Card, CardHeader, CardText} from 'material-ui/Card';

export default class QuizDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      activeIndex: 12
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.props.questionNumber !== nextProps.questionNumber) {
      this.setState({activeIndex: this.state.activeIndex - 1});
    }
  }

  openForDuration(delay) {
    this.setState({ open: true}, () => {
      setTimeout(() => {
        console.log('setting open to : ', false);
        this.setState({ open: false });
      }, delay);
    });
  }

  renderScore() {
    return [100, 200, 500, 1000, 2000, 4000, 16000, 32000, 64000, 125000, 250000, 500000, 1000000]
      .reverse()
      .map((dollars, index) => {
        return (
          <div
            className={this.state.activeIndex == index ? 'active-money drawer-money-text' : 'drawer-money-text'}
            key={index}>
            <div>{dollars}</div>
          </div>
        );
      });
  }

  render() {
    const { open } = this.props;

    return (
      <Drawer width={300} openSecondary open={open}>
        <AppBar title="" />
        {this.renderScore()}
      </Drawer>
    )
  }
}
