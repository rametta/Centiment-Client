import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Search from '../search';
import Card from '../card';
import Chart from '../chart';
import TweetDrawer from '../tweetDrawer';
import HeadlinesDrawer from '../headlinesDrawer';
import FlatButton from 'material-ui/FlatButton';

export default class AnalysisPage extends Component {

	constructor() {
		super();
		this.state = { 
			stocks: [], selectedSymbol: '',
			isTweetVisible: false, isHeadlinesVisible: false,
			selectedTweets: -1 , selectedHeadlines: -1
		};
	}

	// Triggered when the button is clicked to add a new
  // stock by the user. Concats to state stock array
  addStock(data) {
    this.setState({ stocks: this.state.stocks.concat(data) });
  }

	toggleTweetDrawer(i) {
		this.setState({isTweetVisible: !this.state.isTweetVisible, selectedTweets: i})
	}

	toggleHeadlinesDrawer(stock) {
		this.setState({isHeadlinesVisible: !this.state.isHeadlinesVisible, selectedSymbol: stock.quote[0].Symbol});
	}

	renderStocks() {
		return this.state.stocks.map((stock, i) => {
			return (
				<Card key={i}>
					<Chart data={stock}/>
					<FlatButton onTouchTap={()=> this.toggleTweetDrawer(i)} label="Tweets" />
					<FlatButton onTouchTap={()=> this.toggleHeadlinesDrawer(stock)} label="Headlines" />
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
					<HeadlinesDrawer 
						symbol={this.state.selectedSymbol}
						isHeadlinesVisible={this.state.isHeadlinesVisible} 
						toggleHeadlinesDrawer={() => this.toggleHeadlinesDrawer()}
					/>
					<Search addStock={ticker => this.addStock(ticker)}/>
					{this.renderStocks()}
				</div>
			</DocumentTitle>
		);
	}
}