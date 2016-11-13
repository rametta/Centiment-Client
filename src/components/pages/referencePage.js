import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Chart from '../chart';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

var data = [{title:'URL Avatar',subtitle:'Subtitle',overlaytitle:'', overlaysubtitle:'', buttonlabel:'', cardtitle:'', cardsubtitle:'', cardtext:'WSJ online coverage of breaking news and current headlines from the US and around the world. Top stories, photos, videos, detailed analysis and in-depth reporting.', img:'http://www.alicepasquini.com/wp-content/uploads/2014/08/The-Wall-Street-Journal-Logo.jpg'},
			{title:'URL Avatar',subtitle:'Subtitle',overlaytitle:'', overlaysubtitle:'', buttonlabel:'', cardtitle:'', cardsubtitle:'', cardtext:'The Economist offers authoritative insight and opinion on international news, politics, business, finance, science, technology and the connections between them.', img:'data:image/png;base64,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'},
			{title:'URL Avatar',subtitle:'Subtitle',overlaytitle:'', overlaysubtitle:'', buttonlabel:'', cardtitle:'', cardsubtitle:'', cardtext:'FINRA provides tools, templates, and other resources for firms with 150 or fewer registered representatives.', img:'http://haberpolk.com/wp-content/uploads/2013/01/finra-logo.jpg'},
			{title:'URL Avatar',subtitle:'Subtitle',overlaytitle:'', overlaysubtitle:'', buttonlabel:'', cardtitle:'', cardsubtitle:'', cardtext:'The Nasdaq Stock Market website, featuring stock quotes, analysis, financials, company news, market information as well as investing tools and guides.', img:'http://www.businessrockstars.com/wp-content/uploads/2016/06/Nasdaq.png'},
			{title:'URL Avatar',subtitle:'Subtitle',overlaytitle:'', overlaysubtitle:'', buttonlabel:'', cardtitle:'', cardsubtitle:'', cardtext:'Investopedia is the world\'s leading source of financial content on the web, ranging from market news to retirement strategies, investing education to insights from advisors.',img:'https://sr-careersite-image-prod.s3.amazonaws.com/55bfd468e4b0261373b72664/43ea7f64-91e4-45b4-a628-3fdc502f84e5'}];

export default class ReferencePage extends Component {
	
	rendercards(){
		return data.map((data, i) => {
			return (
				<Card key={i}>
				    <CardHeader
				      title={data.title}
				      subtitle= {data.subtitle}
				      avatar= {data.img} />
				    <CardMedia
				      overlay={<CardTitle title={data.overlaytitle} subtitle={data.overlaysubtitle} />}
				    >
				    <img src={data.img}/>
				    </CardMedia>
				    <CardTitle title={data.cardtitle} subtitle={data.subtitle} />
				    <CardText>
				      {data.cardtext}
				    </CardText>
				    <CardActions>
				    	<FlatButton label= {data.buttonlabel} />
				    </CardActions>
				</Card>
			);
		});
	}

	render() {
		return (
			<DocumentTitle title="References">
				<div>References Page
					{this.rendercards()}
				</div>
			</DocumentTitle>
		);
	}
}
