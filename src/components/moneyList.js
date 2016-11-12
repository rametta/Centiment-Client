import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';

const style={
	"item:": {
		'fontSize': '1.3em',
		'backgroundColor': 'white'
	},
	"inner": {
		'padding': '15px',
		'textAlign': 'center',
		'fontSize': '30px'
	},
	"marginTop": "15px"
}

export default class MoneyList extends Component {
	constructor(props){
		super(props);
		this.state = {
			question: this.props.question
		}
	}

	checkQuestion(num){
		if (num == this.state.question){
			return {'backgroundColor': '#ff9933'}
		}
		return {'backgroundColor': 'white'}
	}

	renderQuestions(){
		var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
		console.log(arr);
		return arr.map(a => {
			return (
				<ListItem
					key={a}
					primaryText={"$" + (100 * (a+1)).toString()}
					innerDivStyle={style.inner}
					style={style.item}
					style={this.checkQuestion(a)}
				/>
			);
		});
	}

	render() {
		return (
			<List style={style} className="thumbnail">
				{this.renderQuestions()};
			</List>
		)
	}
}	