import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Chart from '../chart';

export default class HomePage extends Component {
	render() {
		return (
			<DocumentTitle title="Home">
				<div>
					<Chart />
				</div>
			</DocumentTitle>
		);
	}
}