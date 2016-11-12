import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Line } from 'react-chartjs-2';
import Paper from 'material-ui/Paper';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#81a9ea',
      borderColor: '#283593',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#4185f2',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#4185f2',
      pointHoverBorderColor: '#283593',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

export default class HomePage extends Component {
	render() {
		return (
			<DocumentTitle title="Home">
				<div>
					<Line data={data} />
				</div>
			</DocumentTitle>
		);
	}
}