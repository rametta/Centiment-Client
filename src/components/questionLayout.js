import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

export default class QueestionLayout extends Component {

	constructor(props){
		super(props);
		this.state = {
			'submitted': false
		}
	}

	onSubmit(){
		this.setState({'submitted': true});
	}

	getClassNames(num){
		if (this.state.submitted){
			if (num == this.props.selected){
				if (this.props.correct){
					return "green";
				} else{
					return "red";
				}
			}
		}
		return "";
	}

	render() {
		return (
				<svg id="quiz" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550.28 180.48">
				  <text transform="translate(55.2 1169.51)">C. {this.props.answers[2]}</text>
				  <polygon id="answer" className={this.getClassNames(2)} onClick={()=>{this.props.pickAnswer(2); this.onSubmit()}} points="28.96 106.94 208.97 106.94 236.69 124.42 208.97 143.21 28.96 143.21 1.24 125.08 28.96 106.94"/>
				  <text transform="translate(33.92 126.72)">C. {this.props.answers[2]}</text>
				  <text transform="translate(294.72 123.51)">C. {this.props.answers[2]}</text>
				  <polygon id="answer" className={this.getClassNames(3)} onClick={()=>{this.props.pickAnswer(3); this.onSubmit()}} points="268.48 105.94 448.48 105.94 476.21 123.42 448.48 142.21 268.48 142.21 240.76 124.08 268.48 105.94"/>
				  <text transform="translate(273.44 125.72)">D. {this.props.answers[3]}</text>
				  <text transform="translate(55.2 82.51)">C. {this.props.answers[2]}</text>
				  <polygon id="answer" className={this.getClassNames(0)} onClick={()=>{this.props.pickAnswer(0); this.onSubmit()}} points="28.96 64.94 208.97 64.94 236.69 82.42 208.97 101.21 28.96 101.21 1.24 83.08 28.96 64.94"/>
				  <text transform="translate(33.92 84.72)">A. {this.props.answers[0]}</text>
				  <text transform="translate(294.72 81.51)">C. {this.props.answers[2]}</text>
				  <polygon id="answer" className={this.getClassNames(1)} onClick={()=>{this.props.pickAnswer(1); this.onSubmit()}} points="268.48 63.94 448.48 63.94 476.21 81.42 448.48 100.21 268.48 100.21 240.76 82.08 268.48 63.94"/>
				  <text transform="translate(273.44 83.72)">B. {this.props.answers[1]}</text>
				  <text transform="translate(117.89 10.07)">C. {this.props.answers[2]}</text>
				  <polygon id="question" points="57.17 1.94 420.28 1.94 476.21 25.75 420.28 51.37 57.17 51.37 1.24 26.65 57.17 1.94"/>
				  <text className="questionLabel" transform="translate(37.49 31.4)">{this.props.question}</text>
				</svg>
		);
	}
}
