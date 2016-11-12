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
		this.state = { stocks: [], isTweetVisible: false };
	}

	// Triggered when the button is clicked to add a new
  // stock by the user. Concats to state stock array
  addStock(data) {
		console.log(data)
    this.setState({ stocks: this.state.stocks.concat(data) });
  }

	toggleTweetDrawer() {
		this.setState({isTweetVisible: !this.state.isTweetVisible})
	}

	renderStocks() {
		return this.state.stocks.map((stock, i) => {
			return (
				<Card key={i}>
					<Chart data={stock}/>
					<FlatButton onTouchTap={()=> this.toggleTweetDrawer()} label="Tweets" />
				</Card>
			);
		});
	}

	render() {
		return (
			<DocumentTitle title="Analysis">
				<div>
					<TweetDrawer 
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