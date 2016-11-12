import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Search from '../search';
import Card from '../card';
import Chart from '../chart';

export default class AnalysisPage extends Component {

	constructor() {
		super();
		this.state = { stocks: [] };
	}

	// Triggered when the button is clicked to add a new
  // stock by the user. Concats to state stock array
  addStock(data) {
    this.setState({ stocks: this.state.stocks.concat(data) });
  }

	renderStocks() {
		return this.state.stocks.map((stock, i) => {
			return <Card key={i}><Chart data={stock} /></Card>;
		});
	}

	render() {
		return (
			<DocumentTitle title="Analysis">
				<div>
					<Search addStock={ticker => this.addStock(ticker)}/>
					{this.renderStocks()}
				</div>
			</DocumentTitle>
		);
	}
}