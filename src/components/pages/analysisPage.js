import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Search from '../search';
import Card from '../card';
import Chart from '../chart';
import TweetDrawer from '../tweetDrawer';
import FlatButton from 'material-ui/FlatButton';

export default class AnalysisPage extends Component {

	constructor() {
		super();
		this.state = { stocks: [], isTweetVisible: false, selectedTweets: -1 };
	}

	// Triggered when the button is clicked to add a new
  // stock by the user. Concats to state stock array
  addStock(data) {
    this.setState({ stocks: this.state.stocks.concat(data) });
  }

	toggleTweetDrawer(i) {
		this.setState({isTweetVisible: !this.state.isTweetVisible, selectedTweets: i})
	}

	renderStocks() {
		return this.state.stocks.map((stock, i) => {
			return (
				<Card key={i}>
					<Chart data={stock}/>
					<FlatButton onTouchTap={()=> this.toggleTweetDrawer(i)} label="Tweets" />
				</Card>
			);
		});
	}

	render() {
		return (
			<DocumentTitle title="Analysis">
				<div>
					<TweetDrawer 
						tweets={this.state.stocks[this.state.selectedTweets]}
						isTweetVisible={this.state.isTweetVisible} 
						toggleTweetDrawer={() => this.toggleTweetDrawer()}
					/>
					<Search addStock={ticker => this.addStock(ticker)}/>
					{this.renderStocks()}
				</div>
			</DocumentTitle>
		);
	}
}