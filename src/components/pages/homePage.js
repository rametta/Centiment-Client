import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Chart from '../chart';
import Logo from '../logo';

export default class HomePage extends Component {
	render() {
		return (
			<DocumentTitle title="Home">
				<div className="container">
					<div className="row text-center">
						<h1>Do you want to make cents?</h1>
					</div> 
					<div className="row">
						<div className="col-md-4">
							<img className="img-responsive" src="https://coronadotimes.com/wp-content/uploads/2016/06/ascending-graph.png" height="250" />
							<p>Performance metrics tracking on  top news 
and social media content</p>
						</div>
						<div className="col-md-4">
							<img className="img-responsive" height="150" src="https://www.deepcoredata.com/wp-content/uploads/2016/06/small_1420.png" />
							<p>Sentiment Analysis of data using our robust machine learning algorithm</p>
						</div>
						<div className="col-md-4">
							<img className="img-responsive" src="http://bav0.com/wp-content/uploads/sites/11/2014/06/pie-chart.png" height="250"/>
							<p>Portfolio optimization and financial literacy to help any beginner investor make smarter choices</p>
						</div>
					</div>
					<div className="row">
						
					</div>
					<div className="row">
						
					</div>
				</div>
			</DocumentTitle>
		);
	}
}