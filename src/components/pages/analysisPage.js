import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Search from '../search';
import Card from '../card';
import Chart from '../chart';
import TweetDrawer from '../tweetDrawer';
import HeadlinesDrawer from '../headlinesDrawer';
import FlatButton from 'material-ui/FlatButton';
import {EMA} from 'technicalindicators';

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

	getEMA(values, days) {
		const ema = EMA.calculate({period: days, values: values});
		const sum = ema.reduce((a, b) => a + b);
		const avg = sum / ema.length;
		return avg;
	}

	renderStocks() {
		return this.state.stocks.map((stock, i) => {

			const values = stock.quote.map(q => parseFloat(q.Close));
			const ema26 = this.getEMA(values, 26);
			const ema12 = this.getEMA(values, 12);
			const ema9 = this.getEMA(values, 9)
			const macd = ema26 - ema12;
			const ppo = (ema9-ema26)/ema26;
			
			return (
				<Card key={i}>
					<div>
						Sentiment: {parseFloat(stock.data.sentiment).toFixed(3)} 
						&nbsp;
						MACD: {macd.toFixed(3)} 
						&nbsp;
						PPO: {ppo.toFixed(3)}
					</div>
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
						closeDrawers={() => this.setState({isHeadlinesVisible: false, isTweetVisible: false})}
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