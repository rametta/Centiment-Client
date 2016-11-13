import React, { Component } from 'react';
import Axios from 'axios';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';

const KEY = '2896f6af-66ca-47ec-a227-7285843956b8';
const BASE = `https://content.guardianapis.com/search?api-key=${KEY}&q=`;

export default class HeadlinesDrawer extends Component {

  constructor() {
    super();
    this.state = { loading: true, headlines: [], resolved: false };
  }

  fetchHeadlines() {
    if(!this.props.symbol || this.state.resolved) return;
    const url = `${BASE}${this.props.symbol}`;
    Axios.get(url)
      .then(res => this.setState({headlines: res.data.response.results, loading: false, resolved: true}))
      .catch(err => console.log(err))
  }

  renderHeadlines() {
    console.log(this.state.headlines);
    return this.state.headlines.map((result, i) => {
      let date = new Date(result.webPublicationDate);
      date = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
      return (
        <Card key={i}>
          <CardHeader
            title={result.sectionName}
            subtitle={date}
          />
          <CardText><a target="_blank" href={result.webUrl}>{result.webTitle}</a></CardText>
        </Card>
      );
    });

  }

  loader() {
    return (
      <CircularProgress color="#283593" style={{marginTop: 15}}/>
    )
  }

  render() {
    this.fetchHeadlines();
    return (
      <Drawer width={300} openSecondary open={this.props.isHeadlinesVisible} >
        <AppBar title="Live Headlines" onTouchTap={() => this.props.closeDrawers()} />
        {this.state.loading ? this.loader() : this.renderHeadlines()}
      </Drawer>
    )
  }
}