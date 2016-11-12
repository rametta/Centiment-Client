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
	},
	"logo": {
		position: 'relative'
	},
	"questionLayout": {
		width: "100%",
		textAlign: "center"
	}
}

var Result = React.createClass({
	render(){
		return (
			<div className='text-center' style={style.title}>
				<h2 >

				</h2>
				<FlatButton label={this.props.correct? "next": "restart"} />
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
		var data = this.getData();
		this.state = {
			answer:0,
			question: "question one",
			selected:-1,
			answers:['a', 'b', 'c', 'd'],
			questionNumber: 0
		}

		this.pickAnswer = this.pickAnswer.bind(this);
	}

	getData(){
			data:[
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

	render() {
		return (
			<div>
				<DocumentTitle title="Quiz">
					<div>
						<div className='container'>
							<div className="row-fluid">

								<div className="col-md-8">
									<div><Logo style={style.logo} /></div>

									<div style={style.questionLayout}><QuestionLayout question={this.state.question} answers={this.state.answers} pickAnswer={this.pickAnswer} /></div>

									{this.answerSelected() ? <Result correct={this.state.selected == this.state.answer} />: <Prompt />}
								</div>

								<div style={{"position":"absolute","right":"0","paddingRight": "0"}} className="col-md-4 hidden-xs">
									<MoneyList question="5"/>
								</div>
							</div>
						</div>
					</div>
				</DocumentTitle>
			</div>
		)
	}
}	