import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';


const styles = {
	"questionLayoutChild": {
		'width': '100%'
	},
	"a":{
		'fontSize': '18px',
		'fill': '#231f20',
		'fontFamily': 'font-family: MyriadPro-Regular, Myriad Pro'
	},
	"f":{
		'fontFamily': 'font-family: MyriadPro-Regular, Myriad Pro',
		'fontSize': 21,
		'fill': '#fff'
	},
	"n":{
		'fontSize': '18px',
		'fontFamily': 'font-family: MyriadPro-Regular, Myriad Pro',
		'fill': '#fff'
	},
	"e":{
		'fill': '#293990',
        'stroke': '#231f20',
        'strokeMiterlimit': 10
	}
}

export default class ReferencePage extends Component {
	render() {
		return (
			<div>
				<svg style={styles.questionLayoutChild} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520.28 250.48">
				  <text style={styles.a} onClick={()=>{this.props.pickAnswer(2)}} transform="translate(85.2 129.51)">C. {this.props.answers[2]}</text>
				  <polygon style={styles.e} points="28.96 106.94 208.97 106.94 236.69 124.42 208.97 143.21 28.96 143.21 1.24 125.08 28.96 106.94"/>
				  <text style={styles.f} onClick={()=>{this.props.pickAnswer(2)}}  transform="translate(63.92 131.72)">C. {this.props.answers[2]}</text>
				  <text style={styles.a} onClick={()=>{this.props.pickAnswer(2)}}  transform="translate(324.72 128.51)">C. {this.props.answers[2]}</text>
				  <polygon style={styles.e} points="268.48 105.94 448.48 105.94 476.21 123.42 448.48 142.21 268.48 142.21 240.76 124.08 268.48 105.94"/>
				  <text style={styles.f} onClick={()=>{this.props.pickAnswer(3)}}  transform="translate(303.44 130.72)">D. {this.props.answers[3]}</text>
				  <text style={styles.a} onClick={()=>{this.props.pickAnswer(2)}}  transform="translate(85.2 87.51)">C. {this.props.answers[2]}</text>
				  <polygon style={styles.e} points="28.96 64.94 208.97 64.94 236.69 82.42 208.97 101.21 28.96 101.21 1.24 83.08 28.96 64.94"/>
				  <text style={styles.f} onClick={()=>{this.props.pickAnswer(0)}}  transform="translate(63.92 89.72)">A. {this.props.answers[0]}</text>
				  <text style={styles.a} onClick={()=>{this.props.pickAnswer(2)}}  transform="translate(324.72 86.51)">C. {this.props.answers[2]}</text>
				  <polygon style={styles.e} points="268.48 63.94 448.48 63.94 476.21 81.42 448.48 100.21 268.48 100.21 240.76 82.08 268.48 63.94"/>
				  <text style={styles.f} onClick={()=>{this.props.pickAnswer(1)}}  transform="translate(303.44 88.72)">B. {this.props.answers[1]}</text>
				  <text style={styles.a} onClick={()=>{this.props.pickAnswer(2)}}  transform="translate(147.89 15.07)">C. {this.props.answers[2]}</text>
				  <polygon style={styles.e} points="57.17 1.94 420.28 1.94 476.21 25.75 420.28 51.37 57.17 51.37 1.24 26.65 57.17 1.94"/>
				  <text style={styles.n} transform="translate(37.49 31.4)">{this.props.question}</text>
				</svg>
			</div>
		);
	}
}
