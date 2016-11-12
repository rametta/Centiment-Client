import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import FlatButton from 'material-ui/FlatButton';
import MoneyList from './moneyList';

const style = {
	"buttons":{
		'marginBottom': 10,
		'borderRadius': 25, 
		'width': '100%', 
		'height': 40
	},
	"title":
	{
		'margin': 40
	}
}

var Submit = React.createClass({
	render(){
		return (
			<div className='text-center' style={style.title}>
				<h2 >
					Are you sure?
				</h2>
				<FlatButton label="SUBMIT" />
			</div>
		);
	}
})

var Prompt = React.createClass({
	render(){
		return(
			<div className='text-center' style={style.title}>
				<h2>
					Pick an answer!
				</h2>
			</div>
		);
	}
})

export default class QuizPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			answer:0,
			question: "question one",
			selected:-1,
			answers:['a', 'b', 'c', 'd'],
			questionNumber: 1
		}
	}

	pickAnswer(num){
		this.setState({selected: num});
	}

	setBackground(num){
		if (this.state.selected == num)
			return '#42d9f4';
		return '#ff4d4d';
	}

	answerSelected(){
		if (this.state.selected > -1)
			return true;
		return false;
	}

	renderQuestions(){
		return this.state.answers.map((answer, i) => {
			return (
				<div className="col-md-offset-1 col-md-5" key={i}>
					<FlatButton style={style.buttons} backgroundColor={this.setBackground(i)} hoverColor='#ff4d4d' label={answer} onClick={() => this.pickAnswer(i)} />
				</div>)
		})
	}

	render() {
		return (
			<DocumentTitle title="Quiz">
				<div>
					<div className='container'>
						<div className="row-fluid">

							<div className="col-md-10">
								<div className='text-center'>
									<h5>For a thousand dollars</h5>
								</div>
								<div style={style.title} className='text-center'>
									<h1>Question ONE</h1>
								</div>
								{this.renderQuestions()}

								{this.answerSelected() ? <Submit />: <Prompt />}
							</div>

							<div className="col-md-2 hidden-xs">
								<MoneyList question="5"/>
							</div>
						</div>
					</div>
				</div>
			</DocumentTitle>
		)
	}
}	