import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';


const styles = {
	"questionLayoutChild": {
		width: "80%"
	},
	'fill': 'none',
	'stroke': '#231f20',
	'strokeMiterlimit': 10
}

export default class ReferencePage extends Component {
	render() {
		return (
			<svg style={styles.questionLayoutChild} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 392.17 150.48">
			  <defs>

			  </defs>
			  <line style={styles} x1="46.47" y1="0.5" x2="0.26" y2="29.24"/>
			  <line style={styles} x1="46.47" y1="57.98" x2="0.26" y2="29.24"/>
			  <line style={styles} x1="345.64" y1="57.98" x2="391.9" y2="29.33"/>
			  <line style={styles} x1="345.75" y1="0.5" x2="391.9" y2="29.33"/>
			  <line style={styles} x1="46.47" y1="0.5" x2="345.75" y2="0.5"/>
			  <line style={styles} x1="46.47" y1="57.98" x2="345.64" y2="57.98"/>
			  <text transform="translate(43.47 22.65)">{this.props.question} <tspan x="0" y="21.6">adipiscing elit. Nunc accumsan metus?</tspan>
			  </text>
			  <line style={styles} x1="31.01" y1="70.13" x2="10.26" y2="87.55"/>
			  <line style={styles} x1="31.01" y1="104.98" x2="10.26" y2="87.55"/>
			  <line style={styles} x1="165.38" y1="104.98" x2="186.15" y2="87.61"/>
			  <line style={styles} x1="165.43" y1="70.13" x2="186.15" y2="87.61"/>
			  <line style={styles} x1="31.01" y1="70.13" x2="165.43" y2="70.13"/>
			  <line style={styles} x1="31.01" y1="104.98" x2="165.38" y2="104.98"/>
			  <line style={styles} x1="228.01" y1="70.13" x2="207.26" y2="87.55"/>
			  <line style={styles} x1="228.01" y1="104.98" x2="207.26" y2="87.55"/>
			  <line style={styles} x1="362.38" y1="104.98" x2="383.15" y2="87.61"/>
			  <line style={styles} x1="362.43" y1="70.13" x2="383.15" y2="87.61"/>
			  <line style={styles} x1="228.01" y1="70.13" x2="362.43" y2="70.13"/>
			  <line style={styles} x1="228.01" y1="104.98" x2="362.38" y2="104.98"/>
			  <line style={styles} x1="32.01" y1="115.13" x2="11.26" y2="132.55"/>
			  <line style={styles} x1="32.01" y1="149.98" x2="11.26" y2="132.55"/>
			  <line style={styles} x1="166.38" y1="149.98" x2="187.15" y2="132.61"/>
			  <line style={styles} x1="166.43" y1="115.13" x2="187.15" y2="132.61"/>
			  <line style={styles} x1="32.01" y1="115.13" x2="166.43" y2="115.13"/>
			  <line style={styles} x1="32.01" y1="149.98" x2="166.38" y2="149.98"/>
			  <line style={styles} x1="229.01" y1="115.13" x2="208.26" y2="132.55"/>
			  <line style={styles} x1="229.01" y1="149.98" x2="208.26" y2="132.55"/>
			  <line style={styles} x1="363.38" y1="149.98" x2="384.15" y2="132.61"/>
			  <line style={styles} x1="363.43" y1="115.13" x2="384.15" y2="132.61"/>
			  <line style={styles} x1="229.01" y1="115.13" x2="363.43" y2="115.13"/>
			  <line style={styles} x1="229.01" y1="149.98" x2="363.38" y2="149.98"/>

			  <text onClick={()=>{this.props.pickAnswer(0)}} transform="translate(50.95 92.63)">A. {this.props.answers[0]}</text>
			  <text onClick={()=>{this.props.pickAnswer(1)}} transform="translate(246.95 92.63)">B. {this.props.answers[1]}</text>
			  <text onClick={()=>{this.props.pickAnswer(2)}} transform="translate(246.95 137.63)">D. {this.props.answers[3]}</text>
			  <text onClick={()=>{this.props.pickAnswer(3)}} transform="translate(49.95 137.63)">C. {this.props.answers[2]}</text>
			</svg>
		);
	}
}