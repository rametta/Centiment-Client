import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import {browserHistory} from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import MoneyList from '../moneyList';
import QuestionLayout from '../questionLayout';
import Logo from '../logo';
import axios from 'axios';
import QuizDrawer from '../quizDrawer';

const style = {
	"background": {
		background: 'url("../../../img/game-background.jpg")',
		position: 'fixed',
		width: '100%',
		height: '100%'
	},
	"questionNumber": {
		fontSize: '30px',
		color: 'rgb(255, 255, 255)',
		marginTop: '30px',
		position: 'absolute',
		right: '30px'
	},
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
	}, 
	"full":
	{
		'width': '100%',
		'height': '100%'
	},
	"next":
	{
		'backgroundColor': '#00e673',
	},
	"restart":
	{
		'backgroundColor': '#ff3333'
	},
	"lower_button":
	{
		'margin':40,
		'paddingLeft': 30
	}
}

var Result = React.createClass({

	render(){
		return (this.props.visible == 'hidden') ? null :
		(
			<div className='text-center' style={style.lower_button}>
				<FlatButton label={this.props.correct? "next": "restart"} onClick={this.props.correct? ()=>{this.props.nextQuestion()} : ()=>{this.props.restart()}} 
					style={this.props.correct? style.next : style.restart} />
			</div>
		);
	}
})

export default class QuizPage extends Component {
	constructor(props){
		super(props);
		
		this.correct = false;
		this.pickAnswer = this.pickAnswer.bind(this);
		this.nextQuestion = this.nextQuestion.bind(this);
		this.restart = this.restart.bind(this);

		this.state = {
			data: [],
			questionNumber: 0,
			showResult: false,
			selected: -1,
			ready:false,
			openMoneyDrawer: false
		} 
	}

	componentWillMount() {
		console.log('this.state wil mount: ', this.state);
		this.getData();
	}

	nextQuestion(){
		this.setState({questionNumber: this.state.questionNumber + 1, 'showResult': false, 'selected': -1});
		console.log('next');
	}

	restart(){
		this.setState({questionNumber: 0});
		console.log('restart');
	}

	getData(){
		console.log('calling axios');
		axios.get('http://109.228.59.45:8443/questions')
			.then((response) => {
				this.setState({data: response.data, ready: true}, function(){
					console.log("response: ", this.state.data);
				});
			})
			.catch((error) => {
				console.log('error:', error);
			});

		/*return [
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
		]*/
	}

	pickAnswer(num){
		console.log(num);
		this.correct = num == this.state.data[this.state.questionNumber].answer;

		if (this.correct && this.state.questionNumber == 1){
			browserHistory.push('/congrats');
		}

		this.setState({showResult: true, selected: num});


		// open money drawer
		this.openDrawer();
	}

	openDrawer() {
		setTimeout(() => {
			this.setState({openMoneyDrawer: true});
			setTimeout(() => {
				this.setState({openMoneyDrawer: false});
			}, 3000);
		}, 1000)
	}

	render() {

		if (this.state.ready){
			console.log('current question: ', this.state.data[this.state.questionNumber]);
			var answers = this.state.data[this.state.questionNumber].choices;
			var question = this.state.data[this.state.questionNumber].question;
			return (
				<DocumentTitle title="Quiz">
					<div style={style.background}>
						<div className='container'>
							<div className="row-fluid">
								<div>
									<span><img style={{left: '20px'}} className="lifelines" src="../../../img/phone.png" /></span>
									<span><img style={{left: '125px'}} className="lifelines" src="../../../img/fifty.png" /></span>
									<span><img style={{left: '225px'}} className="lifelines" src="../../../img/friend.png" /></span>
								</div>
								<div style={style.questionNumber}>Question {this.state.questionNumber + 1}</div>
							</div>
							<div className="row-fluid">

								<div className="col-md-12">
									<Logo />

									<QuestionLayout question={question} correct={this.correct} selected={this.state.selected > -1 ? this.state.selected: null} answers={answers} pickAnswer={this.pickAnswer} />
									<Result correct={this.correct} visible={this.state.showResult ? 'visible': 'hidden'} nextQuestion={this.nextQuestion} restart={this.restart} />
								</div>
								<QuizDrawer open={this.state.openMoneyDrawer} question={this.state.questionNumber}></QuizDrawer>
							</div>
						</div>
					</div>
				</DocumentTitle>
		)} else{
			return <div>Loading..</div>
		}

	}
}	

