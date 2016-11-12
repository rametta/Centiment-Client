import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class Quiz extends Component {
	render() {
		return(
				<div>
					<div>Test Page</div>
					<h1>{this.props.question}</h1>
					<div>
						<RaisedButton label='Answer One' fullWidth={true} />
						<RaisedButton label='Answer Two' fullWidth={true} />
						<RaisedButton label='Answer Three' fullWidth={true} />
						<RaisedButton label='Answer Four' fullWidth={true} />
					</div>
				</div>
			)
	}
}