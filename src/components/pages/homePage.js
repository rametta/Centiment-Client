import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Chart from '../chart';
import Logo from '../logo';

export default class HomePage extends Component {
	render() {
		return (
			<DocumentTitle title="Home">
				<div>
					<Logo />
				</div>
			</DocumentTitle>
		);
	}
}