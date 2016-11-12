import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import FlatButton from 'material-ui/FlatButton';
import MoneyList from '../moneyList';
import QuestionLayout from '../questionLayout';
import Logo from '../logo';
const style = {
	"buttons":{
		'marginBottom': 10,
		'borderRadius': 25, 
		'width': '100%', 
		'height': 40
	},
	"triangleLeft": {
	    height: 0,
	    width: 0,
	    borderRight: "100px solid green",
	    borderTop: "100px solid transparent",
	    borderBottom: "100px solid transparent",
	    backgroundColor: "black"
	},
	"title":
	{
		'margin': 40
	}
}

var Result = React.createClass({
	render(){
		return (this.props.visible == 'hidden') ? null :
		(
			<div className='text-center' style={style.title}>
				<h2 >

				</h2>
				<FlatButton label={this.props.correct? "next": "restart"} onClick={this.props.correct? ()=>{this.props.nextQuestion()} : ()=>{this.props.restart()}} />
			</div>
		);
	}
})

export default class QuizPage extends Component {
	constructor(props){
		super(props);
		this.data = this.getData();
		this.correct = false;

		this.state = {
			questionNumber: 0,
			showResult: false,
			//question: data[this.state.questionNumber].question,
		} 

		this.pickAnswer = this.pickAnswer.bind(this);
		this.nextQuestion = this.nextQuestion.bind(this);
		this.restart = this.restart.bind(this);
	}

	nextQuestion(){
		this.setState({questionNumber: this.state.questionNumber + 1});
		console.log('next');
	}

	restart(){
		this.setState({questionNumber: 0});
		console.log('restart');
	}

	getData(){
		return [
			{
				answer:0,
				question: "question one",
				selected:-1,
				answers:['a', 'b', 'c', 'd'],
			},
			{
				answer:0,
				question: "question TWO",
				selected:-1,
				answers:['a', 'b', 'c', 'd'],
			}
		]
	}

	pickAnswer(num){
		this.correct = num == this.data[this.state.questionNumber].answer;
		this.setState({showResult: true});
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

	render() {
		var answers = this.data[this.state.questionNumber].answers;
		var question = this.data[this.state.questionNumber].question;

		return (
			<DocumentTitle title="Quiz">
				<div>
					<div className='container'>
						<div className='row-fluid'>
						</div>
						<div className="row-fluid">

							<div className="col-md-10">
														<Logo />

								<QuestionLayout question={question} answers={answers} pickAnswer={this.pickAnswer} />
								<Result correct={this.correct} visible={this.state.showResult ? 'visible': 'hidden'} nextQuestion={this.nextQuestion} restart={this.restart} />

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

