import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Logo from '../logo.js'

const style = {
	"background": {
		background: 'url("../../../img/game-background.jpg")',
		position: 'fixed',
		width: '100%',
		height: '100%',
		color: 'white'
	},
	"logo":{
		paddingLeft:20
	}
}

export default class CongratsPage extends Component {
	render() {
		return (
			<DocumentTitle title="Congratulations">
				<div className="text-center" style={style.background}>
					<h1>Congratulations!</h1>
					<h3>You're a millionaire now! (sort of)</h3>
					<div><Logo style={style.logo}/></div>
					<h5>Go and test your newfound knowlege on the actual market!</h5>
				</div>
			</DocumentTitle>
		)
	}
}