import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import {Card, CardHeader, CardText} from 'material-ui/Card';

export default class TweetDrawer extends Component {

  renderTweets() {
    if(this.props.tweets == null) return;
    return this.props.tweets.data.tweets.map((tweet,i) => {
      let date = new Date(tweet.date);
      date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
      return (
        <Card key={i}>
          <CardHeader
            title={tweet.user_name}
            subtitle={date}
            avatar={tweet.profile_img}
          />
          <CardText>{tweet.text}</CardText>
        </Card>
      );
    })
  }

  render() {
    return (
      <Drawer width={300} openSecondary open={this.props.isTweetVisible} >
        <AppBar title="Live Tweets" onTouchTap={() => this.props.toggleTweetDrawer()} />
        {this.renderTweets()}
      </Drawer>
    )
  }
}