import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

export default class HomePage extends Component {
	render() {
		return (
			<DocumentTitle title="Home">
				<div>Home Page</div>
			</DocumentTitle>
		);
	}
}