import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import {Card, CardHeader, CardText} from 'material-ui/Card';

export default class TweetDrawer extends Component {

  constructor() {
    super();
    this.state = { isTweetsVisible: false };
  }

  renderTweets() {
    return this.props.tweets.map(tweet => {
      return (
        <Card>
          <CardHeader
            title={tweet.user_name}
            subtitle={tweet.date}
            avatar={tweet.pofile_img}
          />
          <CardText>{tweet.text}</CardText>
        </Card>
      );
    })
  }

  render() {
    return (
      <Drawer width={300} openSecondary open={this.state.isTweetsVisible} >
        <AppBar title="Live Tweets" />
        {this.renderTweets()}
      </Drawer>
    )
  }
}