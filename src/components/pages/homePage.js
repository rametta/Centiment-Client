import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Chart from '../chart';
import Logo from '../logo';
import { Jumbotron } from 'react-bootstrap';

export default class HomePage extends Component {
	render() {
		return (
			<DocumentTitle title="Home">
				<div>
					<Jumbotron style={{'paddingLeft': '30px', 'paddingRight':'30px'}}>
						<h1>Do you want to make cents?</h1>
						<div style={{marginTop: '3em'}}className="row">
							<div className="col-md-4">
								<img className="img-responsive jumbotron-image" src="https://coronadotimes.com/wp-content/uploads/2016/06/ascending-graph.png"  />
								<p>Performance metrics tracking on  top news and social media content</p>
							</div>
							<div className="col-md-4">
								<img className="img-responsive jumbotron-image"  src="https://www.deepcoredata.com/wp-content/uploads/2016/06/small_1420.png"  />
								<p>Sentiment Analysis of data using our robust machine learning algorithm</p>
							</div>
							<div className="col-md-4">
								<img className="img-responsive jumbotron-image" src="http://bav0.com/wp-content/uploads/sites/11/2014/06/pie-chart.png" />
								<p>Portfolio optimization and financial literacy to help any beginner investor make smarter choices</p>
							</div>
						</div>
					</Jumbotron>
				</div>
			</DocumentTitle>
		);
	}
}